interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
  ctaText = "Get Started",
  onCtaClick
}: PricingCardProps) {
  return (
    <div className={`
      relative p-8 bg-white rounded-2xl shadow-lg transition-all duration-300
      ${popular ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'}
    `}>
      {popular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 px-4 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
          Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-500">/month</span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className={`mr-2 ${feature.included ? 'text-green-500' : 'text-red-500'}`}>
              {feature.included ? '✓' : '×'}
            </span>
            <span className={feature.included ? 'text-gray-900' : 'text-gray-500'}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={onCtaClick}
        className={`
          w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200
          ${popular 
            ? 'bg-blue-500 text-white hover:bg-blue-600' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
        `}
      >
        {ctaText}
      </button>
    </div>
  );
}