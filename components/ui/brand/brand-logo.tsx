"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export function BrandLogo({ variant = 'dark', showTagline = true }: BrandLogoProps) {
  // Consistent gradient for both light and dark variants
  const logoGradient = variant === 'light'
    ? 'from-white to-blue-200'
    : 'from-blue-500 to-purple-500';

  const taglineColor = variant === 'light' ? 'text-gray-200' : 'text-gray-500';

  return (
    <Link href="/">
      <motion.div 
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
      >
        {/* Stylized PF Logo */}
        <div className="relative">
          <div className={`
            w-10 h-10 rounded-xl 
            bg-gradient-to-br ${logoGradient}
            flex items-center justify-center 
            overflow-hidden shadow-lg
            font-bold text-xl tracking-tighter
            ${variant === 'light' ? 'text-white' : 'text-white'}
          `}>
            <span className="relative z-10 font-['Geist_Sans']" style={{ letterSpacing: '-0.05em' }}>
              PF
            </span>
            {/* Decorative slash with adjusted opacity */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`
                w-full h-0.5 transform rotate-45
                ${variant === 'light' ? 'bg-white/30' : 'bg-white/30'}
              `} />
            </div>
          </div>
        </div>

        {/* Tagline */}
        {showTagline && (
          <span className={`text-sm font-medium ${taglineColor}`}>
            AI Proposal Platform
          </span>
        )}
      </motion.div>
    </Link>
  );
}