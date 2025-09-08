import React from "react";
import Section from "./Section";
import { PostCard } from "./BlogData";
import { IconArrowRight } from "./Icons";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/notion";

const Blog = async () => {
  const allPosts = await getPublishedBlogPosts();
  const latestPosts = allPosts.slice(0, 4);

  return (
    <Section id="blogs">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center whitespace-nowrap text-accent font-mono">
        Latest Posts
        <span className="block w-full h-px bg-light-navy ml-6"></span>
      </h2>
      <ul className="space-y-8">
        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {latestPosts.map((post) => (
            <li key={post.slug} className="transition-opacity">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </ul>
      {allPosts.length > 3 && (
        <div className="mt-12">
          <Link
            href="/blog" // Changed to /blog to see all posts
            className="inline-flex items-center font-semibold leading-tight text-lightest-slate group"
          >
            <span className="flex">
              <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">
                View All Posts
              </span>
              <IconArrowRight />
            </span>
          </Link>
        </div>
      )}
    </Section>
  );
};

export default Blog;
