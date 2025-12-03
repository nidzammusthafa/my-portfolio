"use client";

import Starfield from "@/components/Starfield";
import Grid3d from "@/components/Grid3d";
import FlashlightEffect from "@/components/FlashlightEffect";
import ScrollObserver from "@/components/ScrollObserver";
import Footer from "@/components/Footer";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

const allProjects = [
  {
    year: "2025",
    category: "Business Tool",
    title: "WhatsApp Business Dashboard",
    description:
      "Platform terpusat untuk mengotomatisasi kampanye WhatsApp, menyiapkan pesan terjadwal, dan memonitor performa percakapan secara real time. Solusi ini membantu tim marketing menjaga keamanan akun, membagi segmen pelanggan, serta menganalisis metrik utama guna meningkatkan retensi.",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "Express Js",
      "Socket.IO",
    ],
    links: {
      code: "https://github.com/nidzammusthafa/whatsapp-business-tools",
      demo: "https://whatsapp-business-tools.vercel.app/dashboard",
    },
  },
  {
    year: "2025",
    category: "Company Profile",
    title: "IdPlay Company Profile",
    description:
      "Situs profil perusahaan dengan fokus pada layanan internet residensial dan bisnis. Pengunjung dapat mengecek ketersediaan jaringan berdasarkan lokasi, membandingkan paket yang dinamis, dan mengajukan permintaan pemasangan melalui formulir yang terintegrasi dengan CRM internal.",
    tech: ["Nextjs", "Typescript", "Tailwind CSS"],
    links: {
      code: "https://github.com/nidzammusthafa/idplay",
      demo: "https://idplay.it.com",
    },
  },
  {
    year: "2025",
    category: "Islamic Super App",
    title: "MuslimSet",
    description:
      "Platform ibadah 'Fullset' terlengkap untuk umat Islam. Fitur mencakup Al-Quran & Hadits lengkap, Faraidh, Kalender Hijriyah, dan Waktu Sholat. Dilengkapi Smart Search & AI Search untuk pencarian berbasis konteks, AI Insight, Tafsir, Murottal, Tajwid, serta sistem Smart Bookmark tercanggih.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vector DB"],
    links: {
      code: "#",
      demo: "https://muslimset.com",
    },
  },
  {
    year: "2023",
    category: "Education",
    title: "IST Test Tools",
    description:
      "Platform digital untuk Tes IST (Intelligenz-Struktur-Test) dengan alur pengerjaan adaptif dan dashboard hasil otomatis. Pengguna mendapatkan analisis kecerdasan terstruktur, rekomendasi pengembangan kompetensi, serta opsi unduhan laporan dalam format PDF.",
    tech: ["Nextjs", "Typescript", "Tailwind CSS"],
    links: {
      code: "#",
      demo: "https://ist-test.vercel.app",
    },
  },
  {
    year: "2025",
    category: "E-Commerce",
    title: "Wajan Produksi Berkah",
    description:
      "Company profile untuk produsen peralatan masak yang menampilkan katalog produk, testimoni pelanggan, dan detail layanan custom. Integrasi formulir WhatsApp memudahkan calon pelanggan melakukan pemesanan ataupun konsultasi secara cepat.",
    tech: ["NextJs 15", "Shadcn UI", "Supabase", "Tailwind CSS V4"],
    links: {
      code: "#",
      demo: "https://www.wajanproduksiberkah.com/",
    },
  },
  {
    year: "2025",
    category: "Portfolio",
    title: "Makeup Muslimah Bandung",
    description:
      "Website portfolio jasa makeup artist dengan tampilan galeri interaktif, daftar paket layanan tematik, dan sistem booking yang terhubung ke WhatsApp Business. Konten disusun untuk meningkatkan kepercayaan calon klien melalui highlight review dan dokumentasi acara.",
    tech: ["NextJs 15", "Shadcn UI", "Supabase", "Tailwind CSS V4"],
    links: {
      code: "#",
      demo: "https://www.makeupmuslimahbdg.my.id/",
    },
  },
  {
    year: "2025",
    category: "Personal Blog & Tools",
    title: "MechaVault",
    description:
      "Aplikasi web blog pribadi untuk mahasiswa mekatronika. Dilengkapi fitur penyimpanan catatan dari obrolan AI, kategorisasi cerdas, dan penguncian halaman untuk privasi.",
    tech: ["Next.js", "Tailwind CSS", "AI Integration", "Supabase"],
    links: {
      code: "#",
      demo: "https://mechavault.vercel.app",
    },
  },
];

export default function ProjectsPage() {
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

      <main className="w-full py-12 relative overflow-x-hidden min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 scroll-item slide-from-left"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-mono font-bold text-white mb-16 scroll-item slide-from-top">
            All Projects
          </h1>

          <div className="grid gap-8">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="group scroll-item flashlight-card p-6 md:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-accent-500 font-mono text-xs">
                        {project.year}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
                      <span className="text-neutral-500 font-mono text-xs">
                        {project.category}
                      </span>
                    </div>
                    <h4 className="text-2xl font-semibold text-white mb-3 group-hover:text-accent-500 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded bg-neutral-800/50 border border-neutral-700/50 text-xs text-neutral-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.links.code !== "#" && (
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-white hover:text-accent-500 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {project.links.demo !== "#" && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-white hover:text-accent-500 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
