"use client";

import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
  gradient: string;
}

const stats: Stat[] = [
  { 
    value: "10,000+",
    label: "Active Users",
    gradient: "from-blue-600 to-purple-600"
  },
  { 
    value: "98%",
    label: "Success Rate",
    gradient: "from-purple-600 to-pink-600"
  },
  { 
    value: "70%",
    label: "Time Saved",
    gradient: "from-pink-600 to-blue-600"
  }
];

export function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + (index * 0.1) }}
          className="group relative bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
            {stat.value}
          </div>
          
          <div className="text-sm text-gray-600 mt-2 font-medium">
            {stat.label}
          </div>
          
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-[0.03] rounded-xl transition-all duration-300`} />
        </motion.div>
      ))}
    </div>
  );
}