export interface User {
  id: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
}

export interface AuthActions {
  setAuth: (user: User | null) => void;
  signOut: () => void;
}

export type AuthContextType = AuthState & AuthActions;