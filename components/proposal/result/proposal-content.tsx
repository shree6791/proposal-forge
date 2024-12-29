"use client";

import { motion } from 'framer-motion';
import { FileText, Loader2, Edit, Save, X } from 'lucide-react';

interface ProposalContentProps {
  title: string;
  content: string;
  buttonText: string;
  onButtonClick?: () => void;
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  isEditing?: boolean;
  editedContent?: string;
  onEdit?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
  onContentChange?: (content: string) => void;
}

export function ProposalContent({ 
  title, 
  content, 
  buttonText, 
  onButtonClick, 
  isDisabled = false,
  variant = 'primary',
  isLoading = false,
  isEditing = false,
  editedContent = "",
  onEdit,
  onSave,
  onCancel,
  onContentChange
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
          <div className="flex items-center gap-2">
            {isEditing ? (
              <>
                <motion.button
                  onClick={onSave}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-green-500 text-white hover:shadow-lg"
                >
                  <Save className="w-4 h-4" />
                  Save
                </motion.button>
                <motion.button
                  onClick={onCancel}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-gray-500 text-white hover:shadow-lg"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </motion.button>
              </>
            ) : (
              <>
                {onEdit && (
                  <motion.button
                    onClick={onEdit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-500 text-white hover:shadow-lg"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </motion.button>
                )}
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
              </>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 max-h-[500px] overflow-y-auto">
        <div className="prose prose-lg max-w-none">
          {isEditing ? (
            <textarea
              value={editedContent}
              onChange={(e) => onContentChange?.(e.target.value)}
              className="w-full h-[400px] p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your content here..."
            />
          ) : (
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {content || 'Click the button above to generate this part of the proposal.'}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}