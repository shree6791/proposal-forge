import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/components/providers/supabase-provider';

export function useAuth(requireAuth = false) {
  const router = useRouter();
  const { supabase, user, isLoading } = useSupabase();

  const signIn = useCallback(async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    return data;
  }, [supabase]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    router.push('/');
  }, [supabase, router]);

  return {
    user,
    signIn,
    signOut,
    isLoading
  };
}