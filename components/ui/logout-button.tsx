import { useRouter } from 'next/navigation';
import { Button } from './button';
import { supabase } from '@/lib/supabase';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Button 
      variant="secondary" 
      onClick={handleLogout}
      className="font-[Arial]"
    >
      Logout
    </Button>
  );
}