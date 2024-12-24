"use client";

import { CheckCircle } from 'lucide-react';
import { CTAContainer } from '../cta/cta-container';
import { CTAContent } from '../cta/cta-content';
import { CTAButtons } from '../cta/cta-buttons';

const benefits = [
  "No credit card required",
  "14-day free trial",
  "Enterprise-ready features"
];

export function CTASection() {
  return (
    <CTAContainer>
      <CTAContent
        title="Start creating winning proposals today"
        description="Join thousands of businesses using ProposalForge to accelerate their sales process and win more deals."
      >
        <div className="space-y-8">
          <CTAButtons
            primaryLink="/credentials"
            primaryText="Get Started Free"
            secondaryLink="/contact"
            secondaryText="Schedule Demo"
          />

          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </CTAContent>
    </CTAContainer>
  );
}