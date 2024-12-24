"use client";

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export function TeamHero() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-purple-50/90" />
        <motion.div 
          className="absolute top-1/4 -right-48 w-[500px] h-[500px] bg-blue-400/20 rounded-full filter blur-[100px]"
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
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.015]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-8"
          >
            <Users className="w-4 h-4" />
            Our Team
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Meet the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Innovators
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            A team of passionate experts committed to revolutionizing proposal creation through 
            innovation and excellence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}