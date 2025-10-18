import React from "react";
import type { Project } from "../types";
import { IconExternalLink } from "./Icons";
import Image from "next/image";

export { projects } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-accent focus-visible:text-accent group/link text-lg"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span className="flex">
                {project.title} <IconExternalLink />
              </span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{project.description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Image
        alt={project.title}
        loading="lazy"
        width="200"
        height="48"
        decoding="async"
        data-nimg="1"
        className="rounded-md border-2 border-slate/10 transition group-hover:border-slate/30 sm:col-span-2 sm:translate-y-1"
        style={{ color: "transparent" }}
        src={project.image}
      />
    </div>
  );
};
