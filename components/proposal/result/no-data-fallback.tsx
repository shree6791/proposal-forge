"use client";

import { BackButton } from '@/components/ui/button/back-button';

interface NoDataFallbackProps {
  error?: string | null;
}

export function NoDataFallback({ error }: NoDataFallbackProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {error || "No proposal data found"}
          </h1>
          <p className="mb-8">Please generate a proposal first.</p>
          <BackButton href="/inputproposal" label="Go to Proposal Form" />
        </div>
      </div>
    </div>
  );
}