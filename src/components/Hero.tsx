import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center -mt-20"
    >
      <p className="text-accent font-mono mb-4">Hi, my name is</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate">
        Ahmad Nidzam Musthafa.
      </h1>
      <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate">
        I build things for the web.
      </h2>
      <p className="mt-6 max-w-xl text-lg">
        I&apos;m a FullStack Web Developer specializing in building (and
        occasionally designing) exceptional digital experiences. I focus on
        creating fast, reliable, and high-quality web applications that are
        scalable, maintainable, and readable.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Link
          href="#contact"
          className="text-accent font-mono text-lg border border-accent rounded px-8 py-4 hover:bg-accent/10 transition-colors duration-300 text-center"
        >
          Hubungi Saya
        </Link>
        <Link
          href="#projects"
          className="text-lightest-slate font-mono text-lg border border-lightest-slate rounded px-8 py-4 hover:bg-lightest-slate/10 transition-colors duration-300 text-center"
        >
          Lihat Proyek Saya
        </Link>
      </div>
    </section>
  );
};

export default Hero;
