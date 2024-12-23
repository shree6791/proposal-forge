interface Stat {
  label: string;
  value: string;
  description?: string;
}

interface StatsGridProps {
  stats: Stat[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
          <div className="text-sm font-medium text-gray-900">{stat.label}</div>
          {stat.description && (
            <div className="text-sm text-gray-500 mt-1">{stat.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}