import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS & Sass", level: 90, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "React", level: 95, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Zustand", level: 80, category: "Frontend" },
  { name: "D3.js", level: 70, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "Prisma", level: 85, category: "Backend" },
  { name: "Socket.IO", level: 80, category: "Backend" },
  { name: "REST APIs", level: 95, category: "Backend" },

  // Database
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "MongoDB", level: 85, category: "Database" },
  { name: "MySQL", level: 75, category: "Database" },

  // DevOps
  { name: "Docker", level: 70, category: "DevOps" },

  // Tools
  { name: "Git & GitHub", level: 90, category: "Tools" },
  { name: "Puppeteer", level: 75, category: "Tools" },
  { name: "Vite", level: 85, category: "Tools" },
  { name: "Webpack", level: 70, category: "Tools" },
];
