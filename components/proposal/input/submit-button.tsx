"use client";

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  isProcessing: boolean;
  isDisabled: boolean;
}

export function SubmitButton({ isProcessing, isDisabled }: SubmitButtonProps) {
  return (
    <motion.button
      type="submit"
      disabled={isDisabled || isProcessing}
      className={`
        relative w-full px-8 py-4 rounded-xl text-white font-medium
        transition-all duration-300 transform hover:scale-105
        ${isDisabled || isProcessing
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg'}
      `}
      whileHover={{ scale: isDisabled ? 1 : 1.02 }}
      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
    >
      <span className={isProcessing ? 'opacity-0' : 'opacity-100'}>
        Generate Proposal
      </span>
      {isProcessing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="ml-2">Processing...</span>
        </div>
      )}
    </motion.button>
  );
}