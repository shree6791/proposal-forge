"use client";

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { fadeIn } from '@/lib/animations/variants';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "ProposalForge has transformed our sales process. We've increased our win rate by 45% and cut proposal creation time by 70%.",
    author: "Sarah Chen",
    role: "VP of Sales",
    company: "TechVision Solutions",
    rating: 5,
    image: "/images/testimonials/sarah.jpg"
  },
  {
    quote: "The AI-powered insights and industry-specific templates have given us a competitive edge in enterprise deals.",
    author: "Michael Rodriguez",
    role: "Head of Business Development",
    company: "Enterprise Systems Inc",
    rating: 5,
    image: "/images/testimonials/michael.jpg"
  },
  {
    quote: "Finally, a proposal solution that understands B2B complexity. The automation and compliance features are game-changing.",
    author: "Jessica Park",
    role: "Director of Operations",
    company: "Global Solutions Ltd",
    rating: 5,
    image: "/images/testimonials/jessica.jpg"
  }
];

export function TestimonialsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Customer Success Stories
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Trusted by industry leaders
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={fadeIn}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 left-6" />
              
              <div className="relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 relative z-10">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}