"use client";

import { motion } from 'framer-motion';
import { HeroBackground } from './hero/hero-background';
import { HeroBadge } from './hero/hero-badge';
import { HeroHeading } from './hero/hero-heading';

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-16 pb-32 overflow-hidden">
      <HeroBackground />

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-[1200px] mx-auto text-center"
        >
          <HeroBadge />
          <HeroHeading />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            We're on a mission to transform how businesses create and win proposals through 
            AI-powered innovation and deep industry expertise.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}