"use client";

import { useProposal } from '@/hooks/use-proposal';
import { ResultHeader } from '@/components/proposal/result/result-header';
import { ProposalContent } from '@/components/proposal/result/proposal-content';
import { DownloadSection } from '@/components/proposal/result/download-section';
import { CostSection } from '@/components/proposal/result/cost-section';
import { NoDataFallback } from '@/components/proposal/result/no-data-fallback';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { calculateCosts } from '@/lib/cost-calculator';

export default function ResultPage() {
  const { 
    isLoading,
    error,
    formData,
    proposalPart1,
    proposalPart2,
    buttonText,
    isGeneratingPart2,
    generatePart2,
    downloadAsWord
  } = useProposal();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error || !formData) {
    return <NoDataFallback error={error} />;
  }

  const costs = calculateCosts({
    incidentTickets: formData.incidentTickets,
    serviceRequests: formData.serviceRequests,
    changeTickets: formData.changeTickets,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <ResultHeader 
          companyName={formData.companyName}
          clientName={formData.clientName}
        />

        <ProposalContent
          title="Part 1"
          content={proposalPart1}
          buttonText="Part 1 of Proposal"
        />

        <ProposalContent
          title="Part 2"
          content={proposalPart2}
          buttonText={buttonText}
          onButtonClick={generatePart2}
          isDisabled={isGeneratingPart2}
        />

        <DownloadSection onDownload={downloadAsWord} />
        
        <CostSection costs={costs} />
      </div>
    </div>
  );
}