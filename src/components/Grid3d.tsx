"use client";

import { useEffect, useRef } from "react";

export default function Grid3d() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current) {
        const scrolled = window.scrollY;
        gridRef.current.style.transform = `rotateX(60deg) translateY(${
          scrolled * 0.5
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div ref={gridRef} id="grid-3d" className="grid-3d opacity-30"></div>;
}
