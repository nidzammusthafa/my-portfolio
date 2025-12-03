"use client";

import Starfield from "@/components/Starfield";
import Grid3d from "@/components/Grid3d";
import FlashlightEffect from "@/components/FlashlightEffect";
import ScrollObserver from "@/components/ScrollObserver";
import Footer from "@/components/Footer";
import {
  Layers,
  Radio,
  TrendingUp,
  ArrowLeft,
  Code,
  Database,
  Cloud,
  Smartphone,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

const allServices = [
  {
    icon: Layers,
    title: "Fullstack Development",
    description:
      "End-to-end web application development using modern frameworks (Next.js, React, Vue) and robust backend solutions (Node.js, Python, Go).",
  },
  {
    icon: Radio,
    title: "Broadcast Services",
    description:
      "High-throughput messaging APIs, real-time notification systems, and WebSocket infrastructure for live data streaming.",
  },
  {
    icon: TrendingUp,
    title: "SaaS Application Sales",
    description:
      "Strategic implementation, technical sales optimization, and growth hacking strategies for software-as-a-service products.",
  },
  {
    icon: Code,
    title: "API Design & Integration",
    description:
      "Designing RESTful and GraphQL APIs that are secure, scalable, and easy to consume. Seamless integration with third-party services.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Designing and optimizing database schemas for performance and scalability. Expertise in SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis).",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Deploying and managing applications on AWS, Google Cloud, or Azure. Implementing CI/CD pipelines, containerization (Docker), and orchestration (Kubernetes).",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications using React Native or Flutter, ensuring a native-like experience on both iOS and Android.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description:
      "Conducting comprehensive security assessments, vulnerability scanning, and penetration testing to safeguard your applications and data.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Analyzing and optimizing application performance, reducing load times, and improving Core Web Vitals for better user experience and SEO.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <FlashlightEffect />
      <ScrollObserver />

      {/* Abstract Background Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden perspective-container">
        <Starfield />
        <Grid3d />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-500/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[100px] animate-float-delayed bg-blue-600/10"></div>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-neutral-950"></div>
      </div>

      <main className="w-full py-12 relative overflow-x-hidden min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 scroll-item slide-from-left"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-mono font-bold text-white mb-16 scroll-item slide-from-top">
            All Services
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="scroll-item flashlight-card p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300"
              >
                <service.icon className="text-accent-500 w-8 h-8 mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {service.title}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
