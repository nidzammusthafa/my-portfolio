import { getFeaturedPosts } from "@/lib/notion";
import Link from "next/link";

const FeaturedPosts = async () => {
  // Fetch the first 5 featured posts
  const featuredPosts = (await getFeaturedPosts()).slice(0, 5);

  if (!featuredPosts || featuredPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 p-4 rounded-lg bg-light-navy/10 backdrop-blur-sm">
      <h3 className="font-bold text-lightest-slate mb-3">Featured Posts</h3>
      <ul className="space-y-3">
        {featuredPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-center justify-between text-sm text-slate hover:text-accent transition-colors duration-200"
            >
              <span className="line-clamp-2">{post.title}</span>
            </Link>
            <span className="text-xs text-light-slate">{post.date}</span>
            <span className="block w-full h-px bg-light-navy"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedPosts;
