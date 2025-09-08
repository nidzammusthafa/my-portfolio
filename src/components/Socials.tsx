import React from "react";
import { IconGitHub, IconLinkedin, IconInstagram, IconWhatsApp } from "./Icons";

const socialLinks = [
  { href: "https://github.com/nidzammusthafa", icon: <IconGitHub /> },
  { href: "https://github.com/nidzammst", icon: <IconGitHub /> },
  {
    href: "https://www.linkedin.com/in/ahmad-nidzam-musthafa-45458b200",
    icon: <IconLinkedin />,
  },
  { href: "https://instagram.com/nidzammst", icon: <IconInstagram /> },
  { href: "https://wa.me/6281233638863", icon: <IconWhatsApp /> },
];

const Socials = () => {
  return (
    <div className="hidden lg:block fixed bottom-0 left-[40px] z-10">
      <div className="flex flex-col items-center">
        <ul className="flex flex-col items-center space-y-6">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-px h-24 bg-slate mt-6"></div>
      </div>
    </div>
  );
};

export default Socials;
