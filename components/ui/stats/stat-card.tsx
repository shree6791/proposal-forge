"use client";

interface StatCardProps {
  label: string;
  value: string;
  description: string;
  gradientClasses: string;
}

export function StatCard({ label, value, description, gradientClasses }: StatCardProps) {
  return (
    <div className="group relative p-6 bg-white rounded-xl border border-neutral-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
      
      <div className="relative">
        <div className={`text-4xl font-bold bg-gradient-to-r ${gradientClasses} text-transparent bg-clip-text mb-2`}>
          {value}
        </div>
        <div className="text-lg font-semibold text-neutral-900 mb-1">{label}</div>
        <div className="text-sm text-neutral-600">{description}</div>
      </div>
    </div>
  );
}