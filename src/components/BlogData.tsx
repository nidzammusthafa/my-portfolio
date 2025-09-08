import React from "react";
import type { Post, Tag } from "../types";
import { IconArrowRight } from "./Icons";
import Image from "next/image";

interface PostCardProps {
  post: Post;
}

const tagColorMap: { [key: string]: string } = {
  default: "bg-gray-200 text-gray-800",
  gray: "bg-gray-200 text-gray-800",
  brown: "bg-yellow-800/50 text-yellow-100",
  orange: "bg-orange-200 text-orange-800",
  yellow: "bg-yellow-200 text-yellow-800",
  green: "bg-green-200 text-green-800",
  blue: "bg-blue-200 text-blue-800",
  purple: "bg-purple-200 text-purple-800",
  pink: "bg-pink-200 text-pink-800",
  red: "bg-red-200 text-red-800",
};

export const PostCard = ({ post }: PostCardProps) => {
  const placeholderImage =
    "https://www.freeiconspng.com/uploads/no-image-icon-10.png";
  const imageUrl = post.coverImage || placeholderImage;

  return (
    <a
      href={`/blog/${post.slug}`}
      className="group p-4 -m-4 rounded-lg transition-colors duration-300 h-96 flex flex-col justify-between hover:bg-[#233554]/50"
    >
      {/* Top section: Image and Text */}
      <div className="w-full">
        <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="font-mono text-sm text-slate mb-1">{post.date}</p>
          <h3 className="text-lg font-bold text-lightest-slate group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-light-slate line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Bottom section: Tags and Read More button */}
      <div className="mt-auto pt-2">
        <div className="flex items-end justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag: Tag) => (
              <span
                key={tag.id}
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  tagColorMap[tag.color] || tagColorMap.default
                }`}
              >
                {tag.name}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center text-sm font-semibold text-accent flex-shrink-0">
            Read More <IconArrowRight />
          </div>
        </div>
      </div>
    </a>
  );
};
