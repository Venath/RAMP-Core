import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/team_ramp/' },
  { name: 'Facebook', href: 'https://www.facebook.com/ramp.parkour' },
  { name: 'YouTube', href: 'https://youtube.com/@team_ramp' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@team_ramp' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] px-6 py-1  text-center">
      <Link href="/" aria-label="RAMP home" className="inline-block">
        <Image
          src="/Images/LOGO.png"
          alt="RAMP Logo"
          width={150}
          height={150}
          className="object-contain opacity-100 transition-opacity hover:opacity-100"
        />
      </Link>

      <div className="mx-auto mt-8 max-w-xl">
        <p className="mb-5 font-[var(--font-bebas)] text-xs uppercase tracking-[0.35em] text-white/40">
          Brands
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <Image
            src="/Images/Brands/YetiBrand.png"
            alt="Yeti"
            width={116}
            height={48}
            className="h-20 w-auto max-w-[120px] object-contain opacity-80"
          />
          <Image
            src="/Images/Brands/UnderamourBrand.png"
            alt="Under Armour"
            width={116}
            height={48}
            className="h-10 w-auto max-w-[120px] object-contain opacity-80"
          />
          <Image
            src="/Images/Brands/Myrus.png"
            alt="Under Armour"
            width={116}
            height={48}
            className="h-15 w-auto max-w-[120px] object-contain opacity-80"
          />
        </div>
      </div>

      <nav aria-label="Social media" className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-[#FF5A1F]"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <p className="mt-8 font-[var(--font-bebas)] text-xs uppercase tracking-[0.35em] text-white/25">
        © {new Date().getFullYear()} RAMP Parkour · All rights reserved
      </p>
    </footer>
  );
}
