"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  description: string;
  children: ReactNode;
  isActive: boolean;
}

export function FormSection({ title, description, children, isActive }: FormSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0.5, y: 0 }}
      className={`
        bg-white rounded-2xl shadow-lg border-2 transition-all duration-300
        ${isActive ? 'border-blue-500 shadow-blue-100' : 'border-transparent'}
      `}
    >
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </motion.div>
        <div className="space-y-6">{children}</div>
      </div>
    </motion.div>
  );
}