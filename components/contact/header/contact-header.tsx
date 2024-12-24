"use client";

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export function ContactHeader() {
  return (
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm rounded-full text-blue-600 text-sm font-medium mb-6 border border-blue-100/50 shadow-lg"
        >
          <MessageSquare className="w-4 h-4 animate-pulse" />
          Get in Touch
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Let's Start a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient bg-[length:200%_auto]">
            Conversation
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-600 leading-relaxed"
        >
          Have questions about ProposalForge? We'd love to hear from you.
          Our team is ready to help you streamline your proposal creation process.
        </motion.p>
      </motion.div>
    </div>
  );
}