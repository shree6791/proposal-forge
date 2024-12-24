"use client";

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { fadeIn } from '@/lib/animations/variants';
import { Lock, Zap, Server, Calculator } from 'lucide-react';

const processSteps = [
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "Enterprise-grade security with role-based access control.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Smart Data Collection",
    description: "Intuitive forms with real-time validation and analysis.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Server,
    title: "AI Generation",
    description: "Advanced language models create tailored proposals.",
    gradient: "from-pink-500 to-red-500"
  },
  {
    icon: Calculator,
    title: "Resource Planning",
    description: "Automated cost calculation and team composition.",
    gradient: "from-red-500 to-orange-500"
  }
];

export function AboutProcess() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            Our Process
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A streamlined approach combining cutting-edge technology with user-friendly design
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeIn}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${step.gradient} rounded-t-2xl`} />
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.gradient} mb-4 text-white`}>
                <step.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}