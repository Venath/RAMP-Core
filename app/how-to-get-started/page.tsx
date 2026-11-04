import type { Metadata } from 'next';
import Navbar from '../Components/Navbar';
import HowToGetStarted from '../Components/HowToGetStarted';
import Footer from '../Components/Footer';

export const metadata: Metadata = {
  title: 'How to Get Started | RAMP',
  description:
    'Learn how to start parkour safely with RAMP, from foundations and first movements to joining a class.',
};

export default function HowToGetStartedPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <HowToGetStarted />
      </main>
      <Footer />
    </div>
  );
}
