export default function Testimonials() {
  return (
    <section id="testimonials" className="mb-32 scroll-item">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h3 className="font-mono text-xs text-accent-500 tracking-widest uppercase sticky top-24">
            04 / Testimonials
          </h3>
        </div>
        <div className="md:col-span-8 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-neutral-950 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-neutral-950 to-transparent z-10"></div>

          <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
            {/* Set 1 */}
            <div className="w-[300px] p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur">
              <p className="text-sm text-neutral-300 mb-4">
                &quot;The architecture Nidzam implemented scaled effortlessly. A
                true engineering mastermind.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500 font-bold text-xs">
                  JD
                </div>
                <div>
                  <div className="text-xs font-bold text-white">John Doe</div>
                  <div className="text-[10px] text-neutral-500">
                    CTO, TechCorp
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px] p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur">
              <p className="text-sm text-neutral-300 mb-4">
                &quot;Futuristic design meets solid code. The best developer
                we&apos;ve worked with.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-xs">
                  AS
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    Sarah Smith
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    Product Lead
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px] p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur">
              <p className="text-sm text-neutral-300 mb-4">
                &quot;Incredible attention to detail and performance
                optimization.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-xs">
                  MR
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Mike Ross</div>
                  <div className="text-[10px] text-neutral-500">
                    Founder, StartUp
                  </div>
                </div>
              </div>
            </div>
            {/* Duplicate Set for Loop */}
            <div className="w-[300px] p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur">
              <p className="text-sm text-neutral-300 mb-4">
                &quot;The architecture Nidzam implemented scaled effortlessly. A
                true engineering mastermind.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500 font-bold text-xs">
                  JD
                </div>
                <div>
                  <div className="text-xs font-bold text-white">John Doe</div>
                  <div className="text-[10px] text-neutral-500">
                    CTO, TechCorp
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px] p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur">
              <p className="text-sm text-neutral-300 mb-4">
                &quot;Futuristic design meets solid code. The best developer
                we&apos;ve worked with.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold text-xs">
                  AS
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    Sarah Smith
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    Product Lead
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
