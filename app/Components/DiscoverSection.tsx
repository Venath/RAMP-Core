'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DiscoverSection() {
  const cards = [
    {
      id: 'what-is-parkour',
      href: '#what-is-parkour',
      label: 'Parkour Explained',
      tagline: 'Find out everything you need to know about parkour and what it stands for.',
      title: 'What is\nParkour?',
      image: '/Images/whatisparkour.png',
    },
    {
      id: 'how-to-get-started',
      href: '/how-to-get-started',
      label: 'Start Here',
      tagline: 'Learn the first steps, essential basics and how to begin training safely.',
      title: 'How to\nGet Started',
      image: '/Images/parkourclasse.jpeg',
    },
  ];

  return (
    <section id="discover-parkour" className="relative overflow-hidden bg-[#111111] px-4 md:px-12 py-20 md:py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#FF5A1F]/40 to-transparent" />
      {/* Top separator */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-14">
          <p className="font-[var(--font-bebas)] text-[10px] tracking-[0.5em] text-[#FF5A1F] uppercase mb-3">
            Explore
          </p>
          <h2 className="font-[var(--font-bebas)] text-[clamp(2.2rem,6vw,4.5rem)] leading-tight tracking-tight text-white">
            Discover Parkour
          </h2>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              id={`discover-card-${card.id}`}
              onClick={(e) => {
                if (!card.href.startsWith('#')) return;
                e.preventDefault();
                document.querySelector(card.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden block cursor-pointer"
            >
              {/* Background image */}
              <Image
                src={card.image}
                alt={card.title.replace('\n', ' ')}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Dark overlay — lighter on hover */}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-400" />

              {/* Arrow top-left */}
              <div className="absolute top-5 left-5 w-9 h-9 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white/15 group-hover:border-white/70 transition-all duration-300">
                <svg
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              {/* Title — bottom left, big */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-[var(--font-bebas)] text-[clamp(2rem,5vw,3.5rem)] leading-[0.92] tracking-tight text-white whitespace-pre-line mb-1">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Labels + taglines below cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {cards.map((card) => (
            <div key={card.id} className="px-1">
              <p className="font-[var(--font-bebas)] text-[10px] tracking-[0.35em] uppercase text-white/60 mb-1">
                {card.label}
              </p>
              <p className="text-white/40 text-sm leading-relaxed">{card.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
