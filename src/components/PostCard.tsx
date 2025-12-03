import React from "react";
import type { Post, Tag } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

const tagColorMap: { [key: string]: string } = {
  default: "bg-neutral-800 text-neutral-300",
  gray: "bg-neutral-800 text-neutral-300",
  brown: "bg-yellow-900/50 text-yellow-200",
  orange: "bg-orange-900/50 text-orange-200",
  yellow: "bg-yellow-900/50 text-yellow-200",
  green: "bg-green-900/50 text-green-200",
  blue: "bg-blue-900/50 text-blue-200",
  purple: "bg-purple-900/50 text-purple-200",
  pink: "bg-pink-900/50 text-pink-200",
  red: "bg-red-900/50 text-red-200",
};

export const PostCard = ({ post }: PostCardProps) => {
  const placeholderImage =
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
  const imageUrl = post.coverImage || placeholderImage;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group scroll-item flashlight-card rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-500 flex flex-col h-full"
    >
      {/* Top section: Image and Text */}
      <div className="w-full mb-4">
        <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg rounded-b-none">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/70 group-hover:opacity-0 transition-opacity duration-500" />
        </div>

        <div className="pt-0 p-6">
          <p className="font-mono text-xs text-accent-500 mb-2">{post.date}</p>
          <h3 className="text-xl font-bold text-white group-hover:text-accent-500 transition-colors duration-300 line-clamp-2 mb-3">
            {post.title}
          </h3>
          <p className="text-sm text-neutral-400 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Bottom section: Tags and Read More button */}
      <div className="mt-auto pt-4 border-t border-neutral-800/50 rounded-t-none p-6">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag: Tag) => (
              <span
                key={tag.id}
                className={`text-xs font-medium px-2.5 py-1 rounded-full border border-white/5 ${
                  tagColorMap[tag.color] || tagColorMap.default
                }`}
              >
                {tag.name}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center text-sm font-semibold text-accent-500 flex-shrink-0 group-hover:translate-x-1 transition-transform">
            Read More <ArrowRight className="ml-1 w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};
