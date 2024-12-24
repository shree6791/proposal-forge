"use client";

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { fadeIn } from '@/lib/animations/variants';
import { Zap, Shield, Target } from 'lucide-react';

const missionPoints = [
  {
    icon: Zap,
    title: "Accelerate Growth",
    description: "Transform proposal creation from a time-consuming task to a strategic advantage."
  },
  {
    icon: Shield,
    title: "Ensure Quality",
    description: "Maintain consistent excellence across all client communications and proposals."
  },
  {
    icon: Target,
    title: "Drive Success",
    description: "Increase win rates with data-driven insights and industry best practices."
  }
];

export function AboutMission() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Mission
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600"
          >
            We're transforming how businesses create proposals by addressing key industry 
            challenges through innovative AI solutions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {missionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              variants={fadeIn}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}