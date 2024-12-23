import { StatsGrid } from '../stats-grid';

export function StatsSection() {
  const stats = [
    { label: 'Proposals Generated', value: '10,000+', description: 'And counting' },
    { label: 'Time Saved', value: '70%', description: 'Average reduction in proposal creation time' },
    { label: 'Success Rate', value: '85%', description: 'Proposal acceptance rate' },
    { label: 'Client Satisfaction', value: '98%', description: 'Based on feedback' },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <StatsGrid stats={stats} />
      </div>
    </section>
  );
}