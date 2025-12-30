import { ArrowLeft } from "lucide-react";
import { PostCard } from "@/components/PostCard";
import { getPublishedBlogPosts } from "@/lib/notion";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import FlashlightEffect from "@/components/FlashlightEffect";
import ScrollObserver from "@/components/ScrollObserver";
import Starfield from "@/components/Starfield";
import Grid3d from "@/components/Grid3d";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | Ahmad Nidzam Musthafa",
  description:
    "Insights on web development, software architecture, and modern tech stacks.",
};

// Force static generation at build time
export const dynamic = "force-static";
export const revalidate = 3600;

const AllBlogPostsPage = async () => {
  const posts = await getPublishedBlogPosts();

  return (
    <>
      <FlashlightEffect />
      <ScrollObserver />

      {/* Abstract Background Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden perspective-container">
        <Starfield />
        <Grid3d />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-500/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[100px] animate-float-delayed bg-blue-600/10"></div>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-neutral-950"></div>
      </div>

      <main className="w-full py-12 relative overflow-x-hidden min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 scroll-item slide-from-left"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-mono font-bold text-white mb-4 scroll-item slide-from-top">
            Blog
          </h1>
          <p className="text-neutral-400 max-w-2xl mb-16 scroll-item slide-from-top">
            Thoughts, tutorials, and insights on software engineering, clean
            code, and the future of web development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <div
                key={post.slug}
                className="scroll-item slide-from-bottom"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AllBlogPostsPage;
