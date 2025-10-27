import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import jwt from "jsonwebtoken";
import { getPublishedBlogPosts } from "@/lib/notion";

const JWT_SECRET = process.env.JWT_SECRET || "SUPER_SECRET_KEY_DEFAULT";

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.toLowerCase().startsWith("bearer ")) {
    return NextResponse.json(
      { success: false, message: "Token tidak ditemukan." },
      { status: 401 }
    );
  }

  const token = authHeader.slice(7).trim();

  try {
    jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.error("Invalid token on revalidate attempt:", error);
    return NextResponse.json(
      { success: false, message: "Token tidak valid atau telah kedaluwarsa." },
      { status: 401 }
    );
  }

  try {
    const posts = await getPublishedBlogPosts();
    const revalidatedSlugs: string[] = [];

    revalidatePath("/", "page");
    revalidatePath("/blog", "page");
    revalidatePath("/blog/[slug]", "page");

    for (const post of posts) {
      const path = `/blog/${post.slug}`;
      revalidatePath(path, "page");
      revalidatedSlugs.push(path);
    }

    revalidatePath("/sitemap.xml");

    return NextResponse.json({
      success: true,
      message: "Revalidate berhasil dijalankan.",
      revalidatedAt: new Date().toISOString(),
      revalidatedSlugs,
    });
  } catch (error) {
    console.error("Error during revalidation:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Gagal melakukan revalidate. Periksa log server untuk detail.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Metode tidak diizinkan." },
    { status: 405 }
  );
}

