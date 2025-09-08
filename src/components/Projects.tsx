import React from "react";
import Section from "./Section";
import { ProjectCard, projects } from "./ProjectData";
import { IconArrowRight } from "./Icons";
import Link from "next/link";

const Projects = () => {
  return (
    <Section id="projects">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center whitespace-nowrap text-accent font-mono">
        Some Things I’ve Built
        <span className="block w-full h-px bg-light-navy ml-6"></span>
      </h2>
      <ul className="group/list space-y-12">
        {projects.slice(0, 3).map((project, index) => (
          <li key={index}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center font-semibold leading-tight text-lightest-slate group"
        >
          <span className="flex">
            <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">
              View Full Project Archive
            </span>
            <IconArrowRight />
          </span>
        </Link>
      </div>
    </Section>
  );
};

export default Projects;
