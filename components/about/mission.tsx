"use client";

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { Zap, Shield, Target } from 'lucide-react';

const missionPoints = [
  {
    icon: Zap,
    title: "Accelerate Growth",
    description: "Transform proposal creation from a time-consuming task to a strategic advantage.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Ensure Quality",
    description: "Maintain consistent excellence across all client communications and proposals.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Target,
    title: "Drive Success",
    description: "Increase win rates with data-driven insights and industry best practices.",
    gradient: "from-pink-500 to-red-500"
  }
];

export function AboutMission() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <motion.div 
          className="absolute top-0 -right-48 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Mission
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
          >
            We're transforming how businesses create proposals by addressing key industry 
            challenges through innovative AI solutions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {missionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className={`w-14 h-14 bg-gradient-to-r ${point.gradient} rounded-xl flex items-center justify-center mb-6 text-white transform transition-transform duration-300 group-hover:scale-110`}
              >
                <point.icon className="w-6 h-6" />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}