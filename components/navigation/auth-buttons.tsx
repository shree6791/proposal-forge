"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useSupabase } from '@/components/providers/supabase-provider';
import { useAuth } from '@/hooks/use-auth';

export function AuthButtons() {
  const router = useRouter();
  const { user, isLoading } = useSupabase();
  const { signOut } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!user) {
    return (
      <Button 
        onClick={() => router.push('/credentials')}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        Sign In
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600">
        {user.email}
      </span>
      <Button 
        variant="outline"
        onClick={signOut}
        className="border-blue-200 text-blue-600 hover:bg-blue-50"
      >
        Sign Out
      </Button>
    </div>
  );
}