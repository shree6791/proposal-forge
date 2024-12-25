"use client";

import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

interface ProTipProps {
  children: React.ReactNode;
}

export function ProTip({ children }: ProTipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-lg border border-blue-100"
    >
      <Lightbulb className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
      <div>
        <span className="font-medium text-blue-700">Pro Tip: </span>
        <span className="text-blue-600">{children}</span>
      </div>
    </motion.div>
  );
}