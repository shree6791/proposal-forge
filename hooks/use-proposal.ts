import { useState, useEffect } from "react";
import { ClientStorage } from "@/lib/client-storage";
import type { FormData } from '@/lib/client-storage';

export function useProposal() {
  const [isLoading, setIsLoading] = useState(true);
  const [proposalPart1, setProposalPart1] = useState("");
  const [proposalPart2, setProposalPart2] = useState("");
  const [buttonText, setButtonText] = useState("Part 2 of Proposal");
  const [isGeneratingPart2, setIsGeneratingPart2] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState({ part1: false, part2: false });
  const [editedContent, setEditedContent] = useState({ part1: "", part2: "" });

  // Save edited content
  const saveContent = (part: 'part1' | 'part2') => {
    if (part === 'part1') {
      setProposalPart1(editedContent.part1);
      ClientStorage.setProposal(editedContent.part1);
    } else {
      setProposalPart2(editedContent.part2);
      ClientStorage.setProposalPart2(editedContent.part2);
    }
    setIsEditing({ ...isEditing, [part]: false });
  };

  // Start editing
  const startEditing = (part: 'part1' | 'part2') => {
    setEditedContent({
      ...editedContent,
      [part]: part === 'part1' ? proposalPart1 : proposalPart2
    });
    setIsEditing({ ...isEditing, [part]: true });
  };

  // Cancel editing
  const cancelEditing = (part: 'part1' | 'part2') => {
    setIsEditing({ ...isEditing, [part]: false });
  };

  // Handle content change
  const handleContentChange = (part: 'part1' | 'part2', content: string) => {
    setEditedContent({ ...editedContent, [part]: content });
  };

  // Function to generate Part 2
  const generatePart2 = async (isAuto = false) => {
    if (!formData) return;
    
    console.log(`${isAuto ? 'Auto-generating' : 'Manually generating'} Part 2`);
    setIsGeneratingPart2(true);
    setButtonText(isAuto ? "Auto-generating Part 2..." : "Generating Part 2...");

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
        console.log(`Part 2 ${isAuto ? 'auto-' : ''}generation successful`);
        setProposalPart2(data.result);
        ClientStorage.setProposalPart2(data.result);
      } else {
        console.error(`Part 2 ${isAuto ? 'auto-' : ''}generation failed:`, response.status);
        setProposalPart2(isAuto ? "" : "Error generating Part 2 of the proposal.");
        if (!isAuto) {
          console.error("Failed to generate Part 2");
        }
      }
    } catch (error) {
      console.error(`Part 2 ${isAuto ? 'auto-' : ''}generation error:`, error);
      setProposalPart2(isAuto ? "" : "Failed to connect to the API.");
      if (!isAuto) {
        console.error("API Request Error:", error);
      }
    } finally {
      setIsGeneratingPart2(false);
      setButtonText("Part 2 of Proposal");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedProposal = ClientStorage.getProposal();
        const storedFormData = ClientStorage.getFormData();
        const storedPart2 = ClientStorage.getProposalPart2();
        
        console.log('Stored data check:', {
          hasProposal: !!storedProposal,
          hasPart2: !!storedPart2
        });

        if (!storedFormData) {
          setError("No proposal data found. Please generate a proposal first.");
          return;
        }

        setProposalPart1(storedProposal || "No proposal content available.");
        setFormData(storedFormData);

        // Set Part 2 if it exists in storage
        if (storedPart2) {
          console.log('Loading existing Part 2 from storage');
          setProposalPart2(storedPart2);
        }
        // Auto-generate Part 2 if Part 1 exists and Part 2 doesn't
        else if (storedProposal) {
          console.log('Starting auto-generation of Part 2');
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
    buttonText,
    isGeneratingPart2,
    generatePart2: () => generatePart2(false),
    downloadAsWord,
    isEditing,
    editedContent,
    startEditing,
    cancelEditing,
    saveContent,
    handleContentChange
  };
}