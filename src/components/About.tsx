import React from "react";
import Section from "./Section";

const About = () => {
  return (
    <Section id="about">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center whitespace-nowrap text-accent font-mono">
        About Me
        <span className="block w-full h-px bg-light-navy ml-6"></span>
      </h2>
      <div className="text-lg">
        <p className="mb-4">
          Hello! I&apos;m Ahmad, a full-stack web developer with a deep passion
          for technology and problem-solving. My journey into programming began
          with a fascination for how ideas can be transformed into tangible,
          interactive experiences on the web.
        </p>
        <p className="mb-4">
          I specialize in building robust and efficient applications using
          modern technologies. I firmly believe in the principles of{" "}
          <span className="text-accent">clean code architecture</span>, ensuring
          that every project I undertake is not only functional but also{" "}
          <span className="text-accent">
            scalable, maintainable, and readable
          </span>
          . This approach allows for easier collaboration, future development,
          and long-term stability.
        </p>
        <p>
          Beyond coding, I am always exploring new technologies and how they can
          be leveraged to create better products. I am particularly interested
          in the role of AI in streamlining development workflows and enhancing
          application capabilities. Let&apos;s build something amazing together!
        </p>
      </div>
    </Section>
  );
};

export default About;
