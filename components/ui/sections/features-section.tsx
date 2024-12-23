"use client";

import { motion } from 'framer-motion';
import { FeatureCard } from '../feature-card';
import { SectionHeader } from '../section-header';
import { Clock, Sparkles, FileEdit, Palette } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Rapid Proposal Creation",
    description: "Generate client-focused, review-ready proposals in minutes with AI",
    gradientClasses: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: Sparkles,
    title: "Client-Centric Approach",
    description: "Tailor proposals to client needs and priorities",
    gradientClasses: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: FileEdit,
    title: "Accurate & Error-Free",
    description: "Ensure precision with compliance checks and citations",
    gradientClasses: "from-pink-500/20 to-red-500/20"
  },
  {
    icon: Palette,
    title: "Iterate on Strategy",
    description: "Focus on strategy while AI refines content and formatting",
    gradientClasses: "from-red-500/20 to-orange-500/20"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Powerful Features"
          subtitle="Experience the next generation of proposal creation"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}