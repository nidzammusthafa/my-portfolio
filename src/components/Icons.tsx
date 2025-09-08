import React from "react";

const iconProps = {
  className:
    "h-6 w-6 text-slate group-hover:text-accent transition-colors duration-300",
};

export const IconGitHub = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...iconProps}
  >
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const IconLinkedin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...iconProps}
  >
    <title>LinkedIn</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const IconInstagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...iconProps}
  >
    <title>Instagram</title>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const IconWhatsApp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...iconProps}
  >
    <title>WhatsApp</title>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export const IconExternalLink = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 ml-1 group-hover:text-accent transition-colors duration-300"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export const IconArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 transition-transform group-hover:-translate-x-1"
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

export const IconArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const techIconProps = {
  className: "h-5 w-5 text-accent",
};
export const IconNextJS = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...techIconProps}
    fill="currentColor"
  >
    <title>Next.js</title>
    <path d="M13.744 12L7.02 2.25998H16.98L20.58 7.97998L13.744 12ZM10.26 12L16.98 21.74H7.02L3.42 16.02L10.26 12Z" />
  </svg>
);
export const IconTypeScript = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...techIconProps}
    fill="currentColor"
  >
    <title>TypeScript</title>
    <path d="M1.5 0 h21 l-1.91 21.563 L11.977 24 l-8.564-2.438 L1.5 0 Z m18.253 2.155 H4.242 l1.42 16.033 l6.336 1.787 l6.324-1.787 l1.42-16.033 Z M17.433 5.373 H8.69 l.34 3.81 H17.3 l-.494 5.56 H8.83 l.367 4.116 l4.752 1.286 l4.752-1.286 l.34-3.81h-3.327l-.15 1.68 l-1.615.43 l-1.615-.43 l-.113-1.263 H17.4 l-.74 8.303 H6.557 L5.41 5.373 H17.433 Z" />
  </svg>
);
export const IconExpress = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...techIconProps}
    fill="currentColor"
  >
    <title>Express.js</title>
    <path d="M24 18.665c-.32.32-3.34 2.122-8.509 2.122-5.17 0-8.19-1.802-8.509-2.122v-2.31c.319.319 3.339 2.121 8.509 2.121 5.17 0 8.19-1.802 8.509-2.121v2.31zm-17.018-7.98a7.53 7.53 0 0 0-1.832 5.013v2.31c.32-.32 3.339-2.122 8.509-2.122a13.43 13.43 0 0 0 1.93-.163c-.11-.377-.188-.769-.188-1.183a4.78 4.78 0 0 1 1.27-3.17c-.37-.027-.743-.04-1.121-.04-3.53 0-6.73 1.18-8.077 3.355zm15.415-3.08c-.718-1.82-3.1-3.355-6.627-3.355-3.53 0-6.73 1.18-8.077 3.355a7.53 7.53 0 0 0-1.832 5.013v2.31c.32-.32 3.339-2.122 8.509-2.122a13.43 13.43 0 0 0 1.93-.163c-.11-.377-.188-.769-.188-1.183a4.78 4.78 0 0 1 1.27-3.17c1.373-1.428 3.13-2.31 4.415-2.738a.59.59 0 0 0 .46-.566v-2.09c0-.42-.25-.54-.46-.567z" />
  </svg>
);
export const IconCode = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-accent mb-4"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);
export const IconBroadcast = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-accent mb-4"
  >
    <path d="M4.11 15.89C2.42 14.2 2.42 11.43 4.11 9.74 C5.8 8.05 8.57 8.05 10.26 9.74"></path>
    <path d="M19.89 15.89C21.58 14.2 21.58 11.43 19.89 9.74 C18.2 8.05 15.43 8.05 13.74 9.74"></path>
    <circle cx="12" cy="12" r="2"></circle>
    <path d="M22 12 c0 4.56-4.44 9-10 9s-10-4.44-10-9"></path>
  </svg>
);

export const IconSaaS = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10 text-accent mb-4"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

export const IconBriefcase = () => (
  <svg {...iconProps} className="w-7 h-7 text-accent">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

export const IconGraduationCap = () => (
  <svg {...iconProps} className="w-7 h-7 text-accent">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3.33 1.67 6.67 1.67 10 0v-5"></path>
  </svg>
);
