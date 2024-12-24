"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CTAContentProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function CTAContent({ title, description, children }: CTAContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        {title}
      </h2>
      <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      {children}
    </motion.div>
  );
}