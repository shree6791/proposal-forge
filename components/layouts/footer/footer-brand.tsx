"use client";

import { motion } from 'framer-motion';
import { BrandLogo } from '@/components/ui/brand/brand-logo';

interface FooterBrandProps {
  showBenefits?: boolean;
}

export function FooterBrand({ showBenefits = false }: FooterBrandProps) {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <BrandLogo variant="light" />
        <p className="mt-4 text-gray-400 text-sm max-w-[260px] leading-relaxed">
          AI-powered innovation for modern proposal creation.
        </p>
      </motion.div>
    </div>
  );
}