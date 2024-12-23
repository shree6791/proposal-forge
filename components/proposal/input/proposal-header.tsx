"use client";

import { motion } from 'framer-motion';

export function ProposalHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl font-bold mb-4">
        Create Your{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Winning Proposal
        </span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Follow our guided process to generate a professional, AI-powered proposal tailored to your needs.
      </p>
    </motion.div>
  );
}