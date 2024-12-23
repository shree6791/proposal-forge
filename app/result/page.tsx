"use client";

import React, { useState, useEffect } from "react";
import { NavBar } from '@/components/navigation/nav-bar';
import { ProposalSection } from '@/components/proposal/proposal-section';
import { CostTable } from '@/components/proposal/cost-table';
import { calculateCosts } from '@/lib/cost-calculator';
import { ClientStorage } from "@/lib/client-storage";
import { BackButton } from '@/components/ui/button/back-button';
import type { FormData } from '@/lib/client-storage';

export default function ResultPage() {
  const [proposalPart1, setProposalPart1] = useState("Loading Part 1...");
  const [proposalPart2, setProposalPart2] = useState(
    "Click 'Generate Part 2 of Proposal' to load content."
  );
  const [buttonText, setButtonText] = useState("Generate Part 2 of Proposal");
  const [isGeneratingPart2, setIsGeneratingPart2] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const storedProposal = ClientStorage.getProposal();
    const storedFormData = ClientStorage.getFormData();
    
    setProposalPart1(storedProposal);
    setFormData(storedFormData);
  }, []);

  const generatePart2 = async () => {
    if (!formData) return;
    
    setIsGeneratingPart2(true);
    setButtonText("Generating Part 2...");

    try {
      const response = await fetch("/api/generatePart2Proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: formData.companyName,
          clientName: formData.clientName,
          model: formData.model,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setProposalPart2(data.result);
      } else {
        setProposalPart2("Error generating Part 2 of the proposal.");
      }
    } catch (error) {
      setProposalPart2("Failed to connect to the API.");
      console.error("API Request Error:", error);
    } finally {
      setIsGeneratingPart2(false);
      setButtonText("Part 2 of Proposal");
    }
  };

  const downloadAsWord = async () => {
    if (!formData) return;

    try {
      const response = await fetch("/api/generateWord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: formData.companyName,
          clientName: formData.clientName,
          part1Content: proposalPart1,
          part2Content: proposalPart2,
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        const fileName = `${formData.companyName.replace(/[^a-zA-Z0-9]/g, '_')}_Proposal_for_${formData.clientName.replace(/[^a-zA-Z0-9]/g, '_')}.docx`;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      } else {
        console.error("Error generating Word document");
        alert("Failed to generate Word document. Please try again.");
      }
    } catch (error) {
      console.error("Download Error:", error);
      alert("Failed to download document. Please try again.");
    }
  };

  const costs = formData ? calculateCosts({
    incidentTickets: formData.incidentTickets,
    serviceRequests: formData.serviceRequests,
    changeTickets: formData.changeTickets,
  }) : {
    monthlyCost: 0,
    year1Cost: 0,
    year2Cost: 0,
    year3Cost: 0,
  };

  if (!formData) {
    return (
      <div className="min-h-screen bg-white text-black">
        <NavBar />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">No proposal data found</h1>
            <p className="mb-8">Please generate a proposal first.</p>
            <BackButton href="/inputproposal" label="Go to Proposal Form" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <BackButton href="/inputproposal" className="mb-4" />
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Generated Proposal
          </h1>
          <h2 className="text-xl text-gray-700 mb-8">
            {`${formData.companyName}'s proposal for ${formData.clientName}`}
          </h2>
        </div>

        <ProposalSection
          title="Part 1"
          content={proposalPart1}
          buttonText="Part 1 of Proposal"
        />

        <ProposalSection
          title="Part 2"
          content={proposalPart2}
          buttonText={buttonText}
          onButtonClick={generatePart2}
          isDisabled={isGeneratingPart2}
        />

        <div className="text-left mb-8">
          <button
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded shadow-md"
            onClick={downloadAsWord}
          >
            Download as MS Word
          </button>
        </div>

        <h2 className="text-3xl font-bold text-blue-900 mb-7">
          Budgetary Quote Based on Ticket Data
        </h2>
        
        <CostTable costs={costs} />
      </div>
    </div>
  );
}