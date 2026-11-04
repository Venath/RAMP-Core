import type { Metadata } from 'next';
import Navbar from '../Components/Navbar';
import ParkourClasses from '../Components/ParkourClasses';

export const metadata: Metadata = {
  title: 'Parkour Classes | RAMP',
  description: 'Explore and join parkour classes with the RAMP community in Sri Lanka.',
};

export default function ParkourClassesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <ParkourClasses />
      </main>
    </div>
  );
}
