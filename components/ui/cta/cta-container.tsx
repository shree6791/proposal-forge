"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CTAContainerProps {
  children: ReactNode;
  className?: string;
}

export function CTAContainer({ children, className = '' }: CTAContainerProps) {
  return (
    <section className={`py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
}