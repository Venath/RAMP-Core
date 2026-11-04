'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const slides = [
  { src: '/Images/Hero/Hero.JPG', alt: 'Parkour — raw movement in the city' },
  { src: '/Images/carousel/Silke.jpeg', alt: 'Traceurs pushing limits on urban terrain' },
  { src: '/Images/carousel/Stuntzu.jpg', alt: 'Street parkour — no walls, no limits' },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo]
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="carousel" className="relative overflow-hidden bg-[#161616] py-16 md:py-24 px-4 md:px-12">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#FF5A1F]/40 to-transparent" />
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-[#FF5A1F]" />
          <p className="font-[var(--font-bebas)] text-xs tracking-[0.5em] text-[#FF5A1F] uppercase">
            Gallery
          </p>
        </div>

        {/* Main slider */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-all duration-700 ease-in-out"
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? 'scale(1)' : 'scale(1.04)',
              }}
              aria-hidden={i !== current}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1152px"
                priority={i === 0}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Slide caption */}
              <div className="absolute bottom-6 left-6 right-16">
                <p className="text-white/70 text-xs tracking-[0.3em] uppercase font-mono">
                  {slide.alt}
                </p>
              </div>
            </div>
          ))}

          {/* Left arrow */}
          <button
            id="carousel-prev"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:border-white/40 z-10"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            id="carousel-next"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:border-white/40 z-10"
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide counter */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
            <span className="text-white/70 text-[10px] tracking-[0.2em] font-mono">
              {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-10">
            <div
              key={current}
              className="h-full bg-white/60 animate-progress-bar"
              style={{ animationDuration: '5s', animationTimingFunction: 'linear' }}
            />
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2 mt-6" role="tablist" aria-label="Carousel slides">
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-400 ${
                i === current
                  ? 'w-10 h-[3px] bg-white'
                  : 'w-[6px] h-[6px] bg-white/25 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
