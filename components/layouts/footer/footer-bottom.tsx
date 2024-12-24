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
      <p className="text-gray-400 text-sm">
        © {currentYear} ProposalForge. All rights reserved.
      </p>

      {/* Social Links */}
      <div className="flex items-center space-x-4">
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </div>

      {/* Legal Links */}
      <div className="flex space-x-6">
        <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
          Privacy Policy
        </a>
        <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  );
}