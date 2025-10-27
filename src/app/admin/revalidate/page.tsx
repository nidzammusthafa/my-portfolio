"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { useAuthStore } from "@/stores/authStore";

type StatusState = "idle" | "loading" | "success" | "error";

const AdminRevalidatePage = () => {
  const { token } = useAuthStore();
  const [status, setStatus] = useState<StatusState>("idle");
  const [message, setMessage] = useState<string>("");
  const [revalidatedAt, setRevalidatedAt] = useState<string | null>(null);
  const [paths, setPaths] = useState<string[]>([]);

  const handleRevalidate = async () => {
    if (!token) {
      setStatus("error");
      setMessage("Token tidak ditemukan. Silakan login kembali.");
      return;
    }

    setStatus("loading");
    setMessage("");
    setPaths([]);

    try {
      const response = await fetch("/api/revalidate", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Gagal melakukan revalidate.");
      }

      setStatus("success");
      setMessage(
        data.message || "Berhasil melakukan revalidate konten blog dan sitemap."
      );
      setRevalidatedAt(data.revalidatedAt ?? new Date().toISOString());
      setPaths(data.revalidatedSlugs ?? []);
    } catch (error) {
      console.error("Revalidate error:", error);
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat melakukan revalidate."
      );
    }
  };

  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col gap-8 px-6 pb-20 pt-24 font-sans md:px-12 lg:px-24">
      <div>
        <h1 className="text-3xl font-bold text-lightest-slate md:text-4xl">
          Revalidate Konten Blog
        </h1>
        <p className="mt-3 text-slate">
          Gunakan tombol di bawah ini untuk memperbarui daftar blog, halaman
          detail, dan sitemap tanpa perlu build ulang aplikasi.
        </p>
      </div>

      <div className="rounded-xl border border-light-navy bg-navy/60 p-8 shadow-lg shadow-black/20">
        <div className="flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            onClick={handleRevalidate}
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Memperbarui...
              </>
            ) : (
              "Revalidate Sekarang"
            )}
          </Button>
          <p className="text-sm text-slate">
            Pastikan perubahan data di Notion telah disimpan sebelum menekan
            tombol.
          </p>
        </div>

        {status === "success" && (
          <div className="mt-6 rounded-lg border border-green-500/40 bg-green-500/10 p-4 text-lightest-slate">
            <div className="flex items-center gap-3 font-semibold text-green-400">
              <CheckCircle2 className="h-5 w-5" />
              <span>{message}</span>
            </div>
            {revalidatedAt && (
              <p className="mt-2 text-sm text-slate">
                Terakhir diperbarui:{" "}
                {new Date(revalidatedAt).toLocaleString("id-ID", {
                  dateStyle: "short",
                  timeStyle: "medium",
                })}
              </p>
            )}
            {paths.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-lightest-slate">
                  Path yang diperbarui:
                </p>
                <ul className="mt-2 grid gap-2 text-sm text-slate md:grid-cols-2">
                  {paths.map((path) => (
                    <li
                      key={path}
                      className="rounded-md border border-light-navy bg-dark-navy/40 px-3 py-2"
                    >
                      {path}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {status === "error" && (
          <div className="mt-6 rounded-lg border border-red-500/40 bg-red-500/10 p-4">
            <div className="flex items-center gap-3 font-semibold text-red-400">
              <XCircle className="h-5 w-5" />
              <span>{message}</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminRevalidatePage;

