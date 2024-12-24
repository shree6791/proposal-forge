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
    gradient: "from-blue-500 to-purple-500"
  },
  {
    quote: "The AI-powered insights and industry-specific templates have given us a competitive edge in enterprise deals.",
    author: "Michael Rodriguez",
    role: "Head of Business Development",
    company: "Enterprise Systems Inc",
    rating: 5,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    quote: "Finally, a proposal solution that understands B2B complexity. The automation and compliance features are game-changing.",
    author: "Jessica Park",
    role: "Director of Operations",
    company: "Global Solutions Ltd",
    rating: 5,
    gradient: "from-pink-500 to-red-500"
  }
];

export function TestimonialsSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 transition-colors duration-1000" />
        <motion.div 
          className="absolute top-0 -right-48 w-[800px] h-[800px] bg-blue-400/10 rounded-full mix-blend-multiply filter blur-[140px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 -left-48 w-[800px] h-[800px] bg-purple-400/10 rounded-full mix-blend-multiply filter blur-[140px]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
                  <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg transform transition-transform duration-300 group-hover:scale-110`}>
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>

              {/* Enhanced gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}