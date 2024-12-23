"use client";

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export function TeamMemberCard({ name, role, description, image, socialLinks }: TeamMemberProps) {
  return (
    <motion.div 
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Social Links */}
        <div className="absolute bottom-4 right-4 flex space-x-3 z-20">
          {socialLinks.linkedin && (
            <SocialLink href={socialLinks.linkedin} icon={Linkedin} />
          )}
          {socialLinks.twitter && (
            <SocialLink href={socialLinks.twitter} icon={Twitter} />
          )}
          {socialLinks.email && (
            <SocialLink href={`mailto:${socialLinks.email}`} icon={Mail} />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-4">{role}</p>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}