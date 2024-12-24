"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/components/providers/supabase-provider';
import { CredentialsForm } from '@/components/auth/credentials-form';
import { AuthSocialProof } from '@/components/auth/social-proof';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { BrandLogo } from '@/components/ui/brand/brand-logo';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const { supabase } = useSupabase();
  const router = useRouter();

  const handleAuth = async (email: string, password: string) => {
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          }
        });
        
        if (error) throw error;
        return { success: true, message: 'Success! You can now sign in with your credentials.' };
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        
        if (data.session) {
          router.push('/inputproposal');
          router.refresh();
          return { success: true };
        }
      }
    } catch (error: any) {
      return { 
        success: false, 
        message: error.message || 'An error occurred during authentication'
      };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedBackground />
      
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 items-center relative">
        {/* Left Side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2"
        >
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
            <CredentialsForm
              isSignUp={isSignUp}
              handleSubmit={async (email: string, password: string) => {
                const result = await handleAuth(email, password);
                return result || { success: false, message: 'Authentication failed' };
              }}
              onToggleMode={() => setIsSignUp(!isSignUp)}
            />
          </div>
        </motion.div>

        {/* Right Side - Social Proof */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <AuthSocialProof />
        </motion.div>
      </div>
    </div>
  );
}