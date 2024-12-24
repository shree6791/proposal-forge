"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

export function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <motion.li key={link.href} whileHover={{ x: 2 }}>
            <Link 
              href={link.href}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}