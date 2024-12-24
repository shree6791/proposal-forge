"use client";

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { fadeIn } from '@/lib/animations/variants';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Passion for Innovation",
    description: "We're driven by a relentless pursuit of excellence and innovation in proposal creation.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Lightbulb,
    title: "Creative Problem Solving",
    description: "We approach every challenge with creativity and forward-thinking solutions.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Customer Success",
    description: "Your success is our success. We're committed to delivering exceptional results.",
    gradient: "from-pink-500 to-red-500"
  },
  {
    icon: Target,
    title: "Impact Driven",
    description: "We measure our success by the positive impact we create for our clients.",
    gradient: "from-red-500 to-orange-500"
  }
];

export function TeamValues() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            Our Core Values
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            The principles that drive our team and shape our culture
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
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${value.gradient} rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.gradient} mb-4 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>

              {/* Subtle gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}