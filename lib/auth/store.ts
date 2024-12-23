import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState, AuthActions, User } from './types';
import { AUTH_STORAGE_KEY } from './constants';
import { supabase } from '../supabase/client';

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      isLoading: true,
      setAuth: (user: User | null) => {
        set({ 
          user, 
          isAuthenticated: !!user,
          isLoading: false 
        });
      },
      signOut: async () => {
        try {
          await supabase.auth.signOut();
          set({ user: null, isAuthenticated: false });
          localStorage.clear();
        } catch (error) {
          console.error('Error signing out:', error);
        }
      },
    }),
    {
      name: AUTH_STORAGE_KEY,
      skipHydration: true, // Important: Skip initial hydration
    }
  )
);