"use client";

import { HeroBackground } from './hero/hero-background';
import { HeroTitle } from './hero/hero-title';
import { HeroSubtitle } from './hero/hero-subtitle';
import { HeroCta } from './hero/hero-cta';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export function HeroSection({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <HeroTitle title={title} />
          <HeroSubtitle subtitle={subtitle} />
          <HeroCta text={ctaText} link={ctaLink} />
        </div>
      </div>
    </section>
  );
}