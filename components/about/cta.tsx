"use client";

import { CTABackground } from './cta/cta-background';
import { CTAContent } from './cta/cta-content';
import { CTAButtons } from './cta/cta-buttons';

export function AboutCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <CTABackground />
      
      <div className="container mx-auto px-4 relative">
        <CTAContent />
        <CTAButtons />
      </div>
    </section>
  );
}