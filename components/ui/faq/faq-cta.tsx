import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function FAQCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl overflow-hidden relative"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-2xl" />
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">
            Still have questions?
          </h2>
          <p className="text-white/80 max-w-md">
            Our team is here to help with any questions about ProposalForge.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Support
            </motion.button>
          </Link>
          <Link href="/credentials">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}