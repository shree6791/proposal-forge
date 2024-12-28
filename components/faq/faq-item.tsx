"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  searchQuery?: string;
}

export function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onToggle, 
  index,
  searchQuery = ''
}: FAQItemProps) {
  // Highlight matching text if there's a search query
  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <span key={i} className="bg-yellow-200 rounded px-1">{part}</span>
      ) : part
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <motion.button
        onClick={onToggle}
        className={`
          w-full p-6 rounded-xl text-left transition-all duration-300
          ${isOpen 
            ? 'bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm shadow-lg' 
            : 'bg-white hover:bg-gray-50 shadow-sm'}
        `}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex justify-between items-center gap-4">
          <h3 className={`
            text-lg font-medium transition-colors duration-300
            ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}
          `}>
            {highlightText(question)}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`
              flex-shrink-0 w-6 h-6 rounded-full 
              ${isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}
              flex items-center justify-center transition-colors duration-300
            `}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-gray-600 overflow-hidden"
            >
              <div className="prose prose-blue max-w-none">
                {highlightText(answer)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}