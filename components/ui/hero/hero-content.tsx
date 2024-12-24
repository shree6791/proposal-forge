"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { HeroCta } from './hero-cta';

interface HeroContentProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export function HeroContent({ title, subtitle, ctaText, ctaLink }: HeroContentProps) {
  return (
    <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto lg:mx-0"
      >
        {/* Brand Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          AI-Powered Proposal Platform
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Brand Name */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            ProposalForge
          </motion.h1>

          {/* Primary Headline */}
          <motion.div 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <HeroCta text={ctaText} link={ctaLink} />
        </motion.div>
      </motion.div>
    </div>
  );
}