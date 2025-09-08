import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSingleBlogPost, getPublishedBlogPosts } from "@/lib/notion";
import { IconArrowLeft } from "@/components/Icons";
import Image from "next/image";
import type { Tag } from "@/types";
import TOC from "@/components/TOC";
import FeaturedPosts from "@/components/FeaturedPosts";

// Color map for tags and categories
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

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getPublishedBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const result = await getSingleBlogPost(params.slug);
  if (!result) {
    return {};
  }
  const { post } = result;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage || "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const result = await getSingleBlogPost(params.slug);

  if (!result) {
    notFound();
  }
  const { post, headings } = result;

  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
        <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24 self-start">
          <TOC headings={headings} />
          <FeaturedPosts />
        </aside>
        {/* Main Content */}
        <div className="lg:col-span-9">
          <div>
            <Link
              href="/blog"
              className="group mb-8 inline-flex items-center font-semibold leading-tight text-accent transition-colors duration-300 hover:text-lightest-slate"
            >
              <IconArrowLeft />
              <span className="ml-2">All Posts</span>
            </Link>
          </div>
          <article>
            {post.coverImage && (
              <div className="relative w-full h-64 md:h-80 mb-8">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                />
              </div>
            )}
            <p className="font-mono text-sm text-slate mb-2">{post.date}</p>
            <h1 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8">
              {post.category && post.category.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate">Category:</span>
                  {post.category.map((cat: Tag) => (
                    <span
                      key={cat.id}
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        tagColorMap[cat.color] || tagColorMap.default
                      }`}
                    >
                      {cat.name}
                    </span>
                  ))}
                </div>
              )}
              {post.tags && post.tags?.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate">Tags:</span>
                  {post.tags &&
                    post.tags.map((tag: Tag) => (
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
              )}
            </div>

            <div
              className="prose prose-lg prose-invert max-w-none \
                         prose-headings:text-lightest-slate prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl \
                         prose-a:text-accent hover:prose-a:underline \
                         prose-strong:text-lightest-slate \
                         prose-code:bg-light-navy prose-code:p-1 prose-code:rounded prose-code:font-mono \
                         prose-pre:bg-light-navy prose-pre:p-4 prose-pre:rounded-md"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </main>
  );
};

export default BlogPostPage;
