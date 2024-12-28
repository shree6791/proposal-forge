"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Zap } from 'lucide-react';
import { useSupabase } from '@/components/providers/supabase-provider';

interface HeroCtaProps {
  text: string;
  link: string;
}

export function HeroCta({ text, link }: HeroCtaProps) {
  const router = useRouter();
  const { user } = useSupabase();

  const handleClick = () => {
    // If user is signed in, go to input proposal page
    // Otherwise, go to credentials page
    router.push(user ? '/inputproposal' : '/credentials');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Zap className="w-5 h-5 animate-pulse" />
        <span className="relative z-10">{text}</span>
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        
        {/* Enhanced hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-[1.02] group-hover:scale-100" />
      </motion.button>

      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-4 bg-white/10 backdrop-blur-sm text-gray-900 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-lg hover:shadow-xl"
        >
          Schedule Demo
        </motion.button>
      </Link>

      {/* Enhanced trust indicators */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-2 text-sm text-gray-600"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="font-medium">Enterprise-ready</span>
      </motion.div>
    </div>
  );
}