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
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <BrandLogo variant="light" />
      </motion.div>

      {/* Benefits List */}
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="space-y-3"
      >
        {benefits.map((benefit, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index * 0.1) }}
            className="flex items-center gap-2 text-gray-400 text-sm group"
          >
            <CheckCircle className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="group-hover:text-gray-300 transition-colors">{benefit}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}