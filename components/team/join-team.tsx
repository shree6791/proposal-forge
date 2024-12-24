"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';

export function JoinTeam() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full mix-blend-overlay filter blur-xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full mix-blend-overlay filter blur-xl" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/20"
            >
              <Briefcase className="w-4 h-4" />
              Career Opportunities
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Join Our Growing Team
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 mb-8 max-w-2xl"
            >
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </motion.p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}