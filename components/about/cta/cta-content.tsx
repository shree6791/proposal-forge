"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function CTAContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center text-white relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/20"
      >
        <Sparkles className="w-4 h-4" />
        Start Your Journey
      </motion.div>

      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Ready to Transform Your{" "}
        <span className="bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text">
          Proposal Process?
        </span>
      </motion.h2>
      
      <motion.p 
        className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
      >
        Join thousands of businesses creating winning proposals with ProposalForge's AI-powered platform.
      </motion.p>
    </motion.div>
  );
}