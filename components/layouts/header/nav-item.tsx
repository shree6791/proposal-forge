"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}

export function NavItem({ href, label, isActive }: NavItemProps) {
  return (
    <Link href={href}>
      <motion.span 
        className={`
          px-4 py-2 rounded-lg relative group cursor-pointer
          ${isActive 
            ? 'text-blue-600' 
            : 'text-gray-600 hover:text-blue-600'}
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </motion.span>
    </Link>
  );
}