import Starfield from "@/components/Starfield";
import Grid3d from "@/components/Grid3d";
import FlashlightEffect from "@/components/FlashlightEffect";
import ScrollObserver from "@/components/ScrollObserver";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import LatestPosts from "@/components/LatestPosts";

export default function Home() {
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

      {/* Scrollable Content Area */}
      <main id="main-scroll" className="w-full py-12 relative overflow-x-clip">
        <Hero />
        <About />
        <Projects />
        <Services />
        <LatestPosts />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
