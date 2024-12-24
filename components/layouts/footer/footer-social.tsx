"use client";

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  icon: typeof Twitter;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kenymandar@gmail.com', label: 'Email' }
];

export function FooterSocial() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-4 h-4" />
        </motion.a>
      ))}
    </div>
  );
}