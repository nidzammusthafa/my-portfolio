import React from "react";
import Section from "./Section";
import { education, experience } from "./ResumeData";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const Resume = () => {
  return (
    <Section id="resume">
      <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate mb-8 flex items-center whitespace-nowrap">
        Resume
        <span className="block w-full h-px bg-light-navy ml-6"></span>
      </h2>

      {/* Work Experience */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-light-slate mb-6 flex items-center">
          <BriefcaseBusiness />
          <span className="ml-3">Work Experience</span>
        </h3>
        <div className="relative border-l-2 border-light-navy pl-6 space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[35px] top-1 h-4 w-4 rounded-full bg-accent"></div>
              <p className="font-mono text-sm text-accent">{job.period}</p>
              <h4 className="text-lg font-bold text-lightest-slate mt-1">
                {job.role}
              </h4>
              <p className="text-md text-light-slate mb-2">{job.company}</p>
              <ul className="list-disc list-inside text-slate space-y-1">
                {job.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-xl font-bold text-light-slate mb-6 flex items-center">
          <GraduationCap />
          <span className="ml-3">Education</span>
        </h3>
        <div className="relative border-l-2 border-light-navy pl-6 space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[35px] top-1 h-4 w-4 rounded-full bg-accent"></div>
              <p className="font-mono text-sm text-accent">{edu.period}</p>
              <h4 className="text-lg font-bold text-lightest-slate mt-1">
                {edu.degree}
              </h4>
              <p className="text-md text-light-slate mb-2">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="/Ahmad_Nidzam_Musthafa_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-accent font-mono text-lg border border-accent rounded px-8 py-4 hover:bg-accent/10 transition-colors duration-300"
        >
          Download Full CV
        </a>
      </div>
    </Section>
  );
};

export default Resume;
