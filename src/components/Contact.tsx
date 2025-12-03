"use client";

import { useState } from "react";
import { Send, MessageSquare, User, Briefcase } from "lucide-react";
import Link from "next/link";

export default function Contact() {
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
    <section id="contact" className="pt-16 pb-8">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h3 className="font-mono text-xs text-accent-500 tracking-widest uppercase sticky top-24">
            05 / Contact
          </h3>
        </div>
        <div className="md:col-span-8 flex flex-col gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-mono font-semibold mb-6 text-white scroll-item">
              Let&apos;s build something extraordinary.
            </h2>
            <p className="text-neutral-400 mb-8 scroll-item">
              Have a project in mind or want to discuss a potential
              collaboration? Fill out the form below, and let&apos;s start a
              conversation via WhatsApp.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 scroll-item flashlight-card p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm mb-12"
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
                className="w-full py-4 px-6 rounded-lg bg-accent-600 hover:bg-accent-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(0,168,107,0.4)] hover:shadow-[0_0_25px_-5px_rgba(0,168,107,0.6)] group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send to WhatsApp
              </button>
            </form>

            <div className="mb-8">
              <Link
                href="mailto:nidzam0501@gmail.com"
                className="text-xl md:text-2xl hover:text-accent-500 transition-colors border-b hover:border-accent-500 pb-1 text-neutral-400 border-neutral-800 scroll-item"
              >
                nidzam0501@gmail.com
              </Link>
              <p className="mt-4 text-neutral-500 scroll-item">
                Bandung, Indonesia (GMT+7)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
