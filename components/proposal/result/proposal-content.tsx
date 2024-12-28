import { motion } from 'framer-motion';
import { Edit2, Save, X } from 'lucide-react';
import { useState } from 'react';
import { ProposalSkeleton } from '@/components/ui/loading/proposal-skeleton';

interface ProposalContentProps {
  title: string;
  content: string;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  onSave?: (content: string) => void;
}

export function ProposalContent({ 
  title, 
  content, 
  variant = 'primary',
  isLoading = false,
  onSave
}: ProposalContentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const gradients = {
    primary: 'from-blue-600 to-purple-600',
    secondary: 'from-purple-600 to-pink-600'
  };

  const handleSave = () => {
    if (onSave) {
      onSave(editedContent);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedContent(content);
    setIsEditing(false);
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
          {!isLoading && !isEditing && (
            <motion.button
              onClick={() => {
                setEditedContent(content);
                setIsEditing(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </motion.button>
          )}
          {isEditing && (
            <div className="flex gap-2">
              <motion.button
                onClick={handleSave}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-green-500 text-white hover:bg-green-600"
              >
                <Save className="w-4 h-4" />
                Save
              </motion.button>
              <motion.button
                onClick={handleCancel}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                <X className="w-4 h-4" />
                Cancel
              </motion.button>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6 max-h-[500px] overflow-y-auto">
        {isLoading ? (
          <ProposalSkeleton />
        ) : (
          <div className="prose prose-lg max-w-none">
            {isEditing ? (
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="w-full h-[400px] p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {content || 'No content available.'}
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}