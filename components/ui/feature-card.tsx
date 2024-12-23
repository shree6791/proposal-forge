import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export function FeatureCard({ icon: Icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div 
      className={`
        rounded-2xl p-[2px] hover:scale-105 transition-all duration-300
        ${gradient}
      `}
    >
      <div className="bg-white rounded-2xl p-8 h-full backdrop-blur-xl">
        <div className="relative">
          <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl" />
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 mb-6">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}