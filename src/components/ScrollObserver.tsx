"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let items = document.querySelectorAll(".scroll-item");

    const initItems = () => {
      items = document.querySelectorAll(".scroll-item");
      items.forEach((item, index) => {
        if (
          !item.classList.contains("slide-from-left") &&
          !item.classList.contains("slide-from-right") &&
          !item.classList.contains("slide-from-top") &&
          !item.classList.contains("slide-from-bottom")
        ) {
          if (index % 2 === 0) item.classList.add("slide-from-left");
          else item.classList.add("slide-from-right");
        }
      });
    };

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      // Trigger animation when element is 85% up the viewport
      const triggerPoint = viewportHeight * 0.85;

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const elementHeight = rect.height;

        // Check if element is half covered by the top of the browser
        const isHalfPastTop = rect.top < -elementHeight / 2;
        const isVisible = rect.top < triggerPoint && rect.bottom > 0;

        if (isVisible) {
          if (isHalfPastTop) {
            // Half of it is covered by top -> disappear fast
            item.classList.add("scrolled-past");
            item.classList.remove("in-view");
          } else {
            // Normal visible state -> appear slowly
            item.classList.add("in-view");
            item.classList.remove("scrolled-past");
          }
        } else {
          // Not visible
          item.classList.remove("in-view");
          // If it's above viewport, keep it hidden
          if (rect.top < 0) {
            item.classList.add("scrolled-past");
          } else {
            // If it's below viewport, reset so it can animate in again
            item.classList.remove("scrolled-past");
          }
        }
      });
    };

    const handleResize = () => {
      initItems();
      handleScroll();
    };

    // Observer for DOM changes to handle dynamic content
    const observer = new MutationObserver(() => {
      initItems();
      handleScroll();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial setup
    initItems();
    handleScroll();

    // Force check after small delay to ensure layout is settled
    const timeoutId = setTimeout(handleScroll, 100);
    const timeoutId2 = setTimeout(handleScroll, 500); // Extra check for slower loads

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return null;
}
