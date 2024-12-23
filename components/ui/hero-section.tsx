import { Button } from './button';
import Link from 'next/link';
import { AnimatedBackground } from './animated-background';
import { GradientText } from './gradient-text';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export function HeroSection({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 animate-fade-in">
            <GradientText 
              text={title}
              gradient="from-blue-600 via-purple-600 to-red-600"
              className="font-extrabold"
            />
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            {subtitle}
          </p>
          <div className="mt-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Link href={ctaLink}>
              <Button className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl rounded-full">
                {ctaText}
                <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}