'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

/* ─────────────────────────────────────────
   Carousel slides
───────────────────────────────────────── */
const slides = [
  {
    number: '01',
    title: 'Classes',
    image: '/Images/PkClass.png',
    imageAlt: 'A parkour coach teaching students outdoors',
    description: [
      'Starting parkour under the guidance of an experienced coach is a safe way to learn the basics. Classes can be held indoors in purpose-built parkour facilities or other indoor venues, but some coaches also offer outdoor sessions.',
      'Begin by searching online for local parkour coaching organisations and gyms. Many coaching organisations and gyms have websites, and classes are often advertised on social media platforms like Facebook and Instagram.',
    ],
    cta: { label: 'Book A Session In Colombo', href: '/parkourclasses' },
  },
  {
    number: '02',
    title: 'Community',
    image: '/Images/Workshop.jpg',
    imageAlt: 'RAMP parkour community workshop',
    description: [
      'One of the best ways to grow in parkour is to train alongside others. The RAMP community brings together practitioners of all levels — from first-timers to seasoned movers — who share a passion for creative, purposeful movement.',
      'Joining a community gives you access to shared knowledge, encouragement, and the kind of safe, supportive environment where real progress happens.',
    ],
    cta: null,
  },
  {
    number: '03',
    title: 'Parkour Vision & Mindset',
    image: '/Images/worldwhatisparkour.png',
    imageAlt: 'The global parkour vision and mindset',
    description: [
      'Parkour is more than physical training — it is a way of seeing the world. Practitioners learn to look at any environment as a space full of possibilities, approaching obstacles with curiosity rather than hesitation.',
      'The parkour mindset is built on self-improvement, patience, and respect — for your body, for your environment, and for the people around you. Progress is personal, and every movement is an opportunity to learn.',
    ],
    cta: null,
  },
  {
    number: '04',
    title: 'Safety',
    image: '/Images/carousel/Silke.jpeg',
    imageAlt: 'Practitioner training safely',
    description: [
      'Safety is at the heart of how parkour should be practised. The discipline teaches you to assess risk carefully, build skills progressively, and never rush a movement you are not ready for.',
      'Warm up properly, train on appropriate surfaces, and always practise with awareness of your limits. As your skills grow, so does your ability to move efficiently and safely in any environment.',
    ],
    cta: null,
  },
];

