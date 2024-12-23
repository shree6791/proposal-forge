"use client";

import { motion } from 'framer-motion';

interface HeroTitleProps {
  title: string;
}

export function HeroTitle({ title }: HeroTitleProps) {
  return (
    <motion.h1 
      className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
        {title}
      </span>
    </motion.h1>
  );
}