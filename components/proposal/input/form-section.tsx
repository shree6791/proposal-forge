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
    <div className={`
      bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 transition-all duration-300
      ${isActive ? 'border-blue-500 shadow-blue-100' : 'border-transparent opacity-75'}
    `}>
      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
}