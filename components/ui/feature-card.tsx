"use client";

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientClasses: string;
}

export function FeatureCard({ icon: Icon, title, description, gradientClasses }: FeatureCardProps) {
  return (
    <motion.div 
      className="group h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-full p-6 bg-white rounded-2xl border border-neutral-200/50 shadow-lg transition-all duration-300">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
        
        {/* Icon */}
        <motion.div 
          className={`relative inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 mb-4`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        
        {/* Content */}
        <h3 className="relative text-xl font-semibold text-neutral-900 mb-2 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="relative text-neutral-600 transition-colors duration-300 group-hover:text-neutral-800">
          {description}
        </p>
      </div>
    </motion.div>
  );
}