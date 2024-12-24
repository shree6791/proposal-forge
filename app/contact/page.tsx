"use client";

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/contact/form/contact-form';
import { ContactInfo } from '@/components/contact/info/contact-info';
import { ContactMap } from '@/components/contact/map/contact-map';
import { ContactHeader } from '@/components/contact/header/contact-header';
import { AnimatedBackground } from '@/components/ui/animated-background';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <AnimatedBackground />
        <ContactHeader />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form - Wider column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full relative overflow-hidden group">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </motion.div>

            {/* Contact Info & Map - Narrower column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              {/* Contact Info Card */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Contact Information</h2>
                  <ContactInfo />
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">Our Location</h2>
                  <ContactMap />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}