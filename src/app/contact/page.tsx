"use client";

import { useState } from "react";
import Starfield from "@/components/Starfield";
import Grid3d from "@/components/Grid3d";
import FlashlightEffect from "@/components/FlashlightEffect";
import ScrollObserver from "@/components/ScrollObserver";
import Footer from "@/components/Footer";
import { ArrowLeft, Send, MessageSquare, User, Briefcase } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    service: "Pembuatan Aplikasi Web",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "62895703153160";
    const text = `Assalamu'alaikum / Halo Mas Nidzam,

Perkenalkan saya ${formData.name}.
Saya tertarik untuk berdiskusi mengenai jasa *${formData.service}*.

Berikut detail kebutuhan saya:
${formData.message}

Mohon informasinya lebih lanjut. Terima kasih.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
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

      <main className="w-full py-12 relative overflow-x-hidden min-h-screen flex flex-col">
        <div className="w-full max-w-3xl mx-auto px-6 md:px-12 lg:px-20 mb-24 flex-grow">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 scroll-item slide-from-left"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-12 scroll-item slide-from-top">
            <h1 className="text-4xl md:text-6xl font-mono font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-neutral-400 max-w-xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss a potential
              collaboration? Fill out the form below, and let&apos;s start a
              conversation via WhatsApp.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 scroll-item slide-from-bottom flashlight-card p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-neutral-300 flex items-center gap-2"
              >
                <User className="w-4 h-4 text-accent-500" />
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-neutral-950/50 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="service"
                className="text-sm font-medium text-neutral-300 flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-accent-500" />
                Service Type
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-950/50 border border-neutral-800 text-white focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all appearance-none"
                >
                  <option value="Pembuatan Aplikasi Web">
                    Fullstack Web Development
                  </option>
                  <option value="Jasa Broadcast WhatsApp">
                    WhatsApp Broadcast Service
                  </option>
                  <option value="Konsultasi IT">IT Consultation</option>
                  <option value="Lainnya">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-neutral-300 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-accent-500" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project requirements..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-neutral-950/50 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-lg bg-accent-600 hover:bg-accent-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.6)] group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Send to WhatsApp
            </button>
          </form>
        </div>
        <Footer />
      </main>
    </>
  );
}
