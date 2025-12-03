import { Download } from "lucide-react";

const row1 = [
  { name: "HTML", color: "orange-500" },
  { name: "CSS", color: "blue-400" },
  { name: "JavaScript", color: "yellow-400" },
  { name: "TypeScript", color: "blue-500" },
  { name: "React", color: "blue-400" },
  { name: "Next.js", color: "white" },
  { name: "Node.js", color: "green-500" },
  { name: "Express.js", color: "white" },
  { name: "NestJS", color: "red-500" },
  { name: "Flutter", color: "blue-400" },
];

const row2 = [
  { name: "Tailwind CSS", color: "cyan-400" },
  { name: "Prisma", color: "indigo-400" },
  { name: "MongoDB", color: "green-500" },
  { name: "PostgreSQL", color: "blue-300" },
  { name: "MySQL", color: "orange-400" },
  { name: "Docker", color: "blue-500" },
  { name: "Git & GitHub", color: "white" },
  { name: "Socket.IO", color: "white" },
  { name: "Vercel", color: "white" },
  { name: "Coolify", color: "purple-500" },
  { name: "SEO", color: "green-500" },
];

export default function About() {
  const renderTechBadge = (
    tech: { name: string; color: string },
    index: number
  ) => (
    <span
      key={index}
      className="px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 font-mono text-xs flex items-center gap-2 whitespace-nowrap"
    >
      <div
        className={`w-1.5 h-1.5 rounded-full shadow-[0_0_5px_${tech.color}]`}
        style={{
          backgroundColor:
            tech.color === "white"
              ? "white"
              : tech.color === "cyan-400"
              ? "#22d3ee"
              : tech.color === "blue-500"
              ? "#3b82f6"
              : tech.color === "green-500"
              ? "#22c55e"
              : tech.color === "indigo-400"
              ? "#818cf8"
              : tech.color === "yellow-400"
              ? "#facc15"
              : tech.color === "orange-400"
              ? "#fb923c"
              : tech.color === "orange-500"
              ? "#f97316"
              : tech.color === "blue-400"
              ? "#60a5fa"
              : tech.color === "red-500"
              ? "#ef4444"
              : tech.color === "blue-300"
              ? "#93c5fd"
              : tech.color === "purple-500"
              ? "#a855f7"
              : "#60a5fa",
          boxShadow: `0 0 5px ${
            tech.color === "white"
              ? "white"
              : tech.color === "cyan-400"
              ? "#22d3ee"
              : tech.color === "blue-500"
              ? "#3b82f6"
              : tech.color === "green-500"
              ? "#22c55e"
              : tech.color === "indigo-400"
              ? "#818cf8"
              : tech.color === "yellow-400"
              ? "#facc15"
              : tech.color === "orange-400"
              ? "#fb923c"
              : tech.color === "orange-500"
              ? "#f97316"
              : tech.color === "blue-400"
              ? "#60a5fa"
              : tech.color === "red-500"
              ? "#ef4444"
              : tech.color === "blue-300"
              ? "#93c5fd"
              : tech.color === "purple-500"
              ? "#a855f7"
              : "#60a5fa"
          }`,
        }}
      ></div>
      {tech.name}
    </span>
  );

  return (
    <section id="about" className="scroll-item mb-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h3 className="font-mono text-xs text-accent-500 tracking-widest uppercase mb-4 sticky top-24">
            01 / About
          </h3>
        </div>
        <div className="md:col-span-8">
          <div className="flashlight-card p-8 rounded-2xl border backdrop-blur-xl border-neutral-800">
            <h3 className="text-2xl font-semibold mb-4 tracking-tight text-white">
              About Me
            </h3>
            <p className="leading-relaxed mb-6 text-neutral-400">
              Hello! I&apos;m Ahmad, a full-stack web developer with a deep
              passion for technology and problem-solving. My journey into
              programming began with a fascination for how ideas can be
              transformed into tangible, interactive experiences on the web.
            </p>
            <p className="leading-relaxed mb-6 text-neutral-400">
              I specialize in building robust and efficient applications using
              modern technologies. I firmly believe in the principles of{" "}
              <span className="text-accent-500">clean code architecture</span>,
              ensuring that every project I undertake is not only functional but
              also{" "}
              <span className="text-accent-500">
                scalable, maintainable, and readable
              </span>
              . This approach allows for easier collaboration, future
              development, and long-term stability.
            </p>
            <p className="leading-relaxed mb-6 text-neutral-400">
              Beyond coding, I am always exploring new technologies and how they
              can be leveraged to create better products. I am particularly
              interested in the role of AI in streamlining development workflows
              and enhancing application capabilities. Let&apos;s build something
              amazing together!
            </p>

            <div
              className="mt-8 flex flex-col gap-4 relative overflow-hidden w-full max-w-[80vw] lg:max-w-full"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              {/* Row 1: Languages - Normal Direction */}
              <div className="flex gap-3 max-w-[50vw] md:max-w-[80vw] w-max animate-marquee hover:paused [animation-duration:15s] md:[animation-duration:25s]">
                {[...row1, ...row1, ...row1].map((tech, i) =>
                  renderTechBadge(tech, i)
                )}
              </div>

              {/* Row 2: Frameworks - Reverse Direction */}
              <div className="flex gap-3 max-w-[50vw] md:max-w-[80vw] w-max animate-marquee-reverse hover:paused [animation-duration:15s] md:[animation-duration:25s]">
                {[...row2, ...row2, ...row2].map((tech, i) =>
                  renderTechBadge(tech, i)
                )}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-800 flex gap-4">
              <button className="flex items-center gap-2 text-sm text-white hover:text-accent-500 transition-colors">
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
