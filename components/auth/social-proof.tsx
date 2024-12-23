"use client";

import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

const testimonial = {
  quote: "ProposalForge has transformed our proposal process. We've cut our creation time by 70% while improving quality.",
  author: "Sarah Chen",
  role: "Head of Sales",
  company: "TechVision Solutions"
};

const benefits = [
  "AI-powered proposal generation in minutes",
  "Industry-specific templates and best practices",
  "Real-time collaboration and feedback",
  "Automated compliance checking"
];

export function AuthSocialProof() {
  return (
    <div className="space-y-8">
      {/* Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/50 backdrop-blur-lg p-6 rounded-xl"
      >
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
        <div>
          <p className="font-medium text-gray-900">{testimonial.author}</p>
          <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-gray-900">Why Choose ProposalForge?</h3>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <motion.li
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className="flex items-center gap-3 text-gray-700"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}