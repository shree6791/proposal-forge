import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/components/providers/supabase-provider';

const DEMO_EMAIL = 'demo@example.com';
const DEMO_PASSWORD = 'demo123456';

export function useAuth(requireAuth = false) {
  const { user, isLoading, supabase } = useSupabase();
  const router = useRouter();

  useEffect(() => {
    const autoSignIn = async () => {
      if (!isLoading && !user) {
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: DEMO_EMAIL,
            password: DEMO_PASSWORD,
          });
          
          if (error) {
            // If sign in fails, create a new account
            const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
              email: DEMO_EMAIL,
              password: DEMO_PASSWORD,
            });
            
            if (signUpError) {
              console.error('Auto sign-up failed:', signUpError);
            }
          }
        } catch (error) {
          console.error('Auto authentication failed:', error);
        }
      }
    };

    if (requireAuth) {
      autoSignIn();
    }
  }, [isLoading, requireAuth, user, supabase.auth]);

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return {
    user,
    signOut,
    isLoading,
  };
}