"use client";

import { motion } from 'framer-motion';
import { BrandLogo } from '@/components/ui/brand/brand-logo';
import { CheckCircle } from 'lucide-react';

const benefits = [
  "AI-powered proposal generation",
  "70% faster creation time",
  "Industry-specific templates"
];

export function FooterBrand() {
  return (
    <div className="space-y-6">
      {/* Brand Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <BrandLogo variant="light" />
      </motion.div>

      {/* Benefits List */}
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-2"
      >
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-400 text-sm">
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span>{benefit}</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}