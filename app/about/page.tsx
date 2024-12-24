"use client";

import { AboutHero } from '@/components/about/hero';
import { Mission } from '@/components/about/mission';
import { Process } from '@/components/about/process';
import { TechStack } from '@/components/about/tech-stack';
import { Achievements } from '@/components/team/achievements';
import { Values } from '@/components/team/values';
import { AboutCTA } from '@/components/about/cta';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <Achievements />
      <Mission />
      <Values />
      <Process />
      <TechStack />
      <AboutCTA />
    </div>
  );
}