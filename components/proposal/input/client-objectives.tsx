"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileUpload } from './file-upload';
import { PredefinedObjectives } from './objectives/predefined-objectives';
import { ObjectivesDivider } from './objectives/objectives-divider';
import { SelectedObjectives } from './objectives/selected-objectives';
import { ProTip } from '@/components/ui/pro-tip';

interface ClientObjectivesProps {
  selectedObjectives: string[];
  onChange: (objectives: string[]) => void;
}

export function ClientObjectives({ selectedObjectives, onChange }: ClientObjectivesProps) {
  const [error, setError] = useState<string | null>(null);

  const handleObjectivesExtracted = (objectives: string[]) => {
    const mergedObjectives = [...new Set([...selectedObjectives, ...objectives])];
    onChange(mergedObjectives);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const handleRemoveObjective = (objectiveToRemove: string) => {
    onChange(selectedObjectives.filter(obj => obj !== objectiveToRemove));
  };

  return (
    <div className="space-y-6">
      <ProTip>
        For a more comprehensive proposal, try both uploading your objectives document 
        and selecting from our predefined objectives. This combination helps us better 
        understand your needs.
      </ProTip>

      {/* File Upload Section */}
      <div className="bg-white p-8 rounded-xl border-2 border-dashed border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Upload Your Objectives Document</h3>
        <p className="text-gray-600 text-sm mb-6">
          Upload a document containing your business objectives. You can upload multiple times to add more objectives.
        </p>
        <FileUpload 
          onObjectivesExtracted={handleObjectivesExtracted}
          onError={handleError}
        />
      </div>

      {/* Divider */}
      <ObjectivesDivider />

      {/* Predefined Objectives */}
      <PredefinedObjectives 
        selectedObjectives={selectedObjectives}
        onChange={onChange}
      />

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-red-50 text-red-600 rounded-lg"
        >
          {error}
        </motion.div>
      )}

      {/* Selected Objectives Summary */}
      <SelectedObjectives 
        objectives={selectedObjectives}
        onRemove={handleRemoveObjective}
      />
    </div>
  );
}