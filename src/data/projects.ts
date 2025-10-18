import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "WhatsApp Business Dashboard",
    description:
      "Platform terpusat untuk mengotomatisasi kampanye WhatsApp, menyiapkan pesan terjadwal, dan memonitor performa percakapan secara real time. Solusi ini membantu tim marketing menjaga keamanan akun, membagi segmen pelanggan, serta menganalisis metrik utama guna meningkatkan retensi.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "Express Js",
      "Socket.IO",
    ],
    image: "https://images.unsplash.com/photo-1633675254245-efd890d087b8",
    liveUrl: "https://whatsapp-business-tools.vercel.app/dashboard",
    githubUrl: "https://github.com/nidzammusthafa/whatsapp-business-tools",
  },
  {
    title: "IdPlay Company Profile",
    description:
      "Situs profil perusahaan dengan fokus pada layanan internet residensial dan bisnis. Pengunjung dapat mengecek ketersediaan jaringan berdasarkan lokasi, membandingkan paket yang dinamis, dan mengajukan permintaan pemasangan melalui formulir yang terintegrasi dengan CRM internal.",
    technologies: ["Nextjs", "Typescript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1531765408077-9a1f85f90df1",
    liveUrl: "https://idplay.it.com",
    githubUrl: "https://github.com/nidzammusthafa/idplay",
  },
  {
    title: "Islam Daily",
    description:
      "Aplikasi web komprehensif sebagai pendamping ibadah harian umat Islam. Menyediakan akses Quran dan Hadits, jadwal sholat otomatis berdasarkan lokasi, kompas kiblat interaktif, kalender hijriah, pengingat puasa sunnah dan wajib, serta konten edukasi yang mudah diakses.",
    technologies: ["Nextjs", "Typescript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1624862304458-0bb3d6f4b13c",
    liveUrl: "https://islamdaily.site",
  },
  {
    title: "IST Test Tools",
    description:
      "Platform digital untuk Tes IST (Intelligenz-Struktur-Test) dengan alur pengerjaan adaptif dan dashboard hasil otomatis. Pengguna mendapatkan analisis kecerdasan terstruktur, rekomendasi pengembangan kompetensi, serta opsi unduhan laporan dalam format PDF.",
    technologies: ["Nextjs", "Typescript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1620302044935-444961a5d028",
    liveUrl: "https://ist-test.vercel.app",
    githubUrl: "#",
  },
  {
    title: "Wajan Produksi Berkah",
    description:
      "Company profile untuk produsen peralatan masak yang menampilkan katalog produk, testimoni pelanggan, dan detail layanan custom. Integrasi formulir WhatsApp memudahkan calon pelanggan melakukan pemesanan ataupun konsultasi secara cepat.",
    technologies: ["NextJs 15", "Shadcn UI", "Supabase", "Tailwind CSS V4"],
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8ec32",
    liveUrl: "https://www.wajanproduksiberkah.com/",
  },
  {
    title: "Makeup Muslimah Bandung",
    description:
      "Website portfolio jasa makeup artist dengan tampilan galeri interaktif, daftar paket layanan tematik, dan sistem booking yang terhubung ke WhatsApp Business. Konten disusun untuk meningkatkan kepercayaan calon klien melalui highlight review dan dokumentasi acara.",
    technologies: ["NextJs 15", "Shadcn UI", "Supabase", "Tailwind CSS V4"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    liveUrl: "https://www.makeupmuslimahbdg.my.id/",
  },
];
