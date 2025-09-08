import React from "react";

export interface Service {
  title: string;
  description: string;
  icon: React.ReactElement;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Tools";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}
