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
      localStorage.setItem("proposalFormData", JSON.stringify(data));
    }
  },

  getFormData: (): FormData | null => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem("proposalFormData");
      return data ? JSON.parse(data) : null;
    }
    return null;
  },

  setProposal: (proposal: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("generatedProposal", proposal);
    }
  },

  getProposal: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("generatedProposal") || "";
    }
    return "";
  },

  clearStorage: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("proposalFormData");
      localStorage.removeItem("generatedProposal");
    }
  }
};