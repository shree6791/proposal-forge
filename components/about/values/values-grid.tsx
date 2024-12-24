"use client";

import { motion } from 'framer-motion';
import { ValueCard } from './value-card';
import { values } from '@/lib/data/values-data';

export function ValuesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <ValueCard
          key={value.title}
          {...value}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}