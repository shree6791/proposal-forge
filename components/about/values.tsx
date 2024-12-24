"use client";

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { fadeIn } from '@/lib/animations/variants';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "We prioritize our customers' success in everything we do.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously pushing boundaries in proposal creation.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Foster teamwork and open communication for better results.",
    gradient: "from-pink-500 to-red-500"
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to delivering the highest quality solutions.",
    gradient: "from-red-500 to-orange-500"
  }
];

export function AboutValues() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Values
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            The principles that guide our mission to revolutionize proposal creation
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeIn}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${value.gradient} rounded-t-2xl`} />
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.gradient} mb-4 text-white`}>
                <value.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}