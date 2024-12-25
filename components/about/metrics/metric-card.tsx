"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  gradient: string;
  delay?: number;
}

export function MetricCard({ icon: Icon, value, label, gradient, delay = 0 }: MetricCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ""));
      const suffix = value.replace(/[0-9]/g, "");
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = numericValue / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setDisplayValue(`${numericValue}${suffix}`);
          clearInterval(timer);
        } else {
          setDisplayValue(`${Math.floor(start)}${suffix}`);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${gradient} rounded-t-2xl`} />
      
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} mb-4 text-white transform transition-transform duration-300 group-hover:scale-110`}>
        <Icon className="w-6 h-6" />
      </div>
      
      <h3 className={`text-4xl font-bold bg-gradient-to-r ${gradient} text-transparent bg-clip-text mb-2`}>
        {displayValue}
      </h3>
      
      <p className="text-gray-600 font-medium">
        {label}
      </p>

      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-300`} />
    </motion.div>
  );
}