"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NavBar } from '@/components/navigation/nav-bar';
import { useAuth } from '@/hooks/use-auth';
import { ClientStorage } from "@/lib/client-storage";
import { FormSteps } from '@/components/ui/form/form-steps';
import { FormSection } from '@/components/ui/form/form-section';
import { TopicSelection } from '@/components/ui/form/topic-selection';
import { ClientObjectives } from '@/components/ui/form/client-objectives';
import { TicketInputs } from '@/components/ui/form/ticket-inputs';
import { SimpleToast } from '@/components/ui/feedback/simple-toast';
import { useFormSteps } from '@/lib/hooks/use-form-steps';
import { BaseInput } from '@/components/ui/input/base-input';

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
    
    if (!steps.every(step => step.isCompleted)) {
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

      if (!response.ok) {
        throw new Error("Failed to generate proposal");
      }

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
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8">
        <FormSteps steps={steps} />

        <form onSubmit={handleSubmit} className="space-y-8">
          <FormSection 
            title="Select Proposal Topic" 
            description="Choose the type of proposal you want to generate"
          >
            <TopicSelection
              selectedTopic={formData.selectedTopic}
              onTopicChange={(topic) => handleInputChange('selectedTopic', topic)}
            />
          </FormSection>

          {formData.selectedTopic && (
            <FormSection 
              title="Company Details" 
              description="Enter your company and client information"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          )}

          {formData.companyName && formData.clientName && (
            <FormSection 
              title="Client Objectives" 
              description="Select all objectives that apply"
            >
              <ClientObjectives
                selectedObjectives={formData.clientObjectives}
                onChange={(objectives) => handleInputChange('clientObjectives', objectives)}
              />
            </FormSection>
          )}

          {formData.clientObjectives.length > 0 && (
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
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={!steps.every(step => step.isCompleted) || isProcessing}
              className={`
                w-full py-3 px-4 rounded
                ${!steps.every(step => step.isCompleted) || isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-900 hover:bg-blue-800'}
                text-white font-medium
              `}
            >
              {isProcessing
                ? "Processing...ProposalForge is hard at work crafting your masterpiece."
                : "Generate Proposal"}
            </button>
          </div>
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