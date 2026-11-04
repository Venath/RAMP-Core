import Image from 'next/image';
import ParkourGuideVideo from './ParkourGuideVideo';

const skills = [
  { icon: '⌁', title: 'Balance', description: 'Control your body on narrow and unstable surfaces.' },
  { icon: '↘', title: 'Landings & rolls', description: 'Learn to absorb impact safely and smoothly.' },
  { icon: '↗', title: 'Precision jumps', description: 'Land exactly where you intend to.' },
  { icon: '↑', title: 'Hanging & climbing', description: 'Use your own strength to move up and over.' },
  { icon: '⌒', title: 'Vaults', description: 'Pass over obstacles with control.' },
  { icon: '▥', title: 'Wall runs', description: 'Use momentum to move up vertical surfaces.' },
];

const pillars = [
  {
    number: '01',
    title: 'Efficient Movement',
    description: 'Move with control, purpose and minimal waste, built on strong fundamentals.',
  },
  {
    number: '02',
    title: 'Self-Improvement',
    description:
      'The only competition is who you were yesterday. Patience, discipline and consistency matter more than any single big move.',
  },
  {
    number: '03',
    title: 'Community',
    description:
      'Training is collaborative. Traceurs share ideas, encourage each other and respect the people and places around them.',
  },
];

const myths = [
  {
    myth: '“It’s extremely dangerous.”',
    truth:
      'Parkour looks risky on video, but real training is slow, progressive and controlled. You master the basics, build strength and learn to land safely long before attempting anything big. The goal is longevity, not recklessness.',
  },
  {
    myth: '“You need to be a gymnast or super fit.”',
    truth: 'You don’t. You start where you are. Parkour builds fitness; it doesn’t require it.',
  },
  {
    myth: '“It’s only for young people.”',
    truth: 'Kids, teens and adults all train. Everyone works at their own level and pace.',
  },
  {
    myth: '“It’s just flips and tricks.”',
    truth: 'Flips belong to other disciplines. Parkour is about efficient movement, not performance.',
  },
];

const benefits = [
  { title: 'Strength & mobility', description: 'Build a strong, functional body.' },
  { title: 'Confidence', description: 'Learn to trust your body and manage fear.' },
  { title: 'Problem-solving', description: 'Read each obstacle and find a way through.' },
  { title: 'Mental resilience', description: 'Make progress through patience and repetition.' },
  { title: 'Community', description: 'Help others and keep improving together.' },
  { title: 'Freedom', description: 'Turn any space into a place to train.' },
];

