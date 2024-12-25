"use client";

import { useState } from 'react';
import { FileUpload } from './file-upload';
import { ObjectivesList } from './objectives-list';

interface ClientObjectivesProps {
  selectedObjectives: string[];
  onChange: (objectives: string[]) => void;
}

export function ClientObjectives({ selectedObjectives, onChange }: ClientObjectivesProps) {
  const [error, setError] = useState<string | null>(null);

  const handleObjectivesExtracted = (objectives: string[]) => {
    onChange(objectives);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Choose your input method:</h3>
        
        <FileUpload 
          onObjectivesExtracted={handleObjectivesExtracted}
          onError={handleError}
        />

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-white text-sm text-gray-500">
              or choose from predefined objectives
            </span>
          </div>
        </div>
      </div>

      <ObjectivesList 
        selectedObjectives={selectedObjectives}
        onChange={onChange}
      />
    </div>
  );
}