import { useState, useEffect } from "react";
import { ClientStorage } from "@/lib/client-storage";
import type { FormData } from '@/lib/client-storage';

export function useProposal() {
  const [isLoading, setIsLoading] = useState(true);
  const [proposalPart1, setProposalPart1] = useState("");
  const [proposalPart2, setProposalPart2] = useState("");
  const [isGeneratingPart2, setIsGeneratingPart2] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to update Part 1
  const updatePart1 = (content: string) => {
    setProposalPart1(content);
    ClientStorage.setProposal(content);
  };

  // Function to update Part 2
  const updatePart2 = (content: string) => {
    setProposalPart2(content);
    ClientStorage.setProposalPart2(content);
  };

  // Function to generate Part 2
  const generatePart2 = async (isAuto = false) => {
    if (!formData) return;
    
    setIsGeneratingPart2(true);

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
        updatePart2(data.result);
      } else {
        console.error(`Part 2 ${isAuto ? 'auto-' : ''}generation failed:`, response.status);
        setProposalPart2(isAuto ? "" : "Error generating Part 2 of the proposal.");
      }
    } catch (error) {
      console.error(`Part 2 ${isAuto ? 'auto-' : ''}generation error:`, error);
      setProposalPart2(isAuto ? "" : "Failed to connect to the API.");
    } finally {
      setIsGeneratingPart2(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedProposal = ClientStorage.getProposal();
        const storedFormData = ClientStorage.getFormData();
        const storedPart2 = ClientStorage.getProposalPart2();

        if (!storedFormData) {
          setError("No proposal data found. Please generate a proposal first.");
          return;
        }

        setProposalPart1(storedProposal || "No proposal content available.");
        setFormData(storedFormData);

        if (storedPart2) {
          setProposalPart2(storedPart2);
        } else if (storedProposal) {
          await generatePart2(true);
        }
      } catch (err) {
        setError("Failed to load proposal data.");
        console.error("Error loading data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

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

  return {
    isLoading,
    error,
    formData,
    proposalPart1,
    proposalPart2,
    isGeneratingPart2,
    generatePart2: () => generatePart2(false),
    downloadAsWord,
    updatePart1,
    updatePart2
  };
}