import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "React", level: 95, category: "Frontend" },
  { name: "Next.js", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Zustand", level: 80, category: "Frontend" },
  { name: "Shadcn UI", level: 95, category: "Frontend" },
  { name: "Flutter", level: 50, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "Prisma", level: 85, category: "Backend" },
  { name: "Socket.IO", level: 80, category: "Backend" },
  { name: "REST APIs", level: 95, category: "Backend" },
  { name: "NestJS", level: 45, category: "Backend" },

  // Database
  { name: "PostgreSQL", level: 50, category: "Database" },
  { name: "MongoDB", level: 95, category: "Database" },
  { name: "MySQL", level: 50, category: "Database" },

  // DevOps
  { name: "Docker", level: 70, category: "DevOps" },
  { name: "Vercel", level: 95, category: "DevOps" },
  { name: "Coolify", level: 70, category: "DevOps" },

  // Tools
  { name: "Git & GitHub", level: 90, category: "Tools" },
  { name: "Puppeteer", level: 75, category: "Tools" },

  // OS
  { name: "Windows", level: 90, category: "OS" },
  { name: "Debian Based", level: 90, category: "OS" },
  { name: "Arch Based", level: 75, category: "OS" },
];
