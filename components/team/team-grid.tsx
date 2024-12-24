"use client";

import { motion } from 'framer-motion';
import { TeamMemberCard } from './team-member-card';
import { teamMembers } from '@/lib/data/team-data';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';

export function TeamGrid() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.2 }}
            >
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}