"use client";

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  onReset: () => void;
}

export function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle className="w-8 h-8 text-green-500" />
      </motion.div>

      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Message Sent Successfully!
      </h3>
      <p className="text-gray-600 mb-8">
        Thank you for reaching out. We'll get back to you shortly.
      </p>

      <motion.button
        onClick={onReset}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Send Another Message
      </motion.button>
    </motion.div>
  );
}