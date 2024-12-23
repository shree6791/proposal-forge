import { TestimonialCard } from '../testimonial-card';
import { SectionHeader } from '../section-header';

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Discover how ProposalForge has transformed proposal creation for businesses worldwide"
        />
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="ProposalForge has transformed our workflow. We've saved countless hours and seen a 50% increase in proposal acceptance rates!"
            author="Ramesh Kumar"
            role="CEO"
            company="TechVision"
          />
          <TestimonialCard
            quote="The accuracy and speed of ProposalForge are unmatched. It's like having a dedicated team working round the clock for you."
            author="Priya Sharma"
            role="Director"
            company="InnovateIndia"
          />
          <TestimonialCard
            quote="We've cut proposal creation time by over 70% thanks to ProposalForge. It's a must-have for any competitive business."
            author="Vikram Malhotra"
            role="Manager"
            company="StratEdge"
          />
        </div>
      </div>
    </section>
  );
}