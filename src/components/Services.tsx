import { Layers, Radio, TrendingUp } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="mb-32">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h3 className="font-mono text-xs text-accent-500 tracking-widest uppercase sticky top-24">
            03 / Services
          </h3>
        </div>
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="scroll-item flashlight-card p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
            <Layers className="text-accent-500 w-8 h-8 mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-white">
              Fullstack Web App Development
            </h4>
            <p className="text-sm text-neutral-400">
              Fast, affordable, and high-quality solutions. I build complete web
              applications from front-end to back-end, ensuring a seamless and
              robust final product.
            </p>
          </div>
          <div className="scroll-item flashlight-card p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
            <Radio className="text-accent-500 w-8 h-8 mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-white">
              Broadcast Messaging (API & Service)
            </h4>
            <p className="text-sm text-neutral-400">
              Reliable API services for sending broadcast messages. Perfect for
              notifications, marketing campaigns, and mass communication needs.
            </p>
          </div>
          <div className="scroll-item flashlight-card p-6 rounded-2xl border md:col-span-2 border-neutral-800 bg-neutral-900/40">
            <TrendingUp className="text-accent-500 w-8 h-8 mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-white">
              SaaS Application Sales
            </h4>
            <p className="text-sm text-neutral-400">
              Ready-to-use Software as a Service applications. Get access to
              powerful tools without the overhead of building them from scratch.
            </p>
          </div>
        </div>
        <div className="md:col-span-12 flex justify-center mt-8">
          <a
            href="/services"
            className="px-6 py-3 border hover:border-neutral-500 font-medium rounded-lg transition-colors duration-300 backdrop-blur-sm border-neutral-700 text-neutral-300 hover:text-white bg-neutral-900/30 cursor-pointer scroll-item"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
