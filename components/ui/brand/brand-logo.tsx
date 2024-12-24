"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  showBrandName?: boolean;
}

export function BrandLogo({ variant = 'dark', showBrandName = false }: BrandLogoProps) {
  const glowColor = variant === 'light' ? 'shadow-white/20' : 'shadow-blue-500/20';
  const borderColor = variant === 'light' ? 'border-white/10' : 'border-gray-100';

  return (
    <Link href="/">
      <motion.div 
        className="flex items-center gap-3"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Logo Mark - Increased size */}
        <motion.div 
          className={`
            relative w-12 h-12 rounded-xl overflow-hidden
            bg-gradient-to-br from-blue-600 to-purple-600
            shadow-lg ${glowColor} border ${borderColor}
            flex items-center justify-center
          `}
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          {/* Enhanced animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-0"
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Logo text - Increased size */}
          <span className="relative z-10 font-bold text-2xl text-white tracking-tight font-['Geist_Sans']">
            PF
          </span>

          {/* Enhanced decorative slash */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: [45, 45],
              scale: [1, 1.1, 1],
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="w-full h-0.5 bg-white/30 transform" />
          </motion.div>
        </motion.div>

        {/* Brand Name - Only shown when explicitly requested */}
        {showBrandName && (
          <motion.span 
            className={`text-2xl font-bold ${variant === 'light' ? 'text-white' : 'text-gray-900'} tracking-tight`}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundImage: variant === 'light' 
                ? 'linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0.8), rgba(255,255,255,1))'
                : 'linear-gradient(to right, #3B82F6, #8B5CF6, #3B82F6)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ProposalForge
          </motion.span>
        )}
      </motion.div>
    </Link>
  );
}