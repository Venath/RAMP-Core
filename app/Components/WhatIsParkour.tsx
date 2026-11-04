import Image from 'next/image';

const principles = [
  {
    id: 'freedom',
    title: 'Freedom',
    desc: 'No rules, no limits. Just you, your body, and the environment you choose to move through.',
    icon: '◈',
  },
  {
    id: 'flow',
    title: 'Flow',
    desc: 'Seamless, efficient movement between obstacles — grace and speed in perfect balance.',
    icon: '◉',
  },
  {
    id: 'strength',
    title: 'Strength',
    desc: 'Build real, functional strength through natural, full-body movement patterns.',
    icon: '◆',
  },
  {
    id: 'community',
    title: 'Community',
    desc: 'A global tribe of traceurs who challenge, support, and push each other higher.',
    icon: '◇',
  },
];

export default function WhatIsParkour({ showExploreMore = true }: { showExploreMore?: boolean }) {
  return (
    <section id="what-is-parkour" className="relative overflow-hidden bg-[#161616] py-24 md:py-32 px-4 md:px-12">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#FF5A1F]" />
            <p className="font-[var(--font-bebas)] text-xs tracking-[0.5em] text-[#FF5A1F] uppercase">
              Understand
            </p>
            <div className="w-8 h-px bg-white/25" />
          </div>
          <h2 className="font-[var(--font-bebas)] text-[clamp(2.5rem,7vw,5.5rem)] leading-tight tracking-tight text-white">
            What is Parkour?
          </h2>
          <div className="w-14 h-[2px] bg-[#FF5A1F] mx-auto mt-5" />
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-16 md:mb-24">
          {/* Image */}
          <div className="relative aspect-[3/2] overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.25)] order-1 md:order-none">
            <Image
              src="/Images/worldwhatisparkour.png"
              alt="What is Parkour — athlete mid-movement"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent" />

            {/* Quote overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-[var(--font-bebas)] text-2xl md:text-3xl text-white/90 leading-tight">
                &ldquo;To move freely is to live freely.&rdquo;
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center gap-5">
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Parkour is a training discipline that developed from military obstacle course training.
              Practitioners — called traceurs — aim to move through complex environments in the most
              efficient and fluid way possible.
            </p>
            <p className="text-white/50 text-sm md:text-base leading-relaxed">
              It involves running, climbing, vaulting, jumping, balancing, and rolling — all chosen
              based on the terrain and situation. While most commonly practiced in urban spaces,
              parkour can be done anywhere there is an obstacle to overcome.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              More than a sport, it&apos;s a philosophy: the idea that with training and commitment,
              any obstacle — physical or mental — can be overcome.
            </p>

            {/* Inline stat */}
            <div className="flex gap-8 pt-4 border-t border-white/10 mt-2">
              <div>
                <p className="font-[var(--font-bebas)] text-4xl text-white leading-none">1980s</p>
                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mt-1">Origins in France</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="font-[var(--font-bebas)] text-4xl text-white leading-none">Global</p>
                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase mt-1">Practised Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {principles.map((p) => (
            <div
              key={p.id}
              id={`principle-${p.id}`}
              className="group relative border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5A1F]/50 cursor-default"
            >
              <span className="block text-[#FF5A1F] text-lg mb-4 transition-colors duration-300">
                {p.icon}
              </span>
              <h3 className="font-[var(--font-bebas)] text-xl md:text-2xl text-white mb-2 tracking-wide">
                {p.title}
              </h3>
              <p className="text-white/45 text-xs md:text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {showExploreMore && (
          <div className="text-center mt-12">
            <a
              href="/what-is-parkour"
              id="what-is-parkour-explore-more"
              className="group inline-flex items-center gap-3 text-lg tracking-[0.6em] uppercase text-white border border-white/30 px-7 py-3.5 hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore More
              <svg
                className="group-hover:translate-x-1 transition-transform duration-300"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
