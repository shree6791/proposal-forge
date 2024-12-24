"use client";

import { AboutHero } from '@/components/about/hero';
import { AboutMission } from '@/components/about/mission';
import { AboutValues } from '@/components/about/values';
import { AboutProcess } from '@/components/about/process';
import { AboutMetrics } from '@/components/about/metrics';
import { AboutCTA } from '@/components/about/cta';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutMetrics />
      <AboutMission />
      <AboutValues />
      <AboutProcess />
      <AboutCTA />
    </div>
  );
}