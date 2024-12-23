"use client";

import { motion } from 'framer-motion';
import { LeadershipHero } from '@/components/leadership/hero';
import { TeamGrid } from '@/components/leadership/team-grid';
import { JoinTeam } from '@/components/leadership/join-team';

export default function Leadership() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <LeadershipHero />
      <TeamGrid />
      <JoinTeam />
    </div>
  );
}