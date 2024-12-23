"use client";

import { motion } from 'framer-motion';
import { Lock, Zap, Server, Calculator, FileOutput } from 'lucide-react';

const processSteps = [
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "Enterprise-grade security with role-based access control."
  },
  {
    icon: Zap,
    title: "Smart Data Collection",
    description: "Intuitive forms with real-time validation and analysis."
  },
  {
    icon: Server,
    title: "AI Generation",
    description: "Advanced language models create tailored proposals."
  },
  {
    icon: Calculator,
    title: "Resource Planning",
    description: "Automated cost calculation and team composition."
  },
  {
    icon: FileOutput,
    title: "Review & Export",
    description: "Professional formatting with multiple export options."
  }
];

export function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process combines cutting-edge technology with user-friendly design.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-8 mb-12 last:mb-0"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 ${
                index % 2 === 0 ? 'order-first' : 'order-last'
              }`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}