"use client";

import { motion } from 'framer-motion';
import { BackButton } from '@/components/ui/button/back-button';

interface ResultHeaderProps {
  companyName: string;
  clientName: string;
}

export function ResultHeader({ companyName, clientName }: ResultHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <BackButton href="/inputproposal" className="mb-6" />
      <h1 className="text-4xl font-bold mb-4">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          {companyName}'s proposal for {clientName}
        </span>
      </h1>
    </motion.div>
  );
}