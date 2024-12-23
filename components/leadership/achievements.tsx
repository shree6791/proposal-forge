"use client";

import { motion } from 'framer-motion';
import { Award, Users, LineChart, Globe } from 'lucide-react';

const achievements = [
  {
    icon: Users,
    metric: "10,000+",
    label: "Active Users",
    description: "Trusted by businesses worldwide"
  },
  {
    icon: LineChart,
    metric: "$50M+",
    label: "Revenue Generated",
    description: "For our clients through proposals"
  },
  {
    icon: Award,
    metric: "98%",
    label: "Success Rate",
    description: "In proposal acceptance"
  },
  {
    icon: Globe,
    metric: "20+",
    label: "Countries",
    description: "Global presence and impact"
  }
];

export function Achievements() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming proposal creation and driving success across industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-100 rounded-lg mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{item.metric}</h3>
                <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}