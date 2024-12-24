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
        {links.map((link, index) => (
          <motion.li 
            key={link.href}
            whileHover={{ x: 2 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
          >
            <Link 
              href={link.href}
              className="text-gray-400 hover:text-white text-sm transition-colors relative group"
            >
              {link.label}
              <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}