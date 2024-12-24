"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroCtaProps {
  text: string;
  link: string;
}

export function HeroCta({ text, link }: HeroCtaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col items-start gap-6"
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link href={link}>
          <motion.button 
            className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap className="w-5 h-5" />
            <span className="relative z-10">{text}</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
          </motion.button>
        </Link>
        <Link href="/contact">
          <motion.button
            className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-medium hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Demo
          </motion.button>
        </Link>
      </div>

      {/* Social Proof */}
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">T1</div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">T2</div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-red-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">T3</div>
        </div>
        <motion.p 
          className="text-sm text-gray-600 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Trusted by 10,000+ companies
        </motion.p>
        <span className="text-gray-300">|</span>
        <motion.p
          className="text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Enterprise-ready
        </motion.p>
      </div>
    </motion.div>
  );
}