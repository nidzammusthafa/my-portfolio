import React from "react";
import Link from "next/link";
import { IconArrowLeft } from "@/components/Icons";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

const ResumePage = () => {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24">
      <div className="lg:py-24">
        <div>
          <Link
            href="/#"
            className="group mb-8 inline-flex items-center font-semibold leading-tight text-accent transition-colors duration-300 hover:text-lightest-slate"
          >
            <IconArrowLeft />
            <span className="ml-2">Back to Home</span>
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl mb-16">
          My Resume
        </h1>

        <Resume />
      </div>
      <Footer />
    </main>
  );
};

export default ResumePage;
