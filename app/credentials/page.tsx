"use client";

import { useState } from 'react';
import { NavBar } from '@/components/navigation/nav-bar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useSupabase } from '@/components/providers/supabase-provider';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const { supabase } = useSupabase();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          }
        });
        
        if (error) throw error;
        setMessage('Success! You can now sign in with your credentials.');
        setIsSignUp(false);
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        
        // If sign in is successful and we have a session
        if (data.session) {
          console.log('Sign in successful, redirecting...');
          router.push('/inputproposal');
          router.refresh();
        }
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      setMessage(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] bg-gray-50">
        <Card className="w-full max-w-md p-8 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            {isSignUp ? 'Create an Account' : 'Sign In'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                required
                minLength={6}
              />
            </div>

            {message && (
              <div className={`p-3 rounded-md ${
                message.includes('Success') 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {message}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={loading}
            >
              {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {isSignUp 
                ? 'Already have an account? Sign in' 
                : 'Need an account? Sign up'}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}