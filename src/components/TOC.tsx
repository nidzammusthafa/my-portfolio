import type { Heading } from '@/types';

interface TOCProps {
  headings: Heading[];
}

const TOC = ({ headings }: TOCProps) => {
  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <nav className="custom-scrollbar p-4 rounded-lg bg-transparent backdrop-blur-sm max-h-[50vh] overflow-y-auto">
      <h3 className="font-bold text-lightest-slate mb-3">On this page</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: `${(heading.level - 1) * 0.75}rem` }}>
            <a
              href={`#${heading.id}`}
              className="text-sm text-slate hover:text-accent transition-colors duration-200"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TOC;
