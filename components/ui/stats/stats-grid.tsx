"use client";

import { motion } from 'framer-motion';
import { StatCard } from './stat-card';

interface Stat {
  label: string;
  value: string;
  description: string;
  gradientClasses: string;
}

interface StatsGridProps {
  stats: Stat[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <StatCard {...stat} />
        </motion.div>
      ))}
    </div>
  );
}