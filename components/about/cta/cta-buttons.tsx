"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

export function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link href="/credentials">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2"
        >
          <Zap className="w-5 h-5" />
          Get Started Now
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </Link>
      
      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors inline-flex items-center gap-2 border border-white/20 backdrop-blur-sm"
        >
          Contact Sales
        </motion.button>
      </Link>
    </div>
  );
}