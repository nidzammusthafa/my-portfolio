import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();
const MAX_ATTEMPTS = 3;
const COOLDOWN_PERIOD = 60 * 60 * 1000; // 1 hour in milliseconds

const HASHED_PASSWORD =
  process.env.PASSWORD_HASH ||
  "$2a$12$VHur4Rddk6SeSvPncYxFYu3rIBgxtJgid9zBBq4mvZseLmclvRPVG";
const JWT_SECRET = process.env.JWT_SECRET || "SUPER_SECRET_KEY_DEFAULT";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    let attempts = loginAttempts.get(ip);
    const currentTime = Date.now();

    if (!attempts || currentTime - attempts.lastAttempt > COOLDOWN_PERIOD) {
      attempts = { count: 0, lastAttempt: currentTime };
    }

    if (attempts.count >= MAX_ATTEMPTS) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Terlalu banyak percobaan login yang gagal. Silakan coba lagi setelah 1 jam.",
        },
        { status: 429 }
      );
    }

    if (!password) {
      attempts.count++;
      attempts.lastAttempt = currentTime;
      loginAttempts.set(ip, attempts);
      return NextResponse.json(
        { success: false, message: "Kata sandi tidak boleh kosong." },
        { status: 400 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, HASHED_PASSWORD);

    if (isPasswordCorrect) {
      loginAttempts.delete(ip);

      const token = jwt.sign({ userId: "admin" }, JWT_SECRET, {
        expiresIn: "1d",
      });

      return NextResponse.json(
        { success: true, message: "Login berhasil!", token: token },
        { status: 200 }
      );
    } else {
      attempts.count++;
      attempts.lastAttempt = currentTime;
      loginAttempts.set(ip, attempts);
      return NextResponse.json(
        { success: false, message: "Kata sandi salah. Silakan coba lagi." },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error in /api/verify-password:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server internal." },
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

export async function PUT() {
  return NextResponse.json(
    { message: "Metode tidak diizinkan." },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { message: "Metode tidak diizinkan." },
    { status: 405 }
  );
}

