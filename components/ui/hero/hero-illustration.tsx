"use client";

import { motion } from 'framer-motion';

export function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative lg:h-[600px] flex items-center justify-center"
    >
      <div className="relative w-full max-w-[500px] aspect-square">
        {/* Main Document */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-6 transform -rotate-6"
        >
          {/* Document Content */}
          <div className="space-y-4">
            <div className="h-8 w-3/4 bg-gray-100 rounded-lg" />
            <div className="h-4 w-full bg-gray-100 rounded" />
            <div className="h-4 w-5/6 bg-gray-100 rounded" />
            <div className="h-4 w-4/6 bg-gray-100 rounded" />
          </div>
        </motion.div>

        {/* AI Processing Effect */}
        <motion.div
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl"
        />

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
          className="absolute -top-8 -right-8 w-20 h-20 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold"
        >
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
          className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-500 rounded-full shadow-lg flex items-center justify-center text-white text-xl font-bold"
        >
          ⚡
        </motion.div>
      </div>
    </motion.div>
  );
}