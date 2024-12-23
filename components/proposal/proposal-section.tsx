import React from 'react';

interface ProposalSectionProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick?: () => void;
  isDisabled?: boolean;
}

export function ProposalSection({ 
  title, 
  content, 
  buttonText, 
  onButtonClick, 
  isDisabled = false 
}: ProposalSectionProps) {
  return (
    <>
      <div className="text-left mb-4">
        <button
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded shadow-md"
          onClick={onButtonClick}
          disabled={isDisabled}
        >
          {buttonText}
        </button>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md overflow-y-scroll max-h-96 border-2 border-blue-900 max-w-5xl mb-8">
        <pre className="whitespace-pre-line font-[Arial]" style={{ fontFamily: "Arial, sans-serif" }}>
          {content}
        </pre>
      </div>
    </>
  );
}