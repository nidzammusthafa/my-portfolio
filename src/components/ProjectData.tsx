import React from "react";
import type { Project } from "../types";
import { IconExternalLink } from "./Icons";
import Image from "next/image";

export const projects: Project[] = [
  {
    title: "WhatsApp Business Dashboard",
    description:
      "Platform terpusat yang dirancang untuk mengotomatisasi pemasaran WhatsApp, meningkatkan interaksi pelanggan, dan menjaga keamanan akun. Aplikasi ini memberdayakan bisnis untuk menjalankan kampanye secara efisien, mengelola hubungan pelanggan, dan memastikan pesan selalu sampai tujuan.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "Express Js",
      "Socket.IO",
    ],
    image: "https://images.unsplash.com/photo-1633675254245-efd890d087b8",
    liveUrl: "https://whatsapp-business-tools.vercel.app/dashboard",
    githubUrl: "https://github.com/nidzammusthafa/whatsapp-business-tools",
  },
  {
    title: "IdPlay Company Profile",
    description:
      "Membangun aplikasi web Next.js yang responsif untuk provider internet. Aplikasi ini memiliki fitur utama pengecekan jangkauan geografis dan tampilan paket layanan yang dinamis.",
    technologies: ["Nextjs", "Typescript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1531765408077-9a1f85f90df1",
    liveUrl: "https://idplay.it.com",
    githubUrl: "https://github.com/nidzammusthafa/idplay",
  },
  {
    title: "Al-Qur'an",
    description:
      "Membangun aplikasi web Next.js yang responsif untuk provider internet. Aplikasi ini memiliki fitur utama pengecekan jangkauan geografis dan tampilan paket layanan yang dinamis.",
    technologies: ["Nextjs", "Typescript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1624862304458-0bb3d6f4b13c",
    liveUrl: "https://quran-with-ai.vercel.app",
  },
  {
    title: "IST Test Tools",
    description:
      "Kenali Potensi Terbaik Anda. Mulai Tes IST Sekarang! Penasaran di mana letak kekuatan berpikir Anda? Aplikasi Tes IST (Intelligenz-Struktur-Test) kami hadir dengan antarmuka modern dan proses yang intuitif untuk membantu Anda memetakan kecerdasan Anda secara akurat.",
    technologies: ["Nextjs", "Typescript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1620302044935-444961a5d028",
    liveUrl: "https://ist-test.vercel.app",
    githubUrl: "#",
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
