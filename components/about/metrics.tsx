"use client";

import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Globe } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Users",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    value: "$50M+",
    label: "Revenue Generated",
    gradient: "from-pink-500 to-red-500"
  },
  {
    icon: Globe,
    value: "20+",
    label: "Countries",
    gradient: "from-red-500 to-orange-500"
  }
];

export function AboutMetrics() {
  return (
    <section className="py-20 -mt-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${metric.gradient} rounded-t-2xl`} />
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${metric.gradient} mb-4 text-white transform transition-transform duration-300 group-hover:scale-110`}>
                <metric.icon className="w-6 h-6" />
              </div>
              
              <h3 className={`text-4xl font-bold bg-gradient-to-r ${metric.gradient} text-transparent bg-clip-text mb-2`}>
                {metric.value}
              </h3>
              
              <p className="text-gray-600 font-medium">
                {metric.label}
              </p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}