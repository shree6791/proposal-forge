"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight, Zap } from 'lucide-react';
import { useSupabase } from '@/components/providers/supabase-provider';

export function CTAButtons() {
  const router = useRouter();
  const { user } = useSupabase();

  const handleGetStarted = () => {
    // Redirect to input proposal if signed in, otherwise to credentials
    router.push(user ? '/inputproposal' : '/credentials');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <motion.button
        onClick={handleGetStarted}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2"
      >
        <Zap className="w-5 h-5" />
        Get Started Now
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </motion.button>
      
      <motion.button
        onClick={() => router.push('/contact')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors inline-flex items-center gap-2 border border-white/20 backdrop-blur-sm"
      >
        Contact Sales
      </motion.button>
    </div>
  );
}