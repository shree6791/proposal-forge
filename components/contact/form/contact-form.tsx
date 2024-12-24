"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { FormInput } from './form-input';
import { FormTextarea } from './form-textarea';
import { SuccessMessage } from './success-message';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  if (isSuccess) {
    return <SuccessMessage onReset={() => setIsSuccess(false)} />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      <div className="space-y-6 flex-grow">
        <FormInput
          label="Name"
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
          error={errors.name}
          required
        />

        <FormInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
          error={errors.email}
          required
        />

        <FormInput
          label="Subject"
          value={formData.subject}
          onChange={(value) => setFormData({ ...formData, subject: value })}
        />

        <FormTextarea
          label="Message"
          value={formData.message}
          onChange={(value) => setFormData({ ...formData, message: value })}
          error={errors.message}
          required
          rows={6}
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`
          w-full px-6 py-4 rounded-xl font-medium text-white mt-6
          transition-all duration-300
          flex items-center justify-center gap-2
          ${isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-[1.02]'}
        `}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}