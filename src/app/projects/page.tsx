import { IconArrowLeft } from "@/components/Icons";
import { ProjectCard, projects } from "@/components/ProjectData";
import Link from "next/link";
import React from "react";

const AllProjects = () => {
  return (
    <main className="mx-auto min-h-screen max-w-screen-lg px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24">
      <div className="lg:py-24">
        <div>
          <Link
            href="/#"
            className="group mb-8 inline-flex items-center font-semibold leading-tight text-accent transition-colors duration-300 hover:text-lightest-slate"
          >
            <IconArrowLeft />
            <span className="ml-2">Ahmad Nidzam Musthafa</span>
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl">
          All Projects
        </h1>

        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <li key={index} className="transition-opacity">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AllProjects;
