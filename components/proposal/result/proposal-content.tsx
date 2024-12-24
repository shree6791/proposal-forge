"use client";

import { motion } from 'framer-motion';
import { FileText, Loader2 } from 'lucide-react';

interface ProposalContentProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick?: () => void;
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export function ProposalContent({ 
  title, 
  content, 
  buttonText, 
  onButtonClick, 
  isDisabled = false,
  variant = 'primary',
  isLoading = false
}: ProposalContentProps) {
  const gradients = {
    primary: 'from-blue-600 to-purple-600',
    secondary: 'from-purple-600 to-pink-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
    >
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between gap-4">
          <h2 className={`text-xl font-semibold bg-gradient-to-r ${gradients[variant]} bg-clip-text text-transparent`}>
            {title}
          </h2>
          {onButtonClick && (
            <motion.button
              onClick={onButtonClick}
              disabled={isDisabled}
              whileHover={{ scale: isDisabled ? 1 : 1.02 }}
              whileTap={{ scale: isDisabled ? 1 : 0.98 }}
              className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                transition-all duration-200
                ${isDisabled 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : `bg-gradient-to-r ${gradients[variant]} text-white hover:shadow-lg`}
              `}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  {buttonText}
                </>
              )}
            </motion.button>
          )}
        </div>
      </div>
      
      <div className="p-6 max-h-[500px] overflow-y-auto">
        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-line text-gray-700 leading-relaxed">
            {content || 'Click the button above to generate this part of the proposal.'}
          </div>
        </div>
      </div>
    </motion.div>
  );
}