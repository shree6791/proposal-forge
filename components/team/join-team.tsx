"use client";

import { CTAContainer } from '../ui/cta/cta-container';
import { CTAContent } from '../ui/cta/cta-content';
import { CTAButtons } from '../ui/cta/cta-buttons';

export function JoinTeam() {
  return (
    <CTAContainer>
      <CTAContent
        title="Join Our Growing Team"
        description="We're always looking for talented individuals who share our passion for innovation and excellence."
      >
        <CTAButtons
          primaryLink="/contact"
          primaryText="Get in Touch"
          secondaryLink="/about"
          secondaryText="Learn More"
        />
      </CTAContent>
    </CTAContainer>
  );
}