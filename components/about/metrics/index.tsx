"use client";

import { TrendingUp, Users, Award, Globe } from 'lucide-react';
import { MetricCard } from './metric-card';

const metrics = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Users",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    value: "50M+",
    label: "Revenue Generated",
    gradient: "from-pink-500 to-red-500"
  },
  {
    icon: Globe,
    value: "20+",
    label: "Countries",
    gradient: "from-red-500 to-orange-500"
  }
];

export function AboutMetrics() {
  return (
    <section className="py-20 -mt-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              {...metric}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}