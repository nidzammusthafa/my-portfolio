import React from "react";
import { getPublishedBlogPosts } from "@/lib/notion";
import { PostCard } from "@/components/PostCard";
import Link from "next/link";

export default async function LatestPosts() {
  const posts = await getPublishedBlogPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="mb-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h3 className="font-mono text-xs text-accent-500 tracking-widest uppercase sticky top-24">
            04 / Latest Posts
          </h3>
        </div>
        <div className="md:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="flex justify-center md:justify-start">
            <Link
              href="/blog"
              className="px-6 py-3 border hover:border-neutral-500 font-medium rounded-lg transition-colors duration-300 backdrop-blur-sm border-neutral-700 text-neutral-300 hover:text-white bg-neutral-900/30 cursor-pointer scroll-item"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
