import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/components/providers/supabase-provider';

export function useAuth(requireAuth = false) {
  const router = useRouter();
  const { supabase, user, isLoading } = useSupabase();

  useEffect(() => {
    if (requireAuth && !isLoading && !user) {
      router.push('/credentials');
    }
  }, [requireAuth, router, user, isLoading]);

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    return data;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return {
    user,
    signIn,
    signOut,
    isLoading
  };
}