"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from '@/lib/framer-motion';
import { useAuth } from '@/hooks/use-auth';
import { useFormValidation } from '@/hooks/use-form-validation';
import { ClientStorage } from "@/lib/client-storage";
import { FormSteps } from '@/components/ui/form/form-steps';
import { FormSection } from '@/components/ui/form/form-section';
import { TopicSelection } from '@/components/ui/form/topic-selection';
import { ClientObjectives } from '@/components/ui/form/client-objectives';
import { TicketInputs } from '@/components/ui/form/ticket-inputs';
import { SimpleToast } from '@/components/ui/feedback/simple-toast';
import { useFormSteps } from '@/lib/hooks/use-form-steps';
import { BaseInput } from '@/components/ui/input/base-input';
import { Sparkles } from 'lucide-react';

const initialSteps = [
  { id: 'topic', title: 'Topic', isCompleted: false, isActive: true },
  { id: 'details', title: 'Details', isCompleted: false, isActive: false },
  { id: 'objectives', title: 'Objectives', isCompleted: false, isActive: false },
  { id: 'tickets', title: 'Tickets', isCompleted: false, isActive: false }
];

export default function InputProposalPage() {
  useAuth(true);
  const router = useRouter();
  const { steps, updateStepStatus } = useFormSteps(initialSteps);
  const { isFormComplete } = useFormValidation();
  
  const [formData, setFormData] = useState({
    companyName: "",
    clientName: "",
    selectedTopic: null,
    clientObjectives: [],
    incidentTickets: 0,
    serviceRequests: 0,
    changeTickets: 0,
    model: "gpt-4o-mini" as const,
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    updateStepStatus(formData);
  }, [formData, updateStepStatus]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormComplete(formData)) {
      setToastMessage("Please complete all sections before generating the proposal.");
      setShowToast(true);
      return;
    }

    setIsProcessing(true);
    try {
      const response = await fetch("/api/generateProposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to generate proposal");

      const { proposal } = await response.json();
      
      ClientStorage.setFormData(formData);
      ClientStorage.setProposal(proposal);

      router.push('/result');
    } catch (error) {
      console.error("Error generating proposal:", error);
      setToastMessage("Failed to generate proposal. Please try again.");
      setShowToast(true);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Proposal Generator
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Create Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Winning Proposal
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Follow our guided process to generate a professional, AI-powered proposal tailored to your needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-24">
        <FormSteps steps={steps} />

        <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
          {/* Topic Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <FormSection 
              title="Select Proposal Topic" 
              description="Choose the type of proposal you want to generate"
            >
              <TopicSelection
                selectedTopic={formData.selectedTopic}
                onTopicChange={(topic) => handleInputChange('selectedTopic', topic)}
              />
            </FormSection>
          </motion.div>

          {/* Company Details */}
          {formData.selectedTopic && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <FormSection 
                title="Company Details" 
                description="Enter your company and client information"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <BaseInput
                    label="Your Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    required
                  />
                  <BaseInput
                    label="Client Name"
                    name="clientName"
                    value={formData.clientName}
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    required
                  />
                </div>
              </FormSection>
            </motion.div>
          )}

          {/* Client Objectives */}
          {formData.companyName && formData.clientName && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <FormSection 
                title="Client Objectives" 
                description="Select all objectives that apply"
              >
                <ClientObjectives
                  selectedObjectives={formData.clientObjectives}
                  onChange={(objectives) => handleInputChange('clientObjectives', objectives)}
                />
              </FormSection>
            </motion.div>
          )}

          {/* Ticket Information */}
          {formData.clientObjectives.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <FormSection 
                title="Ticket Information" 
                description="Enter monthly ticket volumes"
              >
                <TicketInputs
                  incidentTickets={formData.incidentTickets}
                  serviceRequests={formData.serviceRequests}
                  changeTickets={formData.changeTickets}
                  onChange={handleInputChange}
                />
              </FormSection>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <button
              type="submit"
              disabled={!isFormComplete(formData) || isProcessing}
              className={`
                px-8 py-4 rounded-xl text-white font-medium
                transition-all duration-300 transform hover:scale-105
                ${!isFormComplete(formData) || isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg'}
              `}
            >
              {isProcessing
                ? "Processing...ProposalForge is hard at work crafting your masterpiece."
                : "Generate Proposal"}
            </button>
          </motion.div>
        </form>
      </div>

      {showToast && (
        <SimpleToast
          message={toastMessage}
          type="error"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}