"use client";

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { AnimatedBackground } from '@/components/ui/animated-background';

export function TeamHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm rounded-full text-blue-600 text-sm font-medium mb-8 border border-blue-100/50 shadow-lg"
          >
            <Users className="w-4 h-4 animate-pulse" />
            Meet Our Team
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            The{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient bg-[length:200%_auto]">
              Innovators
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            A team of passionate experts committed to revolutionizing proposal creation through 
            innovation and excellence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}