"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Loader2, ArrowRight } from 'lucide-react';
import { AuthFormField } from './auth-form-field';
import { PasswordStrength } from './password-strength';

interface CredentialsFormProps {
  isSignUp: boolean;
  handleSubmit: (email: string, password: string) => Promise<{ success: boolean; message?: string; }>;
  onToggleMode: () => void;
}

export function CredentialsForm({ isSignUp, handleSubmit, onToggleMode }: CredentialsFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await handleSubmit(email, password);
      if (!result.success && result.message) {
        setError(result.message);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to authenticate');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {isSignUp ? 'Create an Account' : 'Welcome Back'}
        </h2>
        <p className="text-gray-600">
          {isSignUp 
            ? 'Start creating winning proposals today'
            : 'Sign in to continue with ProposalForge'
          }
        </p>
      </motion.div>

      <form onSubmit={handleFormSubmit} className="space-y-6">
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

        <div className="space-y-2">
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
            minLength={8}
            showPasswordToggle
            onTogglePassword={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
          />
          {isSignUp && <PasswordStrength password={password} />}
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 text-sm text-red-600 bg-red-50 rounded-lg"
          >
            {error}
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`
            relative w-full px-6 py-4 rounded-xl font-medium text-white
            transition-all duration-300
            flex items-center justify-center gap-2
            ${isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-[1.02]'}
          `}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Please wait...
            </>
          ) : (
            <>
              {isSignUp ? 'Create Account' : 'Sign In'}
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </form>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-center"
      >
        <button
          type="button"
          onClick={onToggleMode}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          {isSignUp 
            ? 'Already have an account? Sign in' 
            : 'Need an account? Sign up'}
        </button>
      </motion.div>
    </div>
  );
}