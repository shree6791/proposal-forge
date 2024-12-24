"use client";

import { motion } from 'framer-motion';

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
}

export function FormInput({ 
  label, 
  value, 
  onChange, 
  error, 
  required = false,
  type = "text" 
}: FormInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-1"
    >
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={`
          w-full px-4 py-3 rounded-lg transition-all duration-200
          ${error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-200 focus:ring-blue-500'}
          border focus:ring-2 focus:border-transparent
        `}
      />
      {error && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}