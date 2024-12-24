"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { navLinks } from '../navigation/nav-links';
import { AuthButtons } from '../navigation/auth-buttons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-gray-100 bg-white"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <AuthButtons />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}