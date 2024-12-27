"use client";

export interface FormData {
  companyName: string;
  clientName: string;
  selectedTopic: string | null;
  clientObjectives: string[];
  incidentTickets: number;
  serviceRequests: number;
  changeTickets: number;
  model: "gpt-3.5-turbo" | "gpt-4o-mini";
}

export const ClientStorage = {
  setFormData: (data: FormData) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('formData', JSON.stringify(data));
    }
  },

  getFormData: (): FormData | null => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('formData');
      return data ? JSON.parse(data) : null;
    }
    return null;
  },

  setProposal: (proposal: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('proposal', proposal);
    }
  },

  getProposal: (): string => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('proposal') || '';
    }
    return '';
  },

  setProposalPart2: (proposal: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('proposalPart2', proposal);
    }
  },

  getProposalPart2: (): string => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('proposalPart2') || '';
    }
    return '';
  },

  clearStorage: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('formData');
      localStorage.removeItem('proposal');
      localStorage.removeItem('proposalPart2');
    }
  }
};