"use client";

import { useState } from 'react';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuthFormField } from './auth-form-field';
import { useAuth } from '@/hooks/use-auth';

interface CredentialsFormProps {
  isSignUp: boolean;
  handleSubmit: (email: string, password: string) => Promise<{ success: boolean; message?: string; }>;
  onToggleMode: () => void;
}

export function CredentialsForm({ isSignUp, onToggleMode }: CredentialsFormProps) {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('demo123456');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await signIn(email, password);
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">
          {isSignUp ? 'Create an Account' : 'Welcome Back'}
        </h2>
        <p className="text-gray-600">
          {isSignUp 
            ? 'Start creating winning proposals today'
            : 'Sign in to continue with ProposalForge'
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthFormField
          type="email"
          label="Email"
          value={email}
          onChange={setEmail}
          icon={Mail}
          isFocused={focusedField === 'email'}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          required
        />

        <AuthFormField
          type="password"
          label="Password"
          value={password}
          onChange={setPassword}
          icon={Lock}
          isFocused={focusedField === 'password'}
          onFocus={() => setFocusedField('password')}
          onBlur={() => setFocusedField(null)}
          required
        />

        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
            {error}
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Please wait...
            </span>
          ) : (
            isSignUp ? 'Create Account' : 'Sign In'
          )}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={onToggleMode}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          {isSignUp 
            ? 'Already have an account? Sign in' 
            : 'Need an account? Sign up'}
        </button>
      </div>
    </div>
  );
}