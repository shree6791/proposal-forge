"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SelectedObjectivesProps {
  objectives: string[];
  onRemove: (objective: string) => void;
}

export function SelectedObjectives({ objectives, onRemove }: SelectedObjectivesProps) {
  if (objectives.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-50/50 p-6 rounded-lg"
    >
      <h4 className="font-medium text-blue-600 mb-4">
        Selected Objectives ({objectives.length})
        <span className="text-sm text-gray-500 ml-2">Click × to remove any objective</span>
      </h4>
      <AnimatePresence mode="popLayout">
        <ul className="space-y-3">
          {objectives.map((objective) => (
            <motion.li
              key={objective}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-start gap-3 bg-white rounded-lg p-3 group hover:bg-gray-50 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <span className="text-gray-700 flex-grow">{objective}</span>
              <button
                onClick={() => onRemove(objective)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                aria-label="Remove objective"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.li>
          ))}
        </ul>
      </AnimatePresence>
    </motion.div>
  );
}