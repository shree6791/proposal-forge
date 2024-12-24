"use client";

import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "We prioritize our customers' success in everything we do, ensuring their needs drive our innovation."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously pushing boundaries to create cutting-edge solutions that transform proposal creation."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Foster an environment of teamwork and open communication to achieve exceptional results."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to delivering the highest quality solutions and maintaining the highest standards."
  }
];

export function Values() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide our mission to revolutionize proposal creation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-100">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}