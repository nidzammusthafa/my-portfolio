"use client";

import { useAuthStore } from "@/stores/authStore";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface AuthProviderProps {
  children: React.ReactNode;
  protectedRoutes: string[];
}

export const AuthProvider = ({
  children,
  protectedRoutes,
}: AuthProviderProps) => {
  const { isLoggedIn, isAuthChecked, login, checkLoginStatus, setToken } =
    useAuthStore();
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  const handlePasswordSubmit = useCallback(async () => {
    if (passwordInput.length !== 8) {
      setErrorMessage("Kata sandi harus 8 digit.");
      return;
    }
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch("/api/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passwordInput }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        login();
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          setToken(data.token);
        }
        setErrorMessage("");
        setPasswordInput("");
      } else {
        setErrorMessage(data.message || "Verifikasi kata sandi gagal.");
        setPasswordInput("");
      }
    } catch (error) {
      console.error("Error verifying password:", error);
      setErrorMessage("Terjadi kesalahan jaringan atau server.");
    } finally {
      setIsLoading(false);
    }
  }, [passwordInput, login, setToken]);

  useEffect(() => {
    if (passwordInput.length === 8 && !isLoading) {
      void handlePasswordSubmit();
    }
  }, [passwordInput, isLoading, handlePasswordSubmit]);

  if (!isAuthChecked) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-accent" />
        <p className="mt-4 text-lg text-lightest-slate">Memuat...</p>
      </div>
    );
  }

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtectedRoute && !isLoggedIn) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-navy/90 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-2xl bg-navy p-10 text-center shadow-2xl shadow-black/40">
          <h2 className="text-3xl font-bold text-lightest-slate">
            Akses Terbatas
          </h2>
          <p className="mt-4 text-slate">
            Untuk mengakses halaman ini, silakan masukkan 8 digit kata sandi
            Anda.
          </p>
          <div className="mt-8 flex justify-center">
            <InputOTP
              maxLength={8}
              value={passwordInput}
              onValueChange={(value) => setPasswordInput(value)}
              disabled={isLoading}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
                <InputOTPSlot index={6} />
                <InputOTPSlot index={7} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          {errorMessage && (
            <p className="mt-4 text-sm font-medium text-red-400">
              {errorMessage}
            </p>
          )}
          <Button
            onClick={handlePasswordSubmit}
            disabled={isLoading || passwordInput.length !== 8}
            className="mt-10 w-full"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Memverifikasi...
              </>
            ) : (
              "Masuk Aplikasi"
            )}
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
