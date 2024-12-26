"use client";

import { useState } from 'react';
import { useProposal } from '@/hooks/use-proposal';
import { ResultHeader } from '@/components/proposal/result/result-header';
import { ProposalContent } from '@/components/proposal/result/proposal-content';
import { DownloadSection } from '@/components/proposal/result/download-section';
import { CostSection } from '@/components/proposal/result/cost-section';
import { NoDataFallback } from '@/components/proposal/result/no-data-fallback';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { calculateCosts } from '@/lib/cost-calculator';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { motion } from 'framer-motion';
import { GenerationProgress } from '@/components/proposal/result/generation-progress';
import { Toast, ToastContainer } from '@/components/ui/toast';
import { RefreshCw, ArrowLeft } from 'lucide-react';

interface ToastState {
  message: string;
  type: 'success' | 'error';
}

export default function ResultPage() {
  const { 
    proposal, 
    generatePart2, 
    isGeneratingPart2, 
    error,
    regenerateProposal 
  } = useProposal();
  const [toast, setToast] = useState<ToastState | null>(null);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleRegenerate = async () => {
    setIsRegenerating(true);
    try {
      await regenerateProposal();
      setToast({
        message: 'Proposal regeneration started successfully',
        type: 'success'
      });
    } catch (err) {
      setToast({
        message: err instanceof Error ? err.message : 'Failed to regenerate proposal',
        type: 'error'
      });
    } finally {
      setIsRegenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center flex-1"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Your Generated Proposal
              </h1>
              <p className="text-gray-600">
                Review and download your proposal sections below
              </p>
            </motion.div>
            
            <div className="flex items-center gap-4">
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                href="/inputproposal"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Input
              </motion.a>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleRegenerate}
                disabled={isRegenerating}
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                  transition-all duration-200
                  ${isRegenerating
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'}
                `}
              >
                <RefreshCw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
                {isRegenerating ? 'Regenerating...' : 'Regenerate'}
              </motion.button>
            </div>
          </div>

          <GenerationProgress
            part1Generated={!!proposal?.part1}
            part2Generated={!!proposal?.part2}
            isGeneratingPart2={isGeneratingPart2}
          />

          <div className="space-y-8">
            <ProposalContent
              title="Part 1: Core Proposal Outline"
              content={proposal?.part1 || ''}
              variant="primary"
              isLoading={!proposal?.part1}
            />

            <ProposalContent
              title="Part 2: Advanced Proposal Section"
              content={proposal?.part2 || ''}
              buttonText={!proposal?.part2 && !isGeneratingPart2 ? 'Generate Part 2' : undefined}
              onButtonClick={!proposal?.part2 && !isGeneratingPart2 ? generatePart2 : undefined}
              isDisabled={!proposal?.part1 || isGeneratingPart2}
              variant="secondary"
              isLoading={isGeneratingPart2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <DownloadSection
              isDisabled={!proposal?.part1 || !proposal?.part2}
              proposal={proposal}
            />
          </motion.div>
        </div>
      </div>

      <ToastContainer>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </ToastContainer>
    </div>
  );
}