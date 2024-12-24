"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: Mail, text: "kenymandar@gmail.com" },
  { icon: Phone, text: "+1 (858) 123 4567" },
  { icon: MapPin, text: "La Jolla, San Diego" }
];

export function FooterContact() {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
      <ul className="space-y-4">
        {contactInfo.map((item) => (
          <motion.li
            key={item.text}
            whileHover={{ x: 2 }}
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
          >
            <item.icon className="w-4 h-4" />
            <span className="text-sm">{item.text}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}