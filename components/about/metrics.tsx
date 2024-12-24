"use client";

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { fadeIn } from '@/lib/animations/variants';
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
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={fadeIn}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${metric.gradient} rounded-t-2xl`} />
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${metric.gradient} mb-4 text-white`}>
                <metric.icon className="w-6 h-6" />
              </div>
              
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${metric.gradient} text-transparent bg-clip-text mb-2`}>
                {metric.value}
              </h3>
              
              <p className="text-gray-600 font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}