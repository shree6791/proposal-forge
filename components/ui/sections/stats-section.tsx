"use client";

import { StatsGrid } from '../stats/stats-grid';
import { SectionHeader } from '../section-header';

const stats = [
  { 
    label: 'Proposals Generated', 
    value: '10,000+', 
    description: 'And counting',
    gradientClasses: 'from-blue-500 to-purple-500'
  },
  { 
    label: 'Time Saved', 
    value: '70%', 
    description: 'Average reduction in proposal creation time',
    gradientClasses: 'from-purple-500 to-pink-500'
  },
  { 
    label: 'Success Rate', 
    value: '85%', 
    description: 'Proposal acceptance rate',
    gradientClasses: 'from-pink-500 to-red-500'
  },
  { 
    label: 'Client Satisfaction', 
    value: '98%', 
    description: 'Based on feedback',
    gradientClasses: 'from-red-500 to-orange-500'
  },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Impact by Numbers"
          subtitle="See how ProposalForge transforms proposal creation efficiency"
          centered={true}
        />
        <StatsGrid stats={stats} />
      </div>
    </section>
  );
}