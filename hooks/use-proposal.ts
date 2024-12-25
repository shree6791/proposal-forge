import { useState, useEffect } from "react";
import { ClientStorage } from "@/lib/client-storage";
import type { FormData } from '@/lib/client-storage';

export function useProposal() {
  const [isLoading, setIsLoading] = useState(true);
  const [proposalPart1, setProposalPart1] = useState("");
  const [proposalPart2, setProposalPart2] = useState("");
  const [buttonText, setButtonText] = useState("Generate Advanced Proposal");
  const [isGeneratingPart2, setIsGeneratingPart2] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = () => {
      try {
        const storedProposal = ClientStorage.getProposal();
        const storedFormData = ClientStorage.getFormData();
        
        if (!storedFormData) {
          setError("No proposal data found. Please generate a proposal first.");
          return;
        }

        setProposalPart1(storedProposal || "No proposal content available.");
        setFormData(storedFormData);
      } catch (err) {
        setError("Failed to load proposal data.");
        console.error("Error loading data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
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

  return {
    isLoading,
    error,
    formData,
    proposalPart1,
    proposalPart2,
    buttonText,
    isGeneratingPart2,
    generatePart2,
    downloadAsWord
  };
}