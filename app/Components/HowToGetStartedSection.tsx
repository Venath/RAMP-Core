import Link from 'next/link';

const quickGuide = [
  {
    number: '01',
    title: 'Learn the Basics',
    description: 'Start with safe landings, rolls, balance and simple jumps.',
  },
  {
    number: '02',
    title: 'Build Strength',
    description: 'Develop mobility, conditioning and control at your own pace.',
  },
{
  number: '03',
  title: 'Train Safely & Join the Community',
  description: 'Train with proper technique, connect with fellow practitioners, share experiences, and be part of a community that supports each other.',
},
  
];

export default function HowToGetStartedSection() {
  return (
    <section className="relative overflow-hidden bg-[#111111] px-4 py-20 md:px-12 md:py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#FF5A1F]/40 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <p className="mb-4 font-[var(--font-bebas)] text-xs uppercase tracking-[0.5em] text-[#FF5A1F]">
              Quick Guide
            </p>
            <h2 className="font-[var(--font-bebas)] text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.9] text-white">
              How to Get Started
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
              Learning the basics of parkour is an exciting and rewarding experience, but it&apos;s
              essential to start small and prioritise safety.
            </p>
            {/* <Link
              href="/how-to-get-started"
              className="mt-7 inline-flex w-fit items-center gap-3 border-b border-[#FF5A1F] pb-2 font-[var(--font-bebas)] text-sm uppercase tracking-[0.25em] text-white transition-colors hover:text-[#FF5A1F]"
            >
              Explore more resources
              <span aria-hidden="true">↗</span>
            </Link> */}
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {quickGuide.map((item) => (
            <article key={item.number} className="bg-[#161616] p-7 transition-colors hover:bg-white/[0.035] md:p-9">
              <p className="mb-8 font-[var(--font-bebas)] text-sm tracking-[0.35em] text-white/30">
                {item.number}
              </p>
              <h3 className="mb-3 font-[var(--font-bebas)] text-3xl text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
            </article>
          ))}
        </div>
                  <div className="text-center mt-12">
            <a
              href="/how-to-get-started"
              id="how-to-get-started"
              className="group inline-flex items-center gap-3 text-lg tracking-[0.6em] uppercase text-white border border-white/30 px-7 py-3.5 hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore More Resourses
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
      </div>
    </section>
  );
}
