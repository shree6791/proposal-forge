"use client";

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const painPoints = [
  {
    title: "Time-Intensive Process",
    description: "Traditional proposal creation requires extensive time investment and multiple iterations.",
    icon: Zap
  },
  {
    title: "Consistency Challenges",
    description: "Maintaining consistency while personalizing content for each client is complex.",
    icon: Zap
  },
  {
    title: "Resource Planning",
    description: "Accurate resource planning and cost estimation in IT service proposals is crucial.",
    icon: Zap
  }
];

export function Mission() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600">
            We're transforming how businesses create proposals by addressing key industry challenges through innovative AI solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}