import { useState } from 'react';

// Mock user object
const MOCK_USER = {
  id: 'mock-user-id',
  email: 'demo@example.com',
  user_metadata: {
    full_name: 'Demo User'
  }
};

export function useMockAuth() {
  const [user] = useState(MOCK_USER);
  const [isLoading] = useState(false);

  const signOut = async () => {
    window.location.href = '/';
  };

  return {
    user,
    signOut,
    isLoading,
  };
}