"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50/80 backdrop-blur-sm rounded-full text-blue-600 text-base font-medium mb-10 border border-blue-100/50 shadow-lg"
    >
      <Sparkles className="w-5 h-5 animate-pulse" />
      Our Story
    </motion.div>
  );
}