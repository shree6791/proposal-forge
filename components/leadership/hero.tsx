"use client";

import { motion } from 'framer-motion';

export function LeadershipHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Meet Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Leadership Team
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Visionaries and experts committed to revolutionizing the proposal creation process through innovation and excellence.
        </p>
      </motion.div>
    </section>
  );
}