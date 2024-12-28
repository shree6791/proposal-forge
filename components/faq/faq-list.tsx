"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { FAQItem } from './faq-item';

interface FAQListProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
  searchQuery: string;
}

export function FAQList({ questions, searchQuery }: FAQListProps) {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  if (questions.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100"
      >
        <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-600">No questions found matching your search.</p>
        {searchQuery && (
          <button
            onClick={() => window.location.reload()}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Clear search and show all questions
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto space-y-4"
    >
      {questions.map((faq, index) => (
        <FAQItem
          key={`${faq.question}-${index}`}
          question={faq.question}
          answer={faq.answer}
          isOpen={openQuestions[`${faq.question}-${index}`]}
          onToggle={() => toggleQuestion(`${faq.question}-${index}`)}
          index={index}
          searchQuery={searchQuery}
        />
      ))}
    </motion.div>
  );
}