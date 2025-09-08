import React from 'react';
import type { Project } from '../types';
import { IconExternalLink } from './Icons';

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce application with a custom CMS, payment gateway integration, and a responsive user interface built for performance and scalability.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'PostgreSQL'],
    image: 'https://picsum.photos/seed/project1/800/600',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Real-time Chat Application',
    description: 'A web-based chat application using WebSockets for instant messaging, featuring private channels, user authentication, and message history.',
    technologies: ['React', 'Express.js', 'Socket.IO', 'Zustand', 'MongoDB'],
    image: 'https://picsum.photos/seed/project2/800/600',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Automated Web Scraper',
    description: 'A powerful web scraping tool built with Puppeteer to automate data extraction from various websites, with a dashboard to manage and view scraped data.',
    technologies: ['Node.js', 'Puppeteer', 'Express.js', 'React'],
    image: 'https://picsum.photos/seed/project3/800/600',
    githubUrl: '#',
  },
    {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, featuring various chart types, filters, and data export functionalities.',
    technologies: ['React', 'D3.js', 'Tailwind CSS', 'TypeScript'],
    image: 'https://picsum.photos/seed/project4/800/600',
    liveUrl: '#',
  },
];


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
            <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-accent focus-visible:text-accent group/link text-lg">
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>{project.title} <IconExternalLink /></span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{project.description}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {project.technologies.map(tech => (
            <li key={tech} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">{tech}</div>
            </li>
          ))}
        </ul>
      </div>
      <img alt={project.title} loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="rounded border-2 border-slate/10 transition group-hover:border-slate/30 sm:col-span-2 sm:translate-y-1" style={{color: 'transparent'}} src={project.image}/>
    </div>
  );
};
