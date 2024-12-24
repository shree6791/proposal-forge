"use client";

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/proposalforge', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/proposalforge', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/proposalforge', label: 'GitHub' }
];

export function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Copyright */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-400 text-sm"
      >
        © {currentYear} ProposalForge. All rights reserved.
      </motion.p>

      {/* Social Links */}
      <div className="flex items-center space-x-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
            aria-label={link.label}
          >
            <link.icon className="w-4 h-4" />
          </motion.a>
        ))}
      </div>

      {/* Legal Links */}
      <div className="flex space-x-6">
        {['Privacy Policy', 'Terms of Service'].map((text, index) => (
          <motion.a
            key={text}
            href={`/${text.toLowerCase().replace(' ', '-')}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index * 0.1) }}
            className="text-sm text-gray-400 hover:text-white transition-colors relative group"
          >
            {text}
            <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}