export default function WhatIsParkourGuide() {
  return (
    <>
      <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-[#080808] px-4 pb-16 pt-32 md:min-h-[82svh] md:px-12 md:pb-24">
        <Image
          src="/Images/WhatIsParkour2.png"
          alt="A parkour athlete moving through an urban environment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
        <div className="relative mx-auto w-full max-w-6xl">
          <p className="mb-5 font-[var(--font-bebas)] text-xs uppercase tracking-[0.5em] text-white/60">
            RAMP · The art of movement
          </p>
          <h1 className="max-w-4xl font-[var(--font-bebas)] text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] tracking-tight text-white">
            What Is
            <br />
            <span className="text-white/55">Parkour?</span>
          </h1>
          <p className="mt-7 max-w-xl text-base text-white/65 md:text-xl">
            Every wall is a path. Every gap is a choice.
          </p>
          <a
            href="#parkour-intro"
            className="mt-10 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/55 transition-colors hover:text-white"
          >
            Explore the guide
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section id="parkour-intro" className="relative overflow-hidden bg-[#161616] px-4 py-20 md:px-12 md:py-28">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#FF5A1F]/40 to-transparent" />
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <div>
              <SectionEyebrow>Start here</SectionEyebrow>
              <h2 className="mb-7 font-[var(--font-bebas)] text-[clamp(3rem,7vw,5rem)] leading-[0.95] text-white">
                Parkour: Moving Through Your World
              </h2>
              <p className="mb-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Parkour is the art of moving efficiently and creatively through any environment,
                using only your body. Walls, rails, stairs, gaps: to a traceur (a parkour
                practitioner), these aren&apos;t obstacles. They&apos;re a path.
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
                There are no goals to score, no opponents to beat, and no equipment to buy.
                It&apos;s you, your body, and the space around you.
              </p>
            </div>

            <blockquote className="relative flex min-h-72 flex-col justify-center border border-white/10 bg-white/[0.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.2)] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#FF5A1F] md:p-10">
              <p className="mb-5 font-[var(--font-bebas)] text-xs uppercase tracking-[0.4em] text-[#FF5A1F]">
                The idea in one line
              </p>
              <p className="font-[var(--font-bebas)] text-3xl leading-tight text-white md:text-4xl">
                Get from point A to point B using the most efficient, controlled and creative
                movement you can.
              </p>
            </blockquote>
          </div>

          <div className="mt-12">
            <ParkourGuideVideo />
          </div>

          <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:pt-14">
            <div>
              <SectionEyebrow>Origins</SectionEyebrow>
              <h2 className="font-[var(--font-bebas)] text-4xl text-white md:text-5xl">
                Where It Comes From
              </h2>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-10">
              <p className="text-sm leading-relaxed text-white/65 md:text-base">
                Parkour was developed in France in the late 1980s and 1990s. It grew out of{' '}
                <em>méthode naturelle</em>, a training method created by Georges Hébert, and was
                shaped by David Belle and a group of friends in the Paris suburbs. Their guiding
                phrase, <em>“être fort pour être utile”</em> (“be strong to be useful”), still sums
                up the spirit: train your body and mind so you can overcome whatever is in front of
                you, and do it with purpose.
              </p>
              <p className="mt-6 border-l border-[#FF5A1F] pl-5 font-[var(--font-bebas)] text-xl tracking-wide text-white md:text-2xl">
                From France to nearly every country in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-4 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <SectionEyebrow>Build the fundamentals</SectionEyebrow>
            <h2 className="font-[var(--font-bebas)] text-4xl text-white md:text-6xl">
              What You Actually Do
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
              Parkour is built on core skills. You develop them step by step; nobody starts with the
              big movements.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {skills.map((skill) => (
              <article
                key={skill.title}
                className="border border-white/15 bg-white/[0.02] p-5 transition-colors hover:border-white/30 hover:bg-white/[0.04] md:p-7"
              >
                <span className="mb-5 block font-[var(--font-bebas)] text-3xl text-white/60" aria-hidden="true">
                  {skill.icon}
                </span>
                <h3 className="mb-2 font-[var(--font-bebas)] text-xl text-white md:text-2xl">
                  {skill.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/70 md:text-sm">{skill.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#161616] px-4 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
          <article>
            <SectionEyebrow>Read the environment</SectionEyebrow>
            <h2 className="mb-5 font-[var(--font-bebas)] text-4xl text-white md:text-5xl">
              Overcome Obstacles
            </h2>
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              In a session you work on movement challenges: how do I get over this, up that, across
              there? Every space becomes a puzzle with more than one answer. Over time you start to
              see your city differently, with every wall, step and rail turning into a possibility.
            </p>
          </article>
          <article className="border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <SectionEyebrow>Find your flow</SectionEyebrow>
            <h2 className="mb-5 font-[var(--font-bebas)] text-4xl text-white md:text-5xl">
              Move on Your Own Terms
            </h2>
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              Parkour has no fixed set of moves and no judges, so every traceur develops their own
              style. A smooth run may look spontaneous, but each line is usually planned, broken
              into individual movements, practiced separately, then linked into one flow.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#111111] px-4 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>What guides the practice</SectionEyebrow>
          <h2 className="mb-10 font-[var(--font-bebas)] text-4xl text-white md:text-6xl">
            The 3 Key Pillars
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="relative min-h-56 overflow-hidden border border-white/15 bg-white/[0.02] p-7 md:p-9"
              >
                {/* <span className="absolute right-4 top-0 font-[var(--font-bebas)] text-8xl leading-none text-white/[0.04]" aria-hidden="true">
                  {pillar.number}
                </span> */}
                <p className="mb-8 font-[var(--font-bebas)] text-xs tracking-[0.3em] text-white/50">
                  {pillar.number}
                </p>
                <h3 className="mb-3 font-[var(--font-bebas)] text-2xl text-white md:text-3xl">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#161616] px-4 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionEyebrow>Let’s clear a few things up</SectionEyebrow>
          <h2 className="mb-8 font-[var(--font-bebas)] text-4xl text-white md:text-6xl">
            Common Myths
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {myths.map((item, index) => (
              <details key={item.myth} className="group py-5 md:py-6" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-[var(--font-bebas)] text-xl text-white marker:hidden md:text-2xl">
                  {item.myth}
                  <svg
                    className="h-4 w-4 shrink-0 text-white/45 transition-transform group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="max-w-3xl pt-4 text-sm leading-relaxed text-white/75">{item.truth}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-4 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionEyebrow>More than movement</SectionEyebrow>
          <h2 className="mb-10 font-[var(--font-bebas)] text-4xl text-white md:text-6xl">
            Why Train Parkour
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 md:gap-x-10 md:gap-y-10">
            {benefits.map((benefit, index) => (
              <article key={benefit.title} className="border-t border-white/20 pt-4">
                <p className="mb-3 font-[var(--font-bebas)] text-sm tracking-[0.25em] text-white/45">
                  0{index + 1}
                </p>
                <h3 className="mb-2 font-[var(--font-bebas)] text-xl text-white md:text-2xl">
                  {benefit.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/70 md:text-sm">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#161616] px-4 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
          <article>
            <SectionEyebrow>A way of thinking</SectionEyebrow>
            <h2 className="mb-5 font-[var(--font-bebas)] text-4xl text-white md:text-5xl">
              The Philosophy
            </h2>
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              Parkour is not only physical. It teaches discipline, respect for yourself, for others
              and for the spaces you train in, and the habit of looking at challenges differently.
            </p>
          </article>
          <article id="who-is-parkour-for" className="border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <SectionEyebrow>All levels, all backgrounds</SectionEyebrow>
            <h2 className="mb-5 font-[var(--font-bebas)] text-4xl text-white md:text-5xl">
              Who Is Parkour For?
            </h2>
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              <strong className="font-medium text-white">Everyone.</strong> You don&apos;t need
              experience, a specific body type or special gear. If you&apos;re curious, that&apos;s
              enough. Wear comfortable clothes and shoes, and bring a willingness to learn.
            </p>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111111] px-4 py-20 md:px-12 md:py-28">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
          <Image
            src="/Images/Workshop.jpg"
            alt=""
            fill
            sizes="50vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <SectionEyebrow>Our home</SectionEyebrow>
            <h2 className="mb-5 font-[var(--font-bebas)] text-4xl text-white md:text-6xl">
              Parkour in Sri Lanka
            </h2>
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              Parkour is still young in Sri Lanka, and that is exactly what makes this moment
              exciting. We have no dedicated parkour parks yet, but we have city streets, coastal
              areas, historic spaces and a growing community of people ready to move. Everyone who
              trains today is helping build the scene.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="bg-white px-4 py-16 text-black md:px-12 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 font-[var(--font-bebas)] text-xs uppercase tracking-[0.4em] text-black/45">
              Take the first step
            </p>
            <h2 className="font-[var(--font-bebas)] text-4xl leading-none md:text-6xl">
              Ready to Take Your First Step?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-black/60 md:text-base">
              Join a RAMP session, train with the community, or reach out to host a workshop.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/#parkour-classes"
              className="border border-black bg-black px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-black"
            >
              Join the Community
            </a>
            <a
              href="/#about"
              className="border border-black/20 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-black transition-colors hover:border-black"
            >
              Contact Us
            </a>
            <a
              href="https://www.instagram.com/team_ramp/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/20 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-black transition-colors hover:border-black"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section> */}

      <section className="bg-[#1a1a1a] px-4 py-10 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-[var(--font-bebas)] text-2xl text-white md:text-3xl">
              Be part of the RAMP community.
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-white/65 md:text-sm">
              Get updates on sessions, new videos and parkour events in Sri Lanka.
            </p>
          </div>
          <div className="flex w-full max-w-lg flex-col gap-2 sm:flex-row sm:flex-wrap">
            <p id="newsletter-note" className="text-[10px] text-white/35 sm:sr-only">
              Newsletter sign-ups are coming soon.
            </p>
            <a
              href={process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center border border-[#25D366]/50 bg-[#25D366] px-5 py-3 text-[10px] uppercase tracking-[0.25em] text-black transition-colors hover:bg-[#3ee67c]"
            >
              Join our WhatsApp Community
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-[var(--font-bebas)] text-[10px] uppercase tracking-[0.45em] text-white/55">
      {children}
    </p>
  );
}
