"use client";

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { fadeIn } from '@/lib/animations/variants';
import { TrendingUp } from 'lucide-react';

const stats = [
  {
    value: "10,000+",
    label: "Proposals Generated",
    metric: "Monthly",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    value: "85%",
    label: "Success Rate",
    metric: "Proposal Acceptance",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    value: "70%",
    label: "Time Saved",
    metric: "Average",
    gradient: "from-pink-500 to-red-500"
  },
  {
    value: "$500M+",
    label: "Revenue Generated",
    metric: "For Clients",
    gradient: "from-red-500 to-orange-500"
  }
];

export function StatsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Impact Metrics
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Trusted by industry leaders
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeIn}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${stat.gradient} rounded-t-2xl`} />
              
              <h3 className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text mb-2`}>
                {stat.value}
              </h3>
              
              <p className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </p>
              
              <p className="text-sm text-gray-600">
                {stat.metric}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}