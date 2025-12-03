import { Github, ExternalLink } from "lucide-react";

const projects = [
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
    title: "Serene Syari",
    description:
      "Website portfolio jasa makeup artist dengan tampilan galeri interaktif, daftar paket layanan tematik, dan sistem booking yang terhubung ke WhatsApp Business. Konten disusun untuk meningkatkan kepercayaan calon klien melalui highlight review dan dokumentasi acara.",
    tech: ["NextJs 15", "Shadcn UI", "Supabase", "Tailwind CSS V4"],
    links: {
      code: "#",
      demo: "https://www.serenesyari.com/",
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

export default function Projects() {
  return (
    <section id="projects" className="mb-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-4">
          <h3 className="font-mono text-xs text-accent-500 tracking-widest uppercase sticky top-24">
            02 / Selected Works
          </h3>
        </div>
        <div className="md:col-span-8 space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group scroll-item flashlight-card p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-500"
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
        <div className="md:col-span-12 flex justify-center mt-8">
          <a
            href="/projects"
            className="px-6 py-3 border hover:border-neutral-500 font-medium rounded-lg transition-colors duration-300 backdrop-blur-sm border-neutral-700 text-neutral-300 hover:text-white bg-neutral-900/30 cursor-pointer scroll-item"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
