"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
}

export function ValueCard({ icon: Icon, title, description, gradient, delay = 0 }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -8 }}
      className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <motion.div 
        className={`w-14 h-14 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mb-6 text-white transform transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon className="w-6 h-6" />
      </motion.div>
      
      <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>

      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-300`} />
    </motion.div>
  );
}