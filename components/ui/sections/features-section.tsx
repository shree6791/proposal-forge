import { FeatureCard } from '../feature-card';
import { SectionHeader } from '../section-header';
import { Clock, Sparkles, FileEdit, Palette } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Key Features"
          subtitle="Explore the standout capabilities that make ProposalForge exceptional"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Clock}
            title="Rapid Proposal Creation"
            description="Generate client-focused, review-ready proposals in minutes with AI"
            gradient="bg-gradient-to-br from-blue-500/10 to-purple-500/10"
          />
          <FeatureCard
            icon={Sparkles}
            title="Client-Centric Approach"
            description="Tailor proposals to client needs and priorities"
            gradient="bg-gradient-to-br from-green-500/10 to-blue-500/10"
          />
          <FeatureCard
            icon={FileEdit}
            title="Accurate & Error-Free"
            description="Ensure precision with compliance checks and citations"
            gradient="bg-gradient-to-br from-purple-500/10 to-pink-500/10"
          />
          <FeatureCard
            icon={Palette}
            title="Iterate on Strategy"
            description="Focus on strategy while AI refines content and formatting"
            gradient="bg-gradient-to-br from-pink-500/10 to-red-500/10"
          />
        </div>
      </div>
    </section>
  );
}