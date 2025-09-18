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
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Tools" | "OS";
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

export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface Heading {
  level: number;
  text: string;
  id: string;
}

import { ExtendedRecordMap } from 'notion-types';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags?: Tag[];
  category?: Tag[];
  headings?: Heading[];
  recordMap?: ExtendedRecordMap;
  author?: {
    name: string;
    avatar_url: string;
  };
}
