import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React from "react";

const Home = () => {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <div className="lg:w-full lg:py-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
