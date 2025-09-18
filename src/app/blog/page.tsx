import { IconArrowLeft } from "@/components/Icons";
import { PostCard } from "@/components/BlogData";
import { getPublishedBlogPosts } from "@/lib/notion";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blog Posts",
  description: "Browse all my blog posts on web development, technology, and more.",
};

const AllBlogPostsPage = async () => {
  const posts = await getPublishedBlogPosts();

  return (
    <main className="mx-auto min-h-screen max-w-screen-lg px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24">
      <div className="lg:py-24">
        <div>
          <Link
            href="/"
            className="group mb-8 inline-flex items-center font-semibold leading-tight text-accent transition-colors duration-300 hover:text-lightest-slate"
          >
            <IconArrowLeft />
            <span className="ml-2">Back to Home</span>
          </Link>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl">
          All Blog Posts
        </h1>

        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {posts.map((post, index) => (
            <li
              key={post.slug}
              className="fade-in-on-load"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AllBlogPostsPage;
