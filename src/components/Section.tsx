"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return { ref, isVisible };
};

const Section = ({ children, id, className = "" }: SectionProps) => {
  const { ref, isVisible } = useOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-[50vh] py-20 lg:py-24 transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
