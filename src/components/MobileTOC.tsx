"use client";

import { useState, useEffect } from "react";
import { List, X } from "lucide-react";
import type { Heading } from "@/types";

interface MobileTOCProps {
  headings: Heading[];
}

const MobileTOC = ({ headings }: MobileTOCProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTOC = () => {
    setIsOpen(!isOpen);
  };

  // Close TOC when clicking outside of it on mobile
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        event.target instanceof Element &&
        !event.target.closest(".toc-container")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleTOC}
        className="fixed top-1/2 left-0 -translate-y-1/2 z-50 p-2 bg-accent-500 text-white rounded-r-lg shadow-lg lg:hidden"
        aria-label="Toggle Table of Contents"
      >
        {isOpen ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
      </button>

      <div
        className={`toc-container fixed top-0 left-0 h-full w-72 bg-neutral-900/95 backdrop-blur-md overflow-y-auto p-6 shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden border-r border-neutral-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h3 className="text-lg font-bold text-white mb-4">On this page</h3>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
            >
              <a
                href={`#${heading.id}`}
                onClick={() => setIsOpen(false)}
                className="block py-1 text-neutral-400 hover:text-accent-500 transition-colors duration-200"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay to close TOC on click */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default MobileTOC;
