'use client';

import { useEffect, useState, useRef } from 'react';
import YouTube from 'react-youtube';

const YOUTUBE_VIDEO_ID = 'EtrlgIV1Zas';

const socialLinks = [
  { name: 'YouTube', url: 'https://youtube.com/@team_ramp' },
  { name: 'Facebook', url: 'https://www.facebook.com/ramp.parkour' },
  { name: 'Instagram', url: 'https://www.instagram.com/team_ramp/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@team_ramp' },
];

const contactEmail = 'teamramp.contact@gmail.com';

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#161616] py-24 md:py-32 px-4 md:px-12"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5A1F]/40 to-transparent" />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <div className="w-8 h-px bg-[#FF5A1F]" />
          <p className="font-[var(--font-bebas)] text-xs tracking-[0.5em] text-[#FF5A1F] uppercase">
            Watch
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Video embed */}
          <div
            id="ramp-video-player"
            className="relative w-full aspect-video overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.3)] bg-black"
          >
            {isVisible ? (
              <YouTube
                videoId={YOUTUBE_VIDEO_ID}
                iframeClassName="absolute inset-0 w-full h-full"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 1,
                    mute: 1,
                    rel: 0,
                    controls: 1,
                    modestbranding: 1,
                  },
                }}
              />
            ) : (
              /* Placeholder while not yet in view */
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* RAMP description */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-8 h-px bg-[#FF5A1F]" />
              <p className="font-[var(--font-bebas)] text-xs tracking-[0.5em] text-[#FF5A1F] uppercase">
                About RAMP
              </p>
            </div>

            <h2 className="font-[var(--font-bebas)] text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-white mb-2">
              Run. Jump.
            </h2>
            <h2 className="font-[var(--font-bebas)] text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] tracking-tight text-white/40 mb-7">
              Own the Street.
            </h2>

            <div className="w-12 h-[2px] bg-[#FF5A1F] mb-7" />

 
            <p className="text-white/65 text-base leading-relaxed mb-4">
              RAMP is a Sri Lankan parkour team dedicated to growing the sport of parkour in Sri Lanka. Through creative movement, athletic training, and engaging content, we bring together people who share a passion for parkour, movement, and physical expression. From urban environments to purpose-built training spaces, we explore new ways to move, challenge ourselves, and redefine what's possible.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-10">
              Founded by passionate traceurs, RAMP has grown into a community that promotes parkour in Sri Lanka through training sessions, creative projects, and community events. We believe in safe training, discipline, creativity, and connecting people through movement.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`social-${link.name.toLowerCase()}`}
                  className="group relative text-white/50 hover:text-white text-[11px] tracking-[0.25em] uppercase transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/60 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">
                Business &amp; bookings
              </p>
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent('RAMP Inquiry or Collaboration')}`}
                className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-xs uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black md:text-sm"
              >
                Make an Inquiry / Collaboration
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-4 block text-sm text-white/45 transition-colors hover:text-white"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
