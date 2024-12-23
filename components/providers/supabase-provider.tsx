"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { createClientComponentClient, type User } from '@supabase/auth-helpers-nextjs';
import { useRouter, useSearchParams } from 'next/navigation';

type SupabaseContextType = {
  user: User | null;
  isLoading: boolean;
  supabase: ReturnType<typeof createClientComponentClient>;
};

const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined);

export default function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        
        // If we have a session and there's a redirectTo parameter, navigate there
        if (session?.user && searchParams.get('redirectTo')) {
          router.push(searchParams.get('redirectTo')!);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
      
      if (event === 'SIGNED_IN') {
        // On sign in, check for redirect parameter
        const redirectTo = searchParams.get('redirectTo');
        if (redirectTo) {
          router.push(redirectTo);
        } else {
          router.push('/inputproposal');
        }
      }
      
      if (event === 'SIGNED_OUT') {
        router.push('/');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router, searchParams]);

  return (
    <SupabaseContext.Provider value={{ user, isLoading, supabase }}>
      {children}
    </SupabaseContext.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
};