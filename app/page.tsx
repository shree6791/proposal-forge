"use client";

import { HeroSection } from '@/components/ui/hero-section';
import { StatsSection } from '@/components/ui/sections/stats-section';
import { FeaturesSection } from '@/components/ui/sections/features-section';
import { TestimonialsSection } from '@/components/ui/sections/testimonials-section';
import { CTASection } from '@/components/ui/sections/cta-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Create Winning B2B Proposals in Minutes"
        subtitle="Transform your sales process with AI-powered proposals that win more deals. Save time, increase accuracy, and close more business."
        ctaText="Start Creating Proposals"
        ctaLink="/credentials"
      />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}