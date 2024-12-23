"use client";

import { motion } from 'framer-motion';

interface HeroSubtitleProps {
  subtitle: string;
}

export function HeroSubtitle({ subtitle }: HeroSubtitleProps) {
  return (
    <motion.p 
      className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      {subtitle}
    </motion.p>
  );
}