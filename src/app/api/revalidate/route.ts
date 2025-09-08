import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidation-secret');

  // 1. Amankan Endpoint
  //    Pastikan Anda sudah mengatur variabel lingkungan REVALIDATION_SECRET di Vercel.
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  // 2. Dapatkan slug dari body permintaan
  const body = await request.json();
  const slug = body.slug;

  if (!slug) {
    return NextResponse.json({ message: 'Slug is required' }, { status: 400 });
  }

  try {
    // 3. Revalidasi path yang relevan
    //    - Halaman detail blog
    //    - Halaman daftar blog (untuk menampilkan postingan baru)
    revalidatePath(`/blog/${slug}`);
    revalidatePath('/blog');

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    return NextResponse.json({ message: 'Error revalidating', error }, { status: 500 });
  }
}
