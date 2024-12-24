"use client";

import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

export function ProcessHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6"
      >
        <Settings className="w-4 h-4" />
        Our Process
      </motion.div>

      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        How We Work
      </motion.h2>
      
      <motion.p 
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        A streamlined approach combining cutting-edge technology with user-friendly design
      </motion.p>
    </motion.div>
  );
}