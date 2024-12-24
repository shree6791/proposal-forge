"use client";

import { HeroBackground } from './hero/hero-background';
import { HeroContent } from './hero/hero-content';
import { HeroIllustration } from './hero/hero-illustration';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export function HeroSection({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <HeroContent 
            title={title}
            subtitle={subtitle}
            ctaText={ctaText}
            ctaLink={ctaLink}
          />

          {/* Illustration Side */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4">
              <div className="w-full h-full bg-gradient-to-r from-blue-50 to-purple-50 opacity-50 blur-3xl" />
            </div>
            <div className="relative">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}