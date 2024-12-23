import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  setAuth: (user: User | null) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      setAuth: (user) => {
        set({ user, isAuthenticated: !!user });
      },
      signOut: () => {
        set({ user: null, isAuthenticated: false });
        localStorage.clear();
        window.location.href = '/';
      },
    }),
    {
      name: 'auth-store',
    }
  )
);