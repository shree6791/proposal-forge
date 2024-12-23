import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';

export function AuthButtons() {
  const router = useRouter();
  const { user, signOut, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!user) {
    return (
      <Button 
        variant="default"
        onClick={() => router.push('/credentials')}
        className="bg-primary-600 hover:bg-primary-700 text-white"
      >
        Login
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-neutral-600">
        {user.email}
      </span>
      <Button 
        variant="outline"
        onClick={signOut}
        className="border-primary-200 text-primary-600 hover:bg-primary-50"
      >
        Logout
      </Button>
    </div>
  );
}