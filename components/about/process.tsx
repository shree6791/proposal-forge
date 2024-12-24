"use client";

import { ProcessHeader } from './process/process-header';
import { ProcessGrid } from './process/process-grid';
import { AnimatedBackground } from '@/components/ui/animated-background';

export function AboutProcess() {
  return (
    <section className="py-32 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative">
        <ProcessHeader />
        <ProcessGrid />
      </div>
    </section>
  );
}