/* ─────────────────────────────────────────
   Step data (for the interactive section)
───────────────────────────────────────── */
const steps = [
  {
    number: '01',
    title: 'Learn the Basics',
    description:
      'Start with safe landings, basic rolls, balance, quadrupedal movement and simple jumps.',
  },
  {
    number: '02',
    title: 'Build Your Foundation',
    description:
      'Train strength, mobility and coordination with exercises that support controlled movement.',
  },
  {
    number: '03',
    title: 'Practice at Ground Level',
    description:
      'Begin on low, stable obstacles. Progress to height only when the technique feels repeatable.',
  },
  {
    number: '04',
    title: 'Train with Others',
    description:
      'Join the RAMP community to learn from experienced practitioners and practice safely.',
  },
];

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export default function HowToGetStarted() {
  const [current, setCurrent] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <>
      {/* ──────────────────────────────────────
          HERO BANNER  (unchanged)
      ────────────────────────────────────── */}
      <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-[#080808] px-4 pb-16 pt-32 md:min-h-[82svh] md:px-12 md:pb-24">
        <Image
          src="/Images/Hero/Hero.JPG"
          alt="A parkour athlete beginning an urban movement line"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="mb-5 font-[var(--font-bebas)] text-xs uppercase tracking-[0.5em] text-white/60">
            Your first movement
          </p>
          <h1 className="max-w-4xl font-[var(--font-bebas)] text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] tracking-tight text-white">
            How to
            <br />
            <span className="text-white/55">Get Started</span>
          </h1>
          <p className="mt-7 max-w-xl text-base text-white/65 md:text-xl">
            Start small, move with control, and build a practice that lasts.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────
          CAROUSEL SECTION
      ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#161616] px-4 py-16 md:px-12 md:py-24">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#FF5A1F]/40 to-transparent" />
        {/* Top separator */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="mx-auto max-w-6xl">

          {/* Related Links — above the carousel, right-aligned */}
          <div className="flex justify-end mb-8">
            <div className="text-right">
              <p className="font-[var(--font-bebas)] text-xs uppercase tracking-[0.5em] text-white/30 mb-3">
                Related Links
              </p>
                <ul className="flex flex-col gap-2">
                  {[
                    { label: 'What is Parkour?', href: '/what-is-parkour', id: 'related-what-is-parkour' },
                    { label: 'Who We Are?', href: 'https://www.youtube.com/@team_ramp', id: 'related-who-we-are' },
                  ].map((link) => (
                    <li key={link.id}>
                      <Link
                        href={link.href}
                        id={link.id}
                        target={link.href.startsWith('https://') ? '_blank' : undefined}
                        rel={link.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-white/50 hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-[#FF5A1F]" />
            <p className="font-[var(--font-bebas)] text-xs tracking-[0.5em] text-[#FF5A1F] uppercase">
              Ways to Start
            </p>
          </div>

          {/* ── Slide panel: fixed height, flex row ── */}
          <div className="flex border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-[460px]">

            {/* LEFT — image (hidden on mobile, full width on mobile stack) */}
            <div className="relative hidden md:block md:w-1/2 shrink-0">
              {slides.map((s, i) => (
                <div
                  key={s.number}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: i === current ? 1 : 0 }}
                  aria-hidden={i !== current}
                >
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Mobile-only image strip at top */}
            <div className="absolute top-0 left-0 right-0 h-48 md:hidden">
              {slides.map((s, i) => (
                <div
                  key={`mob-${s.number}`}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: i === current ? 1 : 0 }}
                  aria-hidden={i !== current}
                >
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              ))}
            </div>

            {/* RIGHT — text panel */}
            <div className="relative flex flex-col w-full md:w-1/2 bg-[#0d0d0d] p-7 md:p-10 pt-52 md:pt-10">
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center overflow-hidden">
                <p className="font-[var(--font-bebas)] text-xs tracking-[0.45em] text-white/35 uppercase mb-1">
                  {slide.number}
                </p>
                <h2
                  key={`title-${current}`}
                  className="font-[var(--font-bebas)] text-[clamp(2rem,4vw,3rem)] leading-tight text-white mb-4"
                  style={{ animation: 'fadeUp 0.4s ease both' }}
                >
                  {slide.title}
                </h2>
                <div
                  key={`body-${current}`}
                  className="space-y-3 overflow-hidden"
                  style={{ animation: 'fadeUp 0.45s 0.06s ease both' }}
                >
                  {slide.description.map((para, idx) => (
                    <p key={idx} className="text-sm leading-relaxed text-white/55">
                      {para}
                    </p>
                  ))}
                </div>

                {slide.cta && (
                  <Link
                    href={slide.cta.href}
                    className="mt-4 inline-flex w-fit items-center gap-3 border border-white/30 px-6 py-3 font-[var(--font-bebas)] text-sm uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                    style={{ animation: 'fadeUp 0.5s 0.1s ease both' }}
                  >
                    {slide.cta.label}
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </div>

              {/* ── Controls: dots  |  counter ‹ › ── */}
              <div className="flex items-center justify-between pt-5 border-t border-white/10 mt-4 shrink-0">
                {/* Dot indicators */}
                <div className="flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to ${slides[i].title}`}
                      className={`h-[3px] rounded-full transition-all duration-300 ${
                        i === current ? 'w-8 bg-white' : 'w-3 bg-white/25 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Counter + arrows — always visible, always clickable */}
                <div className="flex items-center gap-2">
                  <span className="font-[var(--font-bebas)] text-xs tracking-[0.3em] text-white/40 tabular-nums mr-1">
                    {String(current + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(slides.length).padStart(2, '0')}
                  </span>
                  <button
                    id="carousel-how-prev"
                    onClick={prev}
                    aria-label="Previous slide"
                    className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 transition-all duration-200 hover:border-white hover:text-white hover:bg-white/[0.07] active:scale-95"
                  >
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    id="carousel-how-next"
                    onClick={next}
                    aria-label="Next slide"
                    className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 transition-all duration-200 hover:border-white hover:text-white hover:bg-white/[0.07] active:scale-95"
                  >
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar under carousel */}
          <div className="mt-3 h-[2px] bg-white/8 overflow-hidden rounded-full">
            <div
              key={current}
              className="h-full bg-white/30 animate-progress-bar"
              style={{ animationDuration: '8s', animationTimingFunction: 'linear' }}
            />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          INTERACTIVE STEPS  (Begin Where You Are)
      ────────────────────────────────────── */}
      <section className="relative bg-[#111111] px-4 py-20 md:px-12 md:py-28">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5A1F]/40 to-transparent" />

        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-14 md:mb-18 max-w-2xl">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-[#FF5A1F]" />
              <p className="font-[var(--font-bebas)] text-xs uppercase tracking-[0.5em] text-[#FF5A1F]">
                The first steps
              </p>
            </div>
            <h2 className="font-[var(--font-bebas)] text-[clamp(2.8rem,7vw,5rem)] leading-[0.95] text-white">
              Begin Where You Are
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/50 max-w-xl">
              Parkour does not require you to be fearless or already fit. It starts with simple,
              repeatable movements in a safe environment.
            </p>
          </div>

          {/* Interactive accordion-style steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isOpen = activeStep === i;
              return (
                <div
                  key={step.number}
                  className={`group border-t border-white/10 transition-all duration-300 ${
                    i === steps.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <button
                    onClick={() => setActiveStep(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    {/* Left: number */}
                    <span
                      className={`font-[var(--font-bebas)] text-sm tracking-[0.4em] transition-colors duration-300 shrink-0 ${
                        isOpen                         ? 'text-[#FF5A1F]' : 'text-white/25 group-hover:text-[#FF5A1F]/70'
                      }`}
                    >
                      {step.number}
                    </span>

                    {/* Centre: title — expands to fill space */}
                    <span
                      className={`flex-1 font-[var(--font-bebas)] text-2xl md:text-4xl leading-tight transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                      }`}
                    >
                      {step.title}
                    </span>

                    {/* Right: expand icon */}
                    <span
                      className={`shrink-0 w-8 h-8 flex items-center justify-center border rounded-full transition-all duration-300 ${
                        isOpen
                          ? 'border-[#FF5A1F] text-[#FF5A1F] rotate-45'
                          : 'border-white/15 text-white/30 group-hover:border-[#FF5A1F]/50 group-hover:text-[#FF5A1F]'
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  {/* Expandable description */}
                  <div
                    className="overflow-hidden transition-all duration-400 ease-in-out"
                    style={{ maxHeight: isOpen ? '200px' : '0px' }}
                  >
                    <p className="pb-8 pl-12 md:pl-16 text-sm md:text-base leading-relaxed text-white/50 max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          CTA BANNER  (unchanged)
      ────────────────────────────────────── */}
      <section className="bg-[#161616] px-4 pb-20 pt-12 md:px-12 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative border border-white/10 bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.2)] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#FF5A1F] md:flex md:items-center md:justify-between md:p-10">
            <div>
              <p className="mb-2 font-[var(--font-bebas)] text-xs uppercase tracking-[0.4em] text-[#FF5A1F]">
                Ready to move?
              </p>
              <h2 className="font-[var(--font-bebas)] text-3xl text-white md:text-4xl">
                Join an All Levels RAMP Parkour Class
              </h2>
            </div>
            <Link
              href="/parkourclasses"
              className="mt-6 inline-flex border border-white/25 px-6 py-3 font-[var(--font-bebas)] text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black md:mt-0"
            >
              View Classes
            </Link>
          </div>
        </div>
      </section>


      {/* Fade-up keyframe (inline so no globals.css change needed) */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
