"use client";

import { motion } from 'framer-motion';
import { FileText, Check } from 'lucide-react';

interface ProposalContentProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick?: () => void;
  isDisabled?: boolean;
}

export function ProposalContent({ 
  title, 
  content, 
  buttonText, 
  onButtonClick, 
  isDisabled = false 
}: ProposalContentProps) {
  const isComplete = content && !content.includes('Loading') && !content.includes('Click');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold">{title}</h2>
          {isComplete && (
            <span className="flex items-center gap-1 text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">
              <Check className="w-4 h-4" />
              Complete
            </span>
          )}
        </div>
        {onButtonClick && (
          <button
            onClick={onButtonClick}
            disabled={isDisabled}
            className={`
              inline-flex items-center px-6 py-3 rounded-lg font-medium
              transition-all duration-200 shadow-sm
              ${isDisabled 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'}
            `}
          >
            <FileText className="w-4 h-4 mr-2" />
            {buttonText}
          </button>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-8 max-h-[500px] overflow-y-auto prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </motion.div>
  );
}