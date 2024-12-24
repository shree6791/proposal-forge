"use client";

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-purple-50/90" />
      
      <motion.div 
        className="absolute top-1/4 -right-48 w-[800px] h-[800px] bg-blue-400/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ filter: 'blur(120px)' }}
      />
      
      <motion.div 
        className="absolute -bottom-24 -left-48 w-[800px] h-[800px] bg-purple-400/20 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ filter: 'blur(120px)' }}
      />

      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.015]" />
    </div>
  );
}