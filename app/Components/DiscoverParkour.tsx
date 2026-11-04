import Image from 'next/image';

export default function DiscoverParkour() {
  return (
    <section id="discover-parkour" className="relative bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-12 overflow-hidden">
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Big ghost text */}
      <div
        className="absolute -right-8 top-1/2 -translate-y-1/2 font-[var(--font-bebas)] text-[clamp(8rem,20vw,16rem)] leading-none text-white/[0.025] select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        PARKOUR
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left — text */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-white/30" />
              <p className="font-[var(--font-bebas)] text-xs tracking-[0.5em] text-white/40 uppercase">
                Discover
              </p>
            </div>

            <h2 className="font-[var(--font-bebas)] text-[clamp(3.5rem,9vw,7rem)] leading-[0.88] tracking-tight text-white mb-8">
              Discover
              <br />
              <span className="text-white/40">Parkour</span>
            </h2>

            <div className="w-12 h-[2px] bg-white/30 mb-8" />

            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-6 max-w-md">
              The art of movement. Parkour is about seeing the world differently — every wall, rail,
              and rooftop becomes an invitation to move freely, efficiently, and creatively.
            </p>

            <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-md">
              Born in the suburbs of Paris and spread across the globe, parkour has evolved into a
              discipline that transforms cityscapes into playgrounds and practitioners into athletes
              of the urban environment.
            </p>

            <a
              href="#what-is-parkour"
              id="discover-learn-more"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-white border border-white/30 px-7 py-3.5 hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
              <svg
                className="group-hover:translate-x-1 transition-transform duration-300"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Images/Hero/Hero.JPG"
                alt="Discover Parkour — RAMP athlete in action"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Corner accent */}
              <div className="absolute top-4 left-4 border-t border-l border-white/30 w-10 h-10" />
              <div className="absolute bottom-4 right-4 border-b border-r border-white/30 w-10 h-10" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white/5 backdrop-blur-md border border-white/15 rounded-xl px-5 py-4 hidden md:block">
              <p className="font-[var(--font-bebas)] text-3xl text-white leading-none">10+</p>
              <p className="text-white/50 text-[10px] tracking-[0.25em] uppercase mt-1">Years of Movement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
