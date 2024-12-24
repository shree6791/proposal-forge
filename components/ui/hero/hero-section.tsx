"use client";

import { motion } from 'framer-motion';
import { HeroBackground } from './hero-background';
import { HeroContent } from './hero-content';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export function HeroSection({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center">
      <HeroBackground />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <HeroContent 
            title={title}
            subtitle={subtitle}
            ctaText={ctaText}
            ctaLink={ctaLink}
          />

          {/* Illustration Side */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4">
              <div className="w-full h-full bg-gradient-to-r from-blue-50 to-purple-50 opacity-50 blur-3xl" />
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Add your hero illustration or image here */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}