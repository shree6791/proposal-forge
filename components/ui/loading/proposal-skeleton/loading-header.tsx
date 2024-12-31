"use client";

import { motion } from 'framer-motion';
import { Sparkles, Brain, Wand2 } from 'lucide-react';

const loadingMessages = [
  { icon: Brain, text: "Analyzing your requirements..." },
  { icon: Wand2, text: "Crafting tailored solutions..." },
  { icon: Sparkles, text: "Polishing the final details..." }
];

export function LoadingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-4"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
        <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
        <span className="text-blue-600 font-medium">AI Processing</span>
      </div>

      <div className="space-y-2">
        {loadingMessages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              delay: index * 1.5,
              duration: 0.5
            }}
            className="flex items-center justify-center gap-2 text-gray-600"
          >
            <message.icon className="w-4 h-4" />
            <span>{message.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}