
const classes = [
  // {
  //   id: 'beginner',
  //   level: 'Beginner',
  //   num: '01',
  //   title: 'Foundation Moves',
  //   description:
  //     'Learn the fundamentals — safe landings, rolls, basic vaults, and jump technique. The essential base for every traceur.',
  //   duration: '60 min',
  //   frequency: '2× / week',
  //   tag: 'All Ages Welcome',
  //   details: ['Safe landing technique', 'Basic vaults & rolls', 'Balance & coordination', 'Body conditioning'],
  // },
{
  id: 'all-levels',
  level: 'all levels',
  title: 'Urban Flow',
  description:
    'Learn the fundamentals of parkour, develop your movement skills and build confidence while exploring new ways to move through your environment. Train at your own pace and connect with others who share the same passion.',
  duration: '90 min',
  details: [
    'Landing techniques and safety fundamentals',
    'Rolls, balance and body control',
    'Jumping and precision techniques',
    'Vaults and obstacle movement',
    'Climbing, swinging and wall runs',
    'Strength, coordination and conditioning',
    'Connecting movements into fluid sequences',
  ],
},
  // ,
  // {
  //   id: 'advanced',
  //   level: 'Advanced',
  //   num: '03',
  //   title: 'Street Specialist',
  //   description:
  //     'High-level technique, speed, adaptability, and creative line-finding in complex urban environments.',
  //   duration: '90 min',
  //   frequency: '4× / week',
  //   tag: 'By Assessment',
  //   details: ['Complex movement lines', 'Speed & endurance', 'Creative expression', 'Competition prep'],
  // },
];

export default function ParkourClasses() {
  return (
    <section id="parkour-classes" className="relative overflow-hidden bg-[#161616] py-24 md:py-32 px-4 md:px-12">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#FF5A1F]/40 to-transparent" />
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-[#FF5A1F]" />
              <p className="font-[var(--font-bebas)] text-xs tracking-[0.5em] text-[#FF5A1F] uppercase">
                Train with us
              </p>
            </div>
            <h2 className="font-[var(--font-bebas)] text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-white">
              Parkour Classes
            </h2>
            <div className="w-14 h-[2px] bg-white/25 mt-5" />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60 md:text-base md:text-right">
            Every level. Every body. One mission — to move freely.
          </p>
        </div>

        {/* Class cards */}
        <div className="grid grid-cols-1 justify-items-center">
          {classes.map((cls) => (
            <div
              key={cls.id}
              id={`class-${cls.id}`}
              className="group relative flex w-full max-w-3xl flex-col overflow-hidden border border-white/10 bg-white/[0.035] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1 hover:border-[#FF5A1F]/50 md:p-14"
            >
              
              {/* Level badge */}
            <span className="mb-7 inline-block self-center border border-[#FF5A1F]/50 px-10 py-3 text-xs uppercase tracking-[0.35em] text-[#FF5A1F] transition-colors duration-300 md:text-sm">
              {cls.level}
            </span>

              <h3 className="mb-5 font-[var(--font-bebas)] text-4xl tracking-wide text-white md:text-6xl">
                {cls.title}
              </h3>

              <p className="mb-8 flex-1 text-base leading-relaxed text-white/50 md:text-lg">
                {cls.description}
              </p>

              {/* Details list */}
              <ul className="mb-8 flex flex-col gap-3">
                {cls.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3 text-sm text-white/40 md:text-base">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/30" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Meta */}
              <div className="mb-8 flex gap-8 border-t border-white/8 pt-5 text-xs uppercase tracking-widest text-white/35 md:text-sm">
                <span>⏱ {cls.duration}</span>
              </div>

              {/* Footer */}
              <div className="flex justify-center">
                <a
                  href={process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL ?? process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-center gap-3 rounded-full border border-[#25D366]/50 bg-[#25D366] px-7 py-4 text-sm font-medium uppercase tracking-[0.25em] text-black transition-colors duration-200 hover:bg-[#3ee67c] md:px-9 md:text-base"
                  aria-label={`DM RAMP on WhatsApp to book the ${cls.title} class`}
                >
                  DM to book a session
                  <svg
                    className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
