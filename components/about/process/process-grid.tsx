"use client";

import { motion } from 'framer-motion';
import { ProcessCard } from './process-card';
import { processSteps } from '@/lib/data/process-data';

export function ProcessGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {processSteps.map((step, index) => (
        <ProcessCard
          key={step.title}
          {...step}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}