import { ReactNode } from 'react';

interface FeatureGridProps {
  features: {
    title: string;
    description: string;
    icon: ReactNode;
  }[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
            {feature.icon}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}