"use client";

import { motion } from 'framer-motion';
import { FooterBrand } from './footer/footer-brand';
import { FooterSection } from './footer/footer-section';
import { FooterContact } from './footer/footer-contact';
import { FooterBottom } from './footer/footer-bottom';

const sections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQs", href: "/faqs" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Documentation", href: "/docs" },
      { label: "Support", href: "/support" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
        <motion.div 
          className="absolute top-0 -right-48 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 -left-48 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-12 gap-8 border-b border-gray-800">
          {/* Brand Section - Adjusted width */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4"
          >
            <FooterBrand />
          </motion.div>

          {/* Navigation Sections - Adjusted spacing */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-3 gap-4">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <FooterSection {...section} />
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-12 lg:col-span-3"
          >
            <FooterContact />
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
}