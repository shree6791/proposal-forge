"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kenymandar@gmail.com',
    gradient: 'from-blue-500 to-purple-500',
    href: 'mailto:kenymandar@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (858) 123 4567',
    gradient: 'from-purple-500 to-pink-500',
    href: 'tel:+18581234567'
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'La Jolla, San Diego 92128',
    gradient: 'from-pink-500 to-red-500',
    href: 'https://maps.google.com/?q=La+Jolla,+San+Diego'
  }
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactInfo.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          target={item.icon !== Phone ? '_blank' : undefined}
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
        >
          <div className={`
            p-3 rounded-lg bg-gradient-to-r ${item.gradient}
            transform group-hover:scale-110 transition-transform duration-200
          `}>
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">{item.label}</h3>
            <p className="text-gray-600">{item.value}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}