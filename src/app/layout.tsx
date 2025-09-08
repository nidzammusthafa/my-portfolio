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
  title: "Ahmad Nidzam Musthafa - FullStack Web Developer Portfolio",
  description:
    "A modern and professional personal portfolio website to showcase skills, projects, and offer services as a FullStack Web Developer, built with React and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-dark-navy text-slate font-sans leading-relaxed selection:bg-accent/20 overflow-x-hidden">
          <Header />
          <Socials />
          <ScrollIndicator />
          {children}
        </div>
      </body>
    </html>
  );
}
