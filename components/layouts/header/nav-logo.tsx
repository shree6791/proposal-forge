"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export function NavLogo() {
  return (
    <Link href="/">
      <motion.div 
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          ProposalForge
        </span>
        <span className="hidden sm:inline-block text-sm text-gray-500 ml-2 font-medium">
          | AI Proposal Platform
        </span>
      </motion.div>
    </Link>
  );
}