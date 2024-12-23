"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProposalCardProps {
  children: ReactNode;
  isActive: boolean;
}

export function ProposalCard({ children, isActive }: ProposalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        bg-white rounded-2xl shadow-lg border-2 transition-all duration-300
        ${isActive 
          ? 'border-blue-500 shadow-blue-100' 
          : 'border-transparent opacity-50'
        }
      `}
    >
      <div className="p-6">{children}</div>
    </motion.div>
  );
}