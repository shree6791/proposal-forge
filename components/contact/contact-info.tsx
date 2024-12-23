"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kenymandar@gmail.com',
    delay: 0.1,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (858) 123 4567',
    delay: 0.2,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '12345 La Jolla, San Diego 92128',
    delay: 0.3,
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactInfo.map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: item.delay }}
          className="flex items-start gap-4"
        >
          <div className="p-3 bg-blue-50 rounded-lg">
            <item.icon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{item.label}</h3>
            <p className="text-gray-600">{item.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}