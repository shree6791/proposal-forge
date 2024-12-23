"use client";

import { motion } from 'framer-motion';
import { LucideIcon, Eye, EyeOff } from 'lucide-react';

interface AuthFormFieldProps {
  type: 'text' | 'email' | 'password';
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon: LucideIcon;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  required?: boolean;
  minLength?: number;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
  showPassword?: boolean;
}

export function AuthFormField({
  type,
  label,
  value,
  onChange,
  icon: Icon,
  isFocused,
  onFocus,
  onBlur,
  required = false,
  minLength,
  showPasswordToggle,
  onTogglePassword,
  showPassword,
}: AuthFormFieldProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative group">
        <Icon 
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
            isFocused ? 'text-blue-500' : 'text-gray-400'
          }`} 
        />
        <input
          type={showPassword ? 'text' : type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          required={required}
          minLength={minLength}
        />
        {showPasswordToggle && onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
    </motion.div>
  );
}