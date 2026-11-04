import type { Metadata } from 'next';
import Navbar from '../Components/Navbar';
import WhatIsParkourGuide from '../Components/WhatIsParkourGuide';
import Footer from '../Components/Footer';

export const metadata: Metadata = {
  title: 'What Is Parkour? | RAMP',
  description:
    'Learn what parkour is, where it comes from, and how anyone can start training in Sri Lanka with the RAMP community.',
};

export default function WhatIsParkourPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">
      <Navbar />
      <main>
        <WhatIsParkourGuide />
      </main>
      <Footer />
    </div>
  );
}
