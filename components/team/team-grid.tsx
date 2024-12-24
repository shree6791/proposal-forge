"use client";

import { motion } from 'framer-motion';
import { TeamCard } from './team-card';
import { teamMembers } from '@/lib/data/team-data';

export function TeamGrid() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}