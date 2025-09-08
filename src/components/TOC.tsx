import type { Heading } from "@/types";

interface TOCProps {
  headings: Heading[];
}

const TOC = ({ headings }: TOCProps) => {
  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <div className="custom-scrollbar rounded-lg bg-light-navy/10 max-h-[50vh] overflow-y-auto px-4 backdrop-blur-sm">
      <h3 className="font-bold text-lightest-slate mb-5 sticky top-0 bg-light-navy/30 py-2 px-4 -mx-4 -mt-4 backdrop-blur-md">
        On this page
      </h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 1) * 0.75}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className="text-sm text-slate hover:text-accent transition-colors duration-200 block"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TOC;
