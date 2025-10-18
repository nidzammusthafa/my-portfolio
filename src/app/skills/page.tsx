import { IconArrowLeft } from "@/components/Icons";
import SkillBar from "@/components/SkillBar";
import { skills } from "@/components/SkillData";
import { Skill } from "@/types";
import Link from "next/link";
import React from "react";

const AllSkills = () => {
  const categorizedSkills: Record<string, Skill[]> = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "DevOps",
    "Tools",
    "OS",
  ];

  return (
    <main className="mx-auto min-h-screen max-w-screen-lg px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24">
      <div className="lg:py-24">
        <div>
          <Link
            href="/#"
            className="group mb-8 inline-flex items-center font-semibold leading-tight text-accent transition-colors duration-300 hover:text-lightest-slate"
          >
            <IconArrowLeft />
            <span className="ml-2">Back to Home</span>
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl">
          All Skills
        </h1>

        <div className="mt-12 space-y-12">
          {categories.map(
            (category) =>
              categorizedSkills[category] && (
                <div key={category}>
                  <h2 className="text-2xl font-bold text-light-slate mb-6">
                    {category}
                  </h2>
                  <ul className="space-y-4">
                    {categorizedSkills[category].map((skill) => (
                      <li key={skill.name}>
                        <SkillBar skill={skill} />
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
      </div>
    </main>
  );
};

export default AllSkills;
