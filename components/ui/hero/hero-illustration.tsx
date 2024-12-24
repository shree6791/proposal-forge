"use client";

import { motion } from 'framer-motion';
import { FileText, Sparkles, Zap } from 'lucide-react';

export function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square">
      {/* Main Document */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-8 transform -rotate-6 overflow-hidden"
      >
        {/* Document Content */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-8 w-3/4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg" />
          <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse delay-75" />
          <div className="h-4 w-4/6 bg-gray-100 rounded animate-pulse delay-100" />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
          className="absolute top-4 right-4 p-4 bg-blue-500 rounded-xl shadow-lg text-white font-bold flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          AI
        </motion.div>

        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [5, -5, 5],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-4 left-4 p-4 bg-purple-500 rounded-full shadow-lg text-white font-bold flex items-center gap-2"
        >
          <Zap className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* AI Processing Effect */}
      <motion.div
        animate={{
          opacity: [0, 0.5, 0],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl"
      />

      {/* Decorative Elements */}
      <motion.div
        className="absolute -top-12 -right-12 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
}