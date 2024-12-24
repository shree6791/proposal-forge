"use client";

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { fadeIn } from '@/lib/animations/variants';
import { teamMembers } from '@/lib/data/team-data';
import { TeamMemberCard } from '@/components/team/team-member-card';

export function AboutTeam() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Experts committed to revolutionizing the proposal creation process
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={fadeIn}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}