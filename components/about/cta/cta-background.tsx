"use client";

import { motion } from 'framer-motion';

export function CTABackground() {
  return (
    <div className="absolute inset-0">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600" />
      
      {/* Animated shapes */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full mix-blend-overlay filter blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full mix-blend-overlay filter blur-[80px]"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
    </div>
  );
}