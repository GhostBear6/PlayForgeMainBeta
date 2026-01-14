import React, { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { HowItWorks } from '@/app/components/HowItWorks';
import { GameLibrary } from '@/app/components/GameLibrary';
import { PlayerTeaser } from '@/app/components/PlayerTeaser';
import { ForDevelopers } from '@/app/components/ForDevelopers';
import { DevInsights } from '@/app/components/DevInsights';
import { FeaturedDevelopers } from '@/app/components/FeaturedDevelopers';
import { MerchantDashboard } from '@/app/components/MerchantDashboard';
import { PlatformsRoadmap } from '@/app/components/PlatformsRoadmap';
import { Pricing } from '@/app/components/Pricing';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen overflow-x-hidden">
      <Navigation />
      <main>
        <Hero scrollY={scrollY} />
        <HowItWorks scrollY={scrollY} />
        <GameLibrary scrollY={scrollY} />
        <PlayerTeaser scrollY={scrollY} />
        <ForDevelopers scrollY={scrollY} />
        <DevInsights scrollY={scrollY} />
        <FeaturedDevelopers scrollY={scrollY} />
        <MerchantDashboard scrollY={scrollY} />
        <PlatformsRoadmap scrollY={scrollY} />
        <Pricing scrollY={scrollY} />
        <Footer />
      </main>
    </div>
  );
}
