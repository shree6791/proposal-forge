import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={onToggle}
        className={`
          w-full p-6 rounded-xl text-left transition-all duration-200
          ${isOpen 
            ? 'bg-gradient-to-r from-blue-50 to-purple-50 shadow-md' 
            : 'bg-white hover:bg-gray-50 shadow-sm'}
        `}
      >
        <div className="flex justify-between items-center">
          <h3 className={`
            text-lg font-medium transition-colors duration-200
            ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}
          `}>
            {question}
          </h3>
          <ChevronDown
            className={`
              w-5 h-5 transition-transform duration-200
              ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-500'}
            `}
          />
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 text-gray-600 overflow-hidden"
            >
              <div className="prose prose-blue max-w-none">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}