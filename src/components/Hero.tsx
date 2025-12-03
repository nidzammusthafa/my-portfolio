"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const revealContainerRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const animateText = (
      element: HTMLElement | null,
      text: string,
      delayOffset = 0
    ) => {
      if (!element) return;
      element.innerHTML = "";
      const words = text.split(" ");
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        span.className = "reveal-word";
        span.style.transitionDelay = `${delayOffset + index * 0.15}s`;
        element.appendChild(span);
      });
      setTimeout(() => {
        const spans = element.querySelectorAll(".reveal-word");
        spans.forEach((span) => span.classList.add("visible"));
      }, 100);
    };

    animateText(
      revealContainerRef.current,
      "I build things for the web.",
      0.5 // Start after name animation
    );

    animateText(
      descriptionRef.current,
      "FullStack Web Developer specializing in scalable, maintainable, and readable clean code architecture using modern AI-integrated workflows.",
      1.5 // Start after subheadline
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center mb-24"
    >
      <div className="absolute right-0 bottom-0 w-[300px] md:w-[500px] h-[600px] opacity-30 pointer-events-none select-none mix-blend-color-dodge z-0 hidden lg:block scroll-item slide-from-right">
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
            alt="Portrait"
            fill
            className="object-cover rounded-[100px] rotate-6 mask-image-gradient"
            sizes="(max-width: 768px) 100vw, 500px"
          />
          <div className="absolute inset-0 bg-linear-to-l from-neutral-950 to-transparent"></div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-8 max-w-5xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur text-xs font-mono mb-4 scroll-item slide-from-left border-neutral-800 bg-neutral-900/50 text-neutral-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
            </span>
            <span>Available for Hire</span>
          </div>

          {/* Main Headline - Split for Multi-Direction Animation */}
          <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl leading-tight text-white tracking-tight">
            <span className="inline-block scroll-item slide-from-left mr-4">
              AHMAD
            </span>
            <span className="inline-block scroll-item slide-from-top mr-4">
              NIDZAM
            </span>
            <br />
            <span className="inline-block scroll-item slide-from-right text-neutral-500">
              MUSTHAFA.
            </span>
          </h1>

          {/* Word-by-Word Subheadline */}
          <h2
            ref={revealContainerRef}
            id="word-reveal-text"
            className="text-2xl md:text-3xl font-normal tracking-tight max-w-2xl leading-relaxed h-16 text-neutral-300 scroll-item"
          >
            {/* JS injects spans here */}
          </h2>

          {/* Word-by-Word Description */}
          <p
            ref={descriptionRef}
            className="font-sans text-base md:text-lg max-w-xl leading-relaxed text-neutral-400 min-h-[100px] scroll-item"
          >
            {/* JS injects spans here */}
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-6 py-3 bg-accent-500 font-medium rounded-lg transition-all duration-300 shadow-[0_0_20px_-5px_rgba(0,168,107,0.4)] hover:shadow-[0_0_25px_-5px_rgba(0,168,107,0.6)] flex items-center gap-2 overflow-hidden hover:bg-accent-600 text-white cursor-pointer scroll-item slide-from-left"
            >
              <span className="relative z-10">Contact Me</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 via-white/20"></div>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="shiny-button px-6 py-3 border hover:border-neutral-500 font-medium rounded-lg transition-colors duration-300 backdrop-blur-sm border-neutral-700 text-neutral-300 hover:text-white bg-neutral-900/30 cursor-pointer scroll-item slide-from-right relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
