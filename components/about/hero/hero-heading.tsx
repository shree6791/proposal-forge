"use client";

import { motion } from 'framer-motion';

export function HeroHeading() {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold mb-8 tracking-tight leading-[1.1] mx-auto max-w-[1000px]"
    >
      Revolutionizing{" "}
      <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient bg-[length:200%_auto]">
        Proposal Creation
      </span>
    </motion.h1>
  );
}