import { ArrowRight } from 'lucide-react';
import { theme } from '@/lib/design-system/theme';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Proposal Process?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of businesses creating winning proposals with ProposalForge
        </p>
        <a 
          href="/credentials" 
          className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-neutral-50 transition-colors duration-200"
        >
          Get Started Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
}