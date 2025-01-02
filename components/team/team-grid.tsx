"use client";

import { motion } from 'framer-motion';
import { TeamCard } from './team-card';
import { teamMembers } from '@/lib/data/team-data';

export function TeamGrid() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Added flex container with justify-center */}
        <div className="flex justify-center">
          {/* Adjusted grid to have auto columns and center items */}
          <div className="grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(350px,400px))] gap-8 max-w-6xl">
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
      </div>
    </section>
  );
}