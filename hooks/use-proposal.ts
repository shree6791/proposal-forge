import { useState, useEffect } from "react";
import { ClientStorage } from "@/lib/client-storage";
import { generateProposalParts } from '@/lib/api/proposal-generator';
import { handleAPIError } from '@/lib/api/error-handler';
import { useProposalDownload } from './use-proposal-download';
import type { FormData } from '@/lib/client-storage';

export function useProposal() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPart1Loading, setIsPart1Loading] = useState(true);
  const [isPart2Loading, setIsPart2Loading] = useState(true);
  const [proposalPart1, setProposalPart1] = useState("");
  const [proposalPart2, setProposalPart2] = useState("");
  const [formData, setFormData] = useState<FormData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const { downloadAsWord } = useProposalDownload();

  const generateProposal = async (data: FormData) => {
    try {
      setIsPart1Loading(true);
      setIsPart2Loading(true);
      setError(null);

      const { part1, part2 } = await generateProposalParts(data);
      
      setProposalPart1(part1);
      setProposalPart2(part2);
      
      // Save to storage
      ClientStorage.setProposal(part1);
      ClientStorage.setProposalPart2(part2);

      setRetryCount(0); // Reset retry count on success
    } catch (err) {
      const apiError = handleAPIError(err);
      console.error('Error generating proposal:', apiError);

      // Retry logic
      if (retryCount < MAX_RETRIES) {
        setRetryCount(prev => prev + 1);
        await generateProposal(data); // Retry
      } else {
        setError(apiError.message);
      }
    } finally {
      setIsPart1Loading(false);
      setIsPart2Loading(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedFormData = ClientStorage.getFormData();
        
        if (!storedFormData) {
          setError("No proposal data found. Please generate a proposal first.");
          return;
        }

        setFormData(storedFormData);
        await generateProposal(storedFormData);
      } catch (err) {
        const apiError = handleAPIError(err);
        setError(apiError.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return {
    isLoading,
    isPart1Loading,
    isPart2Loading,
    error,
    formData,
    proposalPart1,
    proposalPart2,
    downloadAsWord: () => downloadAsWord(formData, proposalPart1, proposalPart2),
    updatePart1: (content: string) => {
      setProposalPart1(content);
      ClientStorage.setProposal(content);
    },
    updatePart2: (content: string) => {
      setProposalPart2(content);
      ClientStorage.setProposalPart2(content);
    }
  };
}