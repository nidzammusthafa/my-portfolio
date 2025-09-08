"use client";

import React, { useRef, useEffect, useState } from "react";
import type { Skill } from "../types";
import useOnScreen from "@/hooks/useOnScreen";

interface SkillBarProps {
  skill: Skill;
}

const SkillBar = ({ skill }: SkillBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (onScreen) {
      // Animate the bar width when it comes into view
      const timer = setTimeout(() => setWidth(skill.level), 100);
      return () => clearTimeout(timer);
    }
  }, [onScreen, skill.level]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-lightest-slate">
          {skill.name}
        </span>
        <span className="text-sm font-medium text-lightest-slate">
          {skill.level}%
        </span>
      </div>
      <div ref={ref} className="w-full bg-light-navy rounded-full h-2.5">
        <div
          className="bg-accent h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
