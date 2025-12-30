import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSingleBlogPost, getPublishedBlogPosts } from "@/lib/notion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import type { Heading } from "@/types";
import FeaturedPosts from "@/components/FeaturedPosts";
import { NotionPage } from "@/components/NotionPage";
import TOC from "@/components/TOC";
import MobileTOC from "@/components/MobileTOC";
import BackToTopButton from "@/components/BackToTopButton";
import { ExtendedRecordMap } from "notion-types";
import FlashlightEffect from "@/components/FlashlightEffect";
import ScrollObserver from "@/components/ScrollObserver";
import Starfield from "@/components/Starfield";
import Grid3d from "@/components/Grid3d";
import Footer from "@/components/Footer";

// Force static generation at build time
export const dynamic = "force-static";
export const revalidate = 3600;
export const dynamicParams = false; // Only allow pre-generated slugs

type BlogPostParams = { slug: string };

// Helper function to extract headings from recordMap
const getHeadings = (recordMap: ExtendedRecordMap): Heading[] => {
  const headings: Heading[] = [];
  const blocks = Object.values(recordMap.block);

  for (const block of blocks) {
    if (
      block.value &&
      (block.value.type === "header" ||
        block.value.type === "sub_header" ||
        block.value.type === "sub_sub_header")
    ) {
      const level =
        block.value.type === "header"
          ? 1
          : block.value.type === "sub_header"
          ? 2
          : 3;
      const text =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        block.value.properties?.title.map((t: any) => t[0]).join("") || "";
      if (text) {
        headings.push({
          id: block.value.id.replaceAll("-", ""),
          level: level,
          text: text,
        });
      }
    }
  }
  return headings;
};

// Color map for tags and categories
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

export async function generateStaticParams() {
  const posts = await getPublishedBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<BlogPostParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await getSingleBlogPost(slug);
  if (!result) {
    return { title: "Post Not Found" };
  }
  const { post } = result;
  const keywords = post.tags?.map((tag) => tag.name);
  if (post.category) {
    keywords?.push(...post.category.map((cat) => cat.name));
  }

  const canonicalUrl = `https://www.nidzam.my.id/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      images: [
        {
          url: post.coverImage || "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage || "/og-image.png"],
    },
  };
}

const BlogPostPage = async ({
  params,
}: {
  params: Promise<BlogPostParams>;
}) => {
  const { slug } = await params;
  const result = await getSingleBlogPost(slug);

  if (!result) {
    notFound();
  }
  const { post, recordMap } = result;
  const headings = getHeadings(recordMap);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.coverImage || "/og-image.png",
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: [
      {
        "@type": "Person",
        name: post.author?.name || "Nidzam",
        url: "https://www.nidzam.my.id",
      },
    ],
    description: post.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.nidzam.my.id/blog/${post.slug}`,
    },
  };

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

      <main className="w-full py-12 relative min-h-screen">
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24 self-start">
              <div className="space-y-8 scroll-item slide-from-left">
                <TOC headings={headings} />
                <FeaturedPosts />
              </div>
            </aside>
            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="scroll-item slide-from-top">
                <Link
                  href="/blog"
                  className="group mb-8 inline-flex items-center font-semibold leading-tight text-accent-500 transition-colors duration-300 hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="ml-2">All Posts</span>
                </Link>
              </div>
              <article>
                {post.coverImage && (
                  <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden border border-neutral-800">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60" />
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  {post.author && (
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-sm text-neutral-400">
                        {post.author.name}
                      </p>
                    </div>
                  )}
                  <p className="font-mono text-sm text-neutral-500">
                    {post.date}
                  </p>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-12">
                  {post.category && post.category.length > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-neutral-400 text-sm">
                        Category:
                      </span>
                      {post.category.map((cat) => (
                        <span
                          key={cat.id}
                          className={`text-xs font-medium px-2.5 py-1 rounded-full border border-white/5 ${
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
                      <span className="font-semibold text-neutral-400 text-sm">
                        Tags:
                      </span>
                      {post.tags &&
                        post.tags.map((tag) => (
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
                  )}
                </div>

                {/* Notion Content Rendered Here */}
                <div className="prose prose-invert prose-lg max-w-none">
                  <NotionPage recordMap={recordMap} />
                </div>

                <div className="mt-16 pt-8 border-t border-neutral-800">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800 rounded-lg text-white transition-all duration-300 group"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to All Posts
                  </Link>
                </div>
              </article>

              {/* Featured Posts for Mobile */}
              <div className="block lg:hidden mt-12 scroll-item">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Featured Posts
                </h2>
                <FeaturedPosts />
              </div>
            </div>
          </div>
          <MobileTOC headings={headings} />
          <BackToTopButton />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default BlogPostPage;
