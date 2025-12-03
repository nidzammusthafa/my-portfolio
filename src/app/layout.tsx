import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmad Nidzam Musthafa | FullStack Developer",
  description:
    "FullStack Web Developer specializing in scalable, maintainable, and readable clean code architecture using modern AI-integrated workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-clip">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-neutral-950 text-neutral-300 selection:bg-accent-500/30 selection:text-white overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}
