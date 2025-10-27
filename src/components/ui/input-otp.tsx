"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface InputOTPProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  maxLength: number;
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
}

interface InputOTPSlotProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  index: number;
}

interface InputOTPContextValue {
  maxLength: number;
  value: string;
  disabled?: boolean;
  setSlotValue: (index: number, char: string) => void;
  registerSlot: (index: number, slot: HTMLInputElement | null) => void;
  focusSlot: (index: number) => void;
}

const InputOTPContext = React.createContext<InputOTPContextValue | null>(null);

export const InputOTP = ({
  maxLength,
  value,
  onValueChange,
  children,
  className,
  disabled,
  ...props
}: InputOTPProps) => {
  const slotsRef = React.useRef<Array<HTMLInputElement | null>>([]);

  const setSlotValue = React.useCallback(
    (index: number, char: string) => {
      const normalized = char.replace(/\s+/g, "");
      const values = Array.from(
        { length: maxLength },
        (_, idx) => value[idx] ?? ""
      );
      values[index] = normalized;
      onValueChange(values.join(""));
    },
    [maxLength, onValueChange, value]
  );

  const registerSlot = React.useCallback(
    (index: number, slot: HTMLInputElement | null) => {
      slotsRef.current[index] = slot;
    },
    []
  );

  const focusSlot = React.useCallback((index: number) => {
    const slot = slotsRef.current[index];
    slot?.focus();
    slot?.select();
  }, []);

  const contextValue = React.useMemo<InputOTPContextValue>(
    () => ({
      maxLength,
      value,
      disabled,
      setSlotValue,
      registerSlot,
      focusSlot,
    }),
    [disabled, focusSlot, maxLength, registerSlot, setSlotValue, value]
  );

  return (
    <InputOTPContext.Provider value={contextValue}>
      <div
        className={cn("flex items-center gap-4", className)}
        role="group"
        {...props}
      >
        {children}
      </div>
    </InputOTPContext.Provider>
  );
};

export const InputOTPGroup = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center gap-2", className)} {...props} />
);

export const InputOTPSeparator = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-lg font-semibold text-slate", className)} {...props}>
    -
  </div>
);

export const InputOTPSlot = ({
  index,
  className,
  onKeyDown,
  onChange,
  ...props
}: InputOTPSlotProps) => {
  const context = React.useContext(InputOTPContext);

  if (!context) {
    throw new Error("InputOTPSlot must be used within an InputOTP component");
  }

  const { value, maxLength, disabled, setSlotValue, registerSlot, focusSlot } =
    context;
  const slotValue = value[index] ?? "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numeric = inputValue.replace(/\D/g, "");

    if (!numeric) {
      setSlotValue(index, "");
      onChange?.(event);
      return;
    }

    const char = numeric.slice(-1);
    setSlotValue(index, char);
    onChange?.(event);

    if (index < maxLength - 1) {
      focusSlot(index + 1);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && slotValue === "") {
      const previousIndex = index - 1;
      if (previousIndex >= 0) {
        event.preventDefault();
        setSlotValue(previousIndex, "");
        focusSlot(previousIndex);
      }
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusSlot(Math.max(index - 1, 0));
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusSlot(Math.min(index + 1, maxLength - 1));
    }

    onKeyDown?.(event);
  };

  const inputRef = React.useCallback(
    (node: HTMLInputElement | null) => {
      registerSlot(index, node);
    },
    [index, registerSlot]
  );

  return (
    <input
      ref={inputRef}
      value={slotValue}
      inputMode="numeric"
      pattern="[0-9]*"
      maxLength={1}
      autoComplete="one-time-code"
      className={cn(
        "h-12 w-12 rounded-md border border-light-navy bg-dark-navy text-center text-xl font-semibold text-lightest-slate outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      {...props}
    />
  );
};
