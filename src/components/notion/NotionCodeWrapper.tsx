"use client";

import * as React from "react";
import { useState, useCallback } from "react";
import { Code } from "react-notion-x/build/third-party/code";
import { Check, Copy, Code2, Terminal } from "lucide-react";
import type { CodeBlock } from "notion-types";

const languageIcons: Record<string, React.ReactNode> = {
  javascript: <span className="text-yellow-400 font-bold text-xs">JS</span>,
  typescript: <span className="text-blue-400 font-bold text-xs">TS</span>,
  python: <span className="text-green-400 font-bold text-xs">PY</span>,
  rust: <span className="text-orange-400 font-bold text-xs">RS</span>,
  go: <span className="text-cyan-400 font-bold text-xs">GO</span>,
  java: <span className="text-red-400 font-bold text-xs">JV</span>,
  cpp: <span className="text-purple-400 font-bold text-xs">C++</span>,
  c: <span className="text-blue-300 font-bold text-xs">C</span>,
  html: <span className="text-orange-500 font-bold text-xs">HTML</span>,
  css: <span className="text-blue-500 font-bold text-xs">CSS</span>,
  json: <span className="text-yellow-300 font-bold text-xs">JSON</span>,
  bash: <Terminal className="w-3 h-3" />,
  shell: <Terminal className="w-3 h-3" />,
  sql: <span className="text-emerald-400 font-bold text-xs">SQL</span>,
};

const languageColors: Record<string, string> = {
  javascript: "border-yellow-500/30",
  typescript: "border-blue-500/30",
  python: "border-green-500/30",
  rust: "border-orange-500/30",
  go: "border-cyan-500/30",
  java: "border-red-500/30",
  cpp: "border-purple-500/30",
  c: "border-blue-400/30",
  html: "border-orange-500/30",
  css: "border-blue-500/30",
  json: "border-yellow-400/30",
  bash: "border-emerald-500/30",
  shell: "border-emerald-500/30",
  sql: "border-emerald-400/30",
  default: "border-accent-500/30",
};

interface NotionCodeWrapperProps {
  block: CodeBlock;
  defaultLanguage?: string;
  className?: string;
}

function extractText(
  decorations: Array<[string, unknown[]?]> | undefined
): string {
  if (!decorations) return "";
  return decorations.map((d) => d[0]).join("");
}

export const NotionCodeWrapper: React.FC<NotionCodeWrapperProps> = (props) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const code = extractText(
    props.block?.properties?.title as Array<[string, unknown[]?]>
  );
  const language =
    extractText(
      props.block?.properties?.language as Array<[string, unknown[]?]>
    )?.toLowerCase() || "plain";

  const borderColor = languageColors[language] || languageColors.default;
  const icon = languageIcons[language] || <Code2 className="w-3 h-3" />;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  return (
    <div
      className="notion-code-custom my-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative overflow-hidden rounded-xl border backdrop-blur-md
          bg-gradient-to-br from-neutral-900/90 to-neutral-950/90
          ${borderColor}
          transition-all duration-300 ease-out
          ${
            isHovered
              ? "shadow-2xl shadow-accent-500/20 scale-[1.005]"
              : "shadow-lg shadow-neutral-950/50"
          }
        `}
      >
        {/* Custom Header Bar - Sticky */}
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-900/95 border-b border-neutral-700/50 sticky top-0 z-10 backdrop-blur-md rounded-t-xl">
          <div className="flex items-center gap-3">
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
            </div>

            {/* Language badge */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-neutral-800/80 border border-neutral-700/50">
              {icon}
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-medium">
                {language}
              </span>
            </div>
          </div>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-lg
              text-xs font-medium tracking-wide uppercase
              transition-all duration-300 ease-out cursor-pointer
              ${
                copied
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                  : "bg-neutral-800/80 text-neutral-400 border border-neutral-700/50 hover:bg-neutral-700/80 hover:text-neutral-200 hover:border-neutral-600/50"
              }
              ${isHovered && !copied ? "scale-105" : ""}
            `}
            aria-label={copied ? "Copied!" : "Copy code"}
          >
            <span
              className={`
                relative inline-flex items-center justify-center
                transition-all duration-300
                ${copied ? "text-emerald-400" : "text-neutral-400"}
              `}
            >
              {copied ? (
                <Check className="w-3.5 h-3.5" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </span>
            <span>{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>

        {/* Original Code Component */}
        <div className="notion-code-content">
          <Code {...props} />
        </div>

        {/* Bottom accent line */}
        <div className="h-0.5 bg-linear-to-r from-emerald-600 via-accent-500 to-teal-600 opacity-60" />
      </div>
    </div>
  );
};

export default NotionCodeWrapper;
