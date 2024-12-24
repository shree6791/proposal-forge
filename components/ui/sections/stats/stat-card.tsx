"use client";

import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  metric: string;
  gradient: string;
  delay?: number;
}

export function StatCard({ value, label, metric, gradient, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${gradient} rounded-t-2xl`} />
      
      <h3 className={`text-4xl font-bold bg-gradient-to-r ${gradient} text-transparent bg-clip-text mb-2`}>
        {value}
      </h3>
      
      <p className="text-lg font-semibold text-gray-900 mb-1">
        {label}
      </p>
      
      <p className="text-sm text-gray-600">
        {metric}
      </p>
    </motion.div>
  );
}