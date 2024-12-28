"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, Zap } from 'lucide-react';
import { useSupabase } from '@/components/providers/supabase-provider';

interface CTAButtonsProps {
  primaryLink: string;
  primaryText: string;
  secondaryLink: string;
  secondaryText: string;
}

export function CTAButtons({ 
  primaryText, 
  secondaryLink, 
  secondaryText 
}: CTAButtonsProps) {
  const router = useRouter();
  const { user } = useSupabase();

  const handlePrimaryClick = () => {
    // Redirect to input proposal if signed in, otherwise to credentials
    router.push(user ? '/inputproposal' : '/credentials');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <motion.button
        onClick={handlePrimaryClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2"
      >
        <Zap className="w-5 h-5" />
        {primaryText}
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </motion.button>
      
      <motion.button
        onClick={() => router.push(secondaryLink)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors inline-flex items-center gap-2 border border-white/20 backdrop-blur-sm"
      >
        {secondaryText}
      </motion.button>
    </div>
  );
}