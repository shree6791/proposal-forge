"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { fadeIn } from '@/lib/animations/variants';

export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
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

      <div className="container mx-auto px-4 py-32">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm rounded-full text-blue-600 text-sm font-medium mb-8 border border-blue-100/50 shadow-lg"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            Our Story
          </motion.div>

          <motion.h1 
            variants={fadeIn}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            Revolutionizing{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient bg-[length:200%_auto]">
              Proposal Creation
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            We're on a mission to transform how businesses create and win proposals through 
            AI-powered innovation and deep industry expertise.
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-1"
            >
              <motion.div
                animate={{ height: ["20%", "80%", "20%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 bg-gray-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}