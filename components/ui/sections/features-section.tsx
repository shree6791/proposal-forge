"use client";

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { fadeIn, stagger } from '@/lib/animations/variants';
import { 
  Sparkles, Clock, Shield, 
  BarChart, FileCheck, Bot 
} from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "AI-Powered Generation",
    description: "Create professional proposals in minutes with our advanced AI technology",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Clock,
    title: "70% Time Savings",
    description: "Reduce proposal creation time from days to hours with automated workflows",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with industry standards",
    gradient: "from-pink-500 to-red-500"
  },
  {
    icon: BarChart,
    title: "Smart Analytics",
    description: "Track proposal performance and optimize win rates with data insights",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: FileCheck,
    title: "Industry Templates",
    description: "Pre-built templates tailored for your specific industry needs",
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    icon: Bot,
    title: "Custom Workflows",
    description: "Flexible automation rules that adapt to your business processes",
    gradient: "from-yellow-500 to-green-500"
  }
];

export function FeaturesSection() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 transition-colors duration-1000" />
        <motion.div 
          className="absolute top-1/4 -right-48 w-[600px] h-[600px] bg-blue-400/20 rounded-full filter blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute -bottom-24 -left-48 w-[600px] h-[600px] bg-purple-400/20 rounded-full filter blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={stagger.container}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Powerful Features
          </motion.div>
          
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Everything you need to create
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"> winning proposals</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Our AI-powered platform streamlines your proposal creation process from start to finish
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeIn}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div 
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 text-white transform transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon className="w-6 h-6" />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>

              {/* Enhanced gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.05] rounded-2xl transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}