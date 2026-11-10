import Image from "next/image";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import DiscoverSection from "./Components/DiscoverSection";
import WhatIsParkour from "./Components/WhatIsParkour";
import HowToGetStartedSection from "./Components/HowToGetStartedSection";
import AutoPlayVideo from "./Components/AutoPlayVideo";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* ─── Sticky Navbar ─── */}
      <Navbar />

      {/* ─── Hero ─── */}
      <section id="hero" className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/Images/Hero/Hero.JPG"
            alt="RAMP Parkour — Street movement"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Film grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
            <p className="font-[var(--font-bebas)] text-sm md:text-base tracking-[0.4em] text-white/70 mb-4 uppercase">
    Parkour in Sri Lanka
  </p>
          <p className="font-[var(--font-bebas)] text-sm md:text-base tracking-[0.4em] text-white/70 mb-4 uppercase">
            Street Parkour
          </p>
          {/* <p className="mt-2 text-white/60 text-base md:text-lg max-w-md leading-relaxed">
            Something raw is dropping. Stay tuned.
          </p> */}
          <div className="mt-16 flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
              Scroll for more
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </main>
      </section>

      {/* ─── Photo Carousel ─── */}
      <Carousel />

      {/* ─── Discover Parkour (heading + 2 cards) ─── */}
      <DiscoverSection />

      {/* ─── What is Parkour (full section) ─── */}
      <WhatIsParkour />

      {/* ─── Getting Started Quick Guide ─── */}
      <HowToGetStartedSection />

      {/* ─── YouTube Video + RAMP Description ─── */}
      <AutoPlayVideo />

      {/* ─── Footer ─── */}
      <Footer />

    </div>
  );
}
