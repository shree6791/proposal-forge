"use client";

import { motion } from 'framer-motion';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient that matches between server and client */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30" />
      
      {/* Animated elements that only appear on client */}
      <motion.div 
        className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-blue-400/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -40, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ filter: 'blur(100px)' }}
      />
      
      <motion.div 
        className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-400/20 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ filter: 'blur(100px)' }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.02]" />
      
      {/* Subtle glass effect */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />
    </div>
  );
}