import React from "react";
import Section from "./Section";
import {
  IconNextJS,
  IconTypeScript,
  IconExpress,
  IconArrowRight,
} from "./Icons";
import Link from "next/link";

const skillsData = {
  hardskills: [
    { name: "FullStack Web Developer", icon: null },
    { name: "Typescript", icon: <IconTypeScript /> },
    { name: "Next.js", icon: <IconNextJS /> },
    { name: "Express.js", icon: <IconExpress /> },
  ],
  otherTech: [
    "Shadcn UI",
    "Tailwind CSS",
    "Socket.IO",
    "Puppeteer",
    "Zustand",
    "Prisma",
    "Git",
  ],
  softskills: [
    "Clean Code Architecture",
    "Scalable, Maintainable, Readable",
    "Good Communication",
    "Fast Learner & AI Adopter",
  ],
};

// Fix: Defined a dedicated interface for SkillItem props to resolve type errors with the 'key' prop.
interface SkillItemProps {
  children: React.ReactNode;
}

const SkillItem = ({ children }: SkillItemProps) => (
  <li className="flex items-center before:content-['▹'] before:text-accent before:mr-3">
    {children}
  </li>
);

const Skills = () => {
  return (
    <Section id="skills">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center whitespace-nowrap text-accent font-mono">
        Skills
        <span className="block w-full h-px bg-light-navy ml-6"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg">
        <div>
          <h3 className="text-xl font-bold text-light-slate mb-4">
            Hardskills
          </h3>
          <ul className="space-y-2 font-mono text-sm">
            {skillsData.hardskills.map((skill) => (
              <SkillItem key={skill.name}>
                <span className="flex items-center gap-2">
                  {skill.icon}
                  {skill.name}
                </span>
              </SkillItem>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-light-slate mb-4">
            Other Technologies
          </h3>
          <ul className="space-y-2 font-mono text-sm columns-2">
            {skillsData.otherTech.map((skill) => (
              <SkillItem key={skill}>{skill}</SkillItem>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-light-slate mb-4">
            Softskills
          </h3>
          <ul className="space-y-2 font-mono text-sm">
            {skillsData.softskills.map((skill) => (
              <SkillItem key={skill}>{skill}</SkillItem>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <Link
          href="/skills"
          className="inline-flex items-center font-semibold leading-tight text-lightest-slate group"
        >
          <span className="flex">
            <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">
              View All Skills
            </span>
            <IconArrowRight />
          </span>
        </Link>
      </div>
    </Section>
  );
};

export default Skills;
