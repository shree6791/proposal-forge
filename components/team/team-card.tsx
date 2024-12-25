"use client";

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  gradient: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export function TeamCard({ name, role, description, gradient, socialLinks }: TeamMemberProps) {
  return (
    <motion.div 
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
      whileHover={{ y: -8 }}
    >
      {/* Gradient border - now full height */}
      <div className={`absolute w-1 top-0 bottom-0 left-0 bg-gradient-to-b ${gradient} transition-all duration-300 group-hover:w-full opacity-10`} />

      <div className="relative p-8 flex flex-col h-full z-10">
        {/* Avatar with enhanced gradient */}
        <motion.div 
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-2xl font-bold mb-6 transform transition-transform duration-300 group-hover:scale-110 shadow-lg`}
        >
          {name[0]}
        </motion.div>
        
        {/* Content */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <p className={`text-lg font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent mt-2`}>
            {role}
          </p>
          <p className="text-gray-600 leading-relaxed mt-4 flex-grow">
            {description}
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6 pt-4 border-t border-gray-100">
            {socialLinks.linkedin && (
              <SocialLink href={socialLinks.linkedin} icon={Linkedin} gradient={gradient} />
            )}
            {socialLinks.twitter && (
              <SocialLink href={socialLinks.twitter} icon={Twitter} gradient={gradient} />
            )}
            {socialLinks.email && (
              <SocialLink href={`mailto:${socialLinks.email}`} icon={Mail} gradient={gradient} />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SocialLink({ href, icon: Icon, gradient }: { href: string; icon: any; gradient: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className={`
        w-10 h-10 rounded-lg flex items-center justify-center 
        transition-all duration-200 
        bg-gray-50 text-gray-400
        group-hover:bg-gray-100 group-hover:text-gray-900
        relative z-10
      `}>
        <Icon className="w-5 h-5" />
      </div>
    </motion.a>
  );
}