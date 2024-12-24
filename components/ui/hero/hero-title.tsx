"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface HeroTitleProps {
  title: string;
}

export function HeroTitle({ title }: HeroTitleProps) {
  return (
    <div className="relative">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          AI-Powered Proposal Platform
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            ProposalForge
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-gray-700 font-medium max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Create winning B2B proposals
          <span className="text-blue-600"> in minutes</span>
        </motion.p>
      </motion.div>
    </div>
  );
}