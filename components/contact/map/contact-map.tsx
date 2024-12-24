"use client";

import { motion } from 'framer-motion';

export function ContactMap() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-inner relative group"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26889.181754009825!2d-117.27776678037801!3d32.8328006386694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c4414caf4f%3A0xefb6aafc89913ea7!2sLa%20Jolla%2C%20San%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1709663548447!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="transition-transform duration-300 group-hover:scale-105"
      />
    </motion.div>
  );
}