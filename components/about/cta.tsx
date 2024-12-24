"use client";

import { CTAContainer } from '../ui/cta/cta-container';
import { CTAContent } from '../ui/cta/cta-content';
import { CTAButtons } from '../ui/cta/cta-buttons';

export function AboutCTA() {
  return (
    <CTAContainer>
      <CTAContent
        title="Ready to Transform Your Proposal Process?"
        description="Join thousands of businesses creating winning proposals with ProposalForge's AI-powered platform."
      >
        <CTAButtons
          primaryLink="/credentials"
          primaryText="Get Started Now"
          secondaryLink="/contact"
          secondaryText="Contact Sales"
        />
      </CTAContent>
    </CTAContainer>
  );
}