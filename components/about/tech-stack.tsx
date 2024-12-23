"use client";

import { motion } from 'framer-motion';

const technologies = {
  frontend: [
    { name: "Next.js 13+", description: "Modern React framework for optimal performance" },
    { name: "Tailwind CSS", description: "Utility-first CSS for responsive design" },
    { name: "TypeScript", description: "Type-safe development environment" }
  ],
  backend: [
    { name: "Serverless API", description: "Scalable Next.js API routes" },
    { name: "OpenAI Integration", description: "Advanced AI for proposal generation" },
    { name: "Supabase", description: "Authentication and database management" }
  ]
};

export function TechStack() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Tech Stack</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with cutting-edge technologies for optimal performance and scalability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center capitalize">
                {category}
              </h3>
              <div className="space-y-6">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {tech.name}
                    </h4>
                    <p className="text-gray-600">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}