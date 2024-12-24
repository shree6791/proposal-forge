"use client";

import { ValuesHeader } from './values/values-header';
import { ValuesGrid } from './values/values-grid';
import { AnimatedBackground } from '@/components/ui/animated-background';

export function AboutValues() {
  return (
    <section className="py-32 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative">
        <ValuesHeader />
        <ValuesGrid />
      </div>
    </section>
  );
}