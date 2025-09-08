import React from "react";
import { IconGitHub, IconLinkedin, IconInstagram, IconWhatsApp } from "./Icons";

const socialLinks = [
  { href: "https://github.com/ahmadnidzam", icon: <IconGitHub /> },
  { href: "https://github.com/ahmadnidzam-personal", icon: <IconGitHub /> },
  { href: "https://www.linkedin.com/in/ahmadnidzam", icon: <IconLinkedin /> },
  { href: "https://instagram.com/ahmadnidzam", icon: <IconInstagram /> },
  { href: "https://wa.me/6281234567890", icon: <IconWhatsApp /> },
];

const Footer = () => {
  return (
    <footer className="text-center py-8">
      <div className="lg:hidden flex justify-center items-center space-x-6 mb-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <a
        href="https://github.com/nidzammusthafa/my-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-sm text-slate hover:text-accent transition-colors duration-300"
      >
        Designed & Built by Ahmad Nidzam Musthafa
      </a>
    </footer>
  );
};

export default Footer;
