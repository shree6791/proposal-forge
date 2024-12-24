"use client";

import { motion } from 'framer-motion';

export function ValuesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Our Values
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        The principles that guide our mission to revolutionize proposal creation
      </motion.p>
    </motion.div>
  );
}