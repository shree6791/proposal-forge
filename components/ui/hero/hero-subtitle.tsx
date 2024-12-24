"use client";

import { motion } from 'framer-motion';
import { CheckCircle, Zap, Clock, Shield } from 'lucide-react';

interface HeroSubtitleProps {
  subtitle: string;
}

export function HeroSubtitle({ subtitle }: HeroSubtitleProps) {
  const benefits = [
    {
      icon: Zap,
      text: "AI-Powered Generation"
    },
    {
      icon: Clock,
      text: "70% Faster Creation"
    },
    {
      icon: Shield,
      text: "Enterprise-Ready"
    }
  ];

  return (
    <motion.div
      className="max-w-2xl mx-auto mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        {subtitle}
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (index * 0.1) }}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100"
          >
            <benefit.icon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}