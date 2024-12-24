"use client";

import { TeamHero } from '@/components/team/team-hero';
import { TeamGrid } from '@/components/team/team-grid';
import { JoinTeam } from '@/components/team/join-team';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <TeamHero />
      <TeamGrid />
      <JoinTeam />
    </div>
  );
}