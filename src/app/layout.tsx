import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import ScrollIndicator from "@/components/ScrollIndicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nidzam.my.id"),
  title: {
    default: "Ahmad Nidzam Musthafa - FullStack Web Developer",
    template: "%s - Ahmad Nidzam Musthafa",
  },
  description:
    "A modern and professional personal portfolio website to showcase skills, projects, and offer services as a FullStack Web Developer, built with React and Tailwind CSS.",
  authors: [{ name: "Ahmad Nidzam Musthafa" }],
  creator: "Ahmad Nidzam Musthafa",
  keywords: [
    "FullStack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Ahmad Nidzam Musthafa",
  ],
  openGraph: {
    type: "website",
    url: "https://www.nidzam.my.id/",
    siteName: "Ahmad Nidzam Musthafa - FullStack Web Developer Portfolio",
    title: "Ahmad Nidzam Musthafa - FullStack Web Developer Portfolio",
    description:
      "A modern and professional personal portfolio website to showcase skills, projects, and offer services as a FullStack Web Developer, built with React and Tailwind CSS.",
    images: "/developer.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Nidzam Musthafa - FullStack Web Developer Portfolio",
    description:
      "A modern and professional personal portfolio website to showcase skills, projects, and offer services as a FullStack Web Developer, built with React and Tailwind CSS.",
    images: "/developer.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="bXCO2kvKS0auCVPb5s-jS36dVELhgH-LAJskTYJAX8Q"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-dark-navy text-slate font-sans leading-relaxed selection:bg-accent/20 w-screen overflow-x-hidden lg:overflow-x-visible">
          <Header />
          <Socials />
          <ScrollIndicator />
          {children}
        </div>
      </body>
    </html>
  );
}
