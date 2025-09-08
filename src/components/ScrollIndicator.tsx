"use client";

import { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (height > 0) {
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    } else {
      setScrollTop(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 h-screen w-0.5 bg-light-navy/30 z-50 pointer-events-none">
      <div         className="bg-accent shadow-[0_0_10px_#64ffda]" style={{ height: `${scrollTop}%` }} />
    </div>
  );
};

export default ScrollIndicator;
