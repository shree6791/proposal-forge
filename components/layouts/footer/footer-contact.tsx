"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: Mail, text: "kenymandar@gmail.com", href: "mailto:kenymandar@gmail.com" },
  { icon: Phone, text: "+1 (858) 123 4567", href: "tel:+18581234567" },
  { icon: MapPin, text: "La Jolla, San Diego", href: "https://goo.gl/maps/..." }
];

export function FooterContact() {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
      <ul className="space-y-4">
        {contactInfo.map((item, index) => (
          <motion.li
            key={item.text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
          >
            <a 
              href={item.href}
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              target={item.icon !== Phone ? '_blank' : undefined}
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                <item.icon className="w-4 h-4" />
              </div>
              <span className="text-sm">{item.text}</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}