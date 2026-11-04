import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export const metadata: Metadata = {
  title: 'Who We Are | RAMP',
  description: 'Meet RAMP, the Sri Lankan parkour brand founded by Venath Randima.',
};

const services = [
  {
    number: '01',
    title: 'Parkour & Movement',
    text: 'Athletic movement, technical training and street parkour expressed through disciplined performance.',
  },
  {
    number: '02',
    title: 'Challenges & Creative Projects',
    text: 'Original movement challenges and collaborative ideas built around curiosity, creativity and progress.',
  },
  {
    number: '03',
    title: 'Travel & Urban Exploration',
    text: 'Discovering new environments and finding meaningful movement opportunities across Sri Lanka.',
  },
  {
    number: '04',
    title: 'Content Creation',
    text: 'Cinematic videos, tutorials and stories that capture parkour as a creative art form.',
  },
];

const values = [
  ['Technique', 'Building strong movement fundamentals.'],
  ['Creativity', 'Finding different ways to approach movement.'],
  ['Control', 'Prioritising awareness, precision and safe execution.'],
  ['Teamwork', 'Sharing knowledge and creating together.'],
  ['Consistency', 'Staying committed to training and creating.'],
];

const platforms = [
  ['Facebook', 'Reels, challenges and short-form parkour videos.'],
  ['YouTube', 'Longer videos, projects, tutorials and behind-the-scenes content.'],
  ['Instagram', 'Movement clips, team updates and visual storytelling.'],
  ['TikTok', 'Short-form creative movement content.'],
];

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#161616] text-white">
      <Navbar />

      <main>
        <section className="relative min-h-[680px] overflow-hidden bg-[#080808] pt-32">
          <Image
            src="/Images/WhoWeAre/DJI_20260222184035_0258_D.JPG"
            alt="RAMP parkour movement"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/20 to-[#080808]/50" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

          <div className="relative mx-auto flex min-h-[550px] max-w-7xl items-end px-6 pb-20 md:px-12 md:pb-24">
            <div className="max-w-4xl">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-[#FF5A1F]">
                Who we are
              </p>
              <h1 className="font-[var(--font-bebas)] text-[clamp(4rem,12vw,9rem)] leading-[0.78] tracking-tight">
                More Than Movement.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                RAMP is a Sri Lankan parkour brand built around movement, creativity and
                storytelling. We create parkour content, explore new environments and bring
                movement to life through athletic performance and cinematic visuals.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#161616] px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.45em] text-[#FF5A1F]">About RAMP</p>
              <div className="mt-7 aspect-video w-full overflow-hidden border border-white/10 bg-black">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/n5E5Sr87_nk?autoplay=1&mute=1&rel=0"
                  title="RAMP video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
            <div>
              <p className="text-xl leading-relaxed text-white md:text-3xl md:leading-relaxed">
                RAMP is a Sri Lankan parkour brand focused on creating movement-driven content
                that combines athletic performance, creativity and visual storytelling.
              </p>
              <div className="mt-10 grid gap-7 border-t border-white/10 pt-10 text-sm leading-7 text-white/55 md:grid-cols-2">
                <p>
                  We produce parkour challenges, tutorials, cinematic movement videos and
                  travel-based projects that showcase the different ways parkour can be explored
                  and expressed.
                </p>
                <p>
                  From discovering new locations to developing creative movement concepts, we use
                  parkour as a platform for expression, exploration and inspiration. We aim to
                  introduce more people to parkour and showcase the potential of Sri Lankan
                  movement culture.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111111] px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex items-end justify-between border-b border-white/10 pb-7">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.45em] text-[#FF5A1F]">What we do</p>
                <h2 className="font-[var(--font-bebas)] text-5xl md:text-7xl">Built to Move</h2>
              </div>
            </div>
            <div className="grid gap-px overflow-hidden bg-white/10 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group relative overflow-hidden bg-[#161616] p-8 transition-colors duration-500 hover:bg-[#1d1d1d] md:p-10"
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#FF5A1F] transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between">
                  </div>
                  <h3 className="mt-9 font-[var(--font-bebas)] text-3xl transition-transform duration-500 group-hover:-translate-y-1 md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-md leading-7 text-white/55 transition-colors duration-500 group-hover:text-white/80">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#161616] px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-16 md:items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#080808]">
              <Image
                src="/Images/Venath/1001021432.jpg"
                alt="Venath Randima, founder of RAMP"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-6 pb-7 pt-20">
                <p className="font-[var(--font-bebas)] text-4xl">Venath Randima</p>
                <p className="text-xs uppercase tracking-[0.35em] text-[#FF5A1F]">Founder of RAMP</p>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[#FF5A1F]">Meet the founder</p>
              <h2 className="font-[var(--font-bebas)] text-5xl leading-none md:text-7xl">Venath Randima</h2>
              <p className="mt-7 border-l-2 border-[#FF5A1F] pl-5 text-lg leading-8 text-white/75">
                Founder, parkour athlete and content creator behind RAMP.
              </p>
              <div className="mt-8 space-y-5 leading-7 text-white/55">
                <p>
                  Venath Randima is the founder of RAMP, a Sri Lankan parkour brand established
                  in 2020.
                </p>
                <p>
                  With a passion for parkour, movement and creative storytelling, he started RAMP
                  to create a platform that brings together athletic performance, content creation
                  and the growing parkour scene in Sri Lanka.
                </p>
                <p>
                  Beyond training and performing, Venath leads RAMP&apos;s creative direction,
                  content production and projects, working to introduce parkour to wider audiences
                  and create more opportunities for the sport in Sri Lanka.
                </p>
                <p>
                  His vision is to help Sri Lankan parkour grow while building RAMP into a
                  recognised movement and content brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111111] px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.45em] text-[#FF5A1F]">How we see parkour</p>
            <div className="mt-9 grid gap-12 md:grid-cols-[1fr_1.3fr]">
              <p className="max-w-md text-xl leading-relaxed text-white/80 md:text-2xl">
                Parkour is more than performing jumps and tricks. It&apos;s about understanding
                movement, developing body control, adapting to your surroundings and finding
                creative ways to overcome obstacles.
              </p>
              <div className="divide-y divide-white/10 border-y border-white/10">
                {values.map(([title, text]) => (
                  <div key={title} className="grid grid-cols-[120px_1fr] gap-5 py-5 md:grid-cols-[160px_1fr]">
                    <h3 className="font-[var(--font-bebas)] text-xl text-[#FF5A1F] md:text-2xl">{title}</h3>
                    <p className="text-sm leading-6 text-white/55">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#161616] px-6 py-24 text-center md:px-12 md:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.45em] text-[#FF5A1F]">What drives us</p>
            <h2 className="mt-7 font-[var(--font-bebas)] text-5xl leading-[0.95] md:text-8xl">
              Inspiring Movement.<br />Creating Possibilities.
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/55 md:text-lg">
              Our mission is to inspire more people to move, push creative boundaries and showcase
              the potential of Sri Lankan parkour. Through our training, projects and content, we
              want to make parkour more visible and accessible while encouraging the next generation
              to explore what they can do.
            </p>
          </div>
        </section>

        <section className="grid bg-[#111111] md:grid-cols-2">
          <div className="relative min-h-[420px] md:min-h-[620px]">
            <Image
              src="/Images/Oliver.jpeg"
              alt="Parkour in Sri Lanka"
              fill
              sizes="50vw"
              className="object-cover grayscale-[15%]"
            />
          </div>
          <div className="flex items-center px-6 py-20 md:px-16">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-[#FF5A1F]">Sri Lankan parkour</p>
              <h2 className="mt-5 font-[var(--font-bebas)] text-5xl leading-[0.95] md:text-7xl">
                Representing Sri Lankan Parkour
              </h2>
              <p className="mt-7 leading-8 text-white/55">
                RAMP is part of the growing parkour scene in Sri Lanka. Through our content and
                projects, we want to bring more visibility to local athletes, introduce parkour to
                new audiences and show the creative potential of movement in our country.
              </p>
              <p className="mt-5 leading-8 text-white/55">
                Our goal is to create opportunities for Sri Lankan parkour to reach beyond local
                boundaries.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#161616] px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.45em] text-[#FF5A1F]">Follow what we create</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {platforms.map(([platform, text]) => (
                <div key={platform} className="border border-white/10 p-7 transition-colors hover:border-[#FF5A1F]/60">
                  <h3 className="font-[var(--font-bebas)] text-3xl">{platform}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#111111] px-6 py-24 text-center md:px-12 md:py-32">
          <p className="text-xs uppercase tracking-[0.45em] text-[#FF5A1F]">Join the journey</p>
          <h2 className="mt-6 font-[var(--font-bebas)] text-5xl md:text-8xl">Want to See What We Do?</h2>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-white/55">
            Follow our journey, explore our videos and get to know RAMP.
          </p>
          <Link
            href="/#who-we-are"
            className="mt-9 inline-flex rounded-full bg-[#FF5A1F] px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#ff713f]"
          >
            Follow RAMP
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
