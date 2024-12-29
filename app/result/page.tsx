"use client";

import { useProposal } from '@/hooks/use-proposal';
import { ResultHeader } from '@/components/proposal/result/result-header';
import { ProposalContent } from '@/components/proposal/result/proposal-content';
import { DownloadSection } from '@/components/proposal/result/download-section';
import { CostSection } from '@/components/proposal/result/cost-section';
import { NoDataFallback } from '@/components/proposal/result/no-data-fallback';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { calculateCosts } from '@/lib/cost-calculator';
import { AnimatedBackground } from '@/components/ui/animated-background';

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
    downloadAsWord,
    isEditing,
    editedContent,
    startEditing,
    cancelEditing,
    saveContent,
    handleContentChange
  } = useProposal();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          <LoadingSpinner size="large" />
          <p className="mt-4 text-gray-600 animate-pulse">Preparing your proposal...</p>
        </div>
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
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-12 relative">
        <ResultHeader 
          companyName={formData.companyName}
          clientName={formData.clientName}
        />

        {/* Proposal Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <ProposalContent
            title="Part 1: Core Proposal Outline"
            content={proposalPart1}
            buttonText="Part 1 of Proposal"
            variant="primary"
            isEditing={isEditing.part1}
            editedContent={editedContent.part1}
            onEdit={() => startEditing('part1')}
            onSave={() => saveContent('part1')}
            onCancel={() => cancelEditing('part1')}
            onContentChange={(content) => handleContentChange('part1', content)}
          />

          <ProposalContent
            title="Part 2: Advanced Proposal Section"
            content={proposalPart2}
            buttonText={buttonText}
            onButtonClick={generatePart2}
            isDisabled={isGeneratingPart2}
            variant="secondary"
            isLoading={isGeneratingPart2}
            isEditing={isEditing.part2}
            editedContent={editedContent.part2}
            onEdit={() => startEditing('part2')}
            onSave={() => saveContent('part2')}
            onCancel={() => cancelEditing('part2')}
            onContentChange={(content) => handleContentChange('part2', content)}
          />
        </div>

        {/* Download Section - Full Width */}
        <div className="mb-8">
          <DownloadSection onDownload={downloadAsWord} />
        </div>

        {/* Cost Section - Full Width */}
        <div>
          <CostSection costs={costs} />
        </div>
      </div>
    </div>
  );
}