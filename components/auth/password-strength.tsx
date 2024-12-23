"use client";

import { motion } from 'framer-motion';

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const getStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const strength = getStrength(password);
  const strengthText = ['Weak', 'Fair', 'Good', 'Strong'];
  const strengthColor = [
    'bg-red-500',
    'bg-yellow-500',
    'bg-blue-500',
    'bg-green-500'
  ];

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 flex-1 rounded-full ${
              index < strength ? strengthColor[strength - 1] : 'bg-gray-200'
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: index < strength ? 1 : 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          />
        ))}
      </div>
      <motion.p
        className="text-xs text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Password strength: {strength > 0 ? strengthText[strength - 1] : 'Too weak'}
      </motion.p>
    </div>
  );
}