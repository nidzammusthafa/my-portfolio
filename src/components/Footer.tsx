import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-8 mt-12">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-600">
          © 2025 Ahmad Nidzam Musthafa. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/ahmadnidzam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition-colors hover:text-white"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmadnidzam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition-colors hover:text-white"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/ahmadnidzam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition-colors hover:text-white"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
