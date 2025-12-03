"use client";

import { useState } from "react";
import type { Heading } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TOCProps {
  headings: Heading[];
}

const TOC = ({ headings }: TOCProps) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <div className="custom-scrollbar rounded-lg bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between font-bold text-white py-3 px-4 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 rounded-t-lg hover:bg-neutral-800/50 transition-colors"
      >
        <span>On this page</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-neutral-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[50vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-y-auto max-h-[50vh] px-4 py-2">
          <ul className="space-y-2 pb-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                style={{ marginLeft: `${(heading.level - 1) * 0.75}rem` }}
              >
                <a
                  href={`#${heading.id}`}
                  className="text-sm text-neutral-400 hover:text-accent-500 transition-colors duration-200 block py-1"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TOC;
