"use client";

import { motion } from 'framer-motion';

const predefinedObjectives = [
  "High operational and maintenance costs",
  "Frequent application downtime or outages",
  "Difficulty managing legacy systems",
  "Insufficient resources or skilled personnel",
  "Lack of real-time issue resolution",
  "Inefficient incident management and reporting",
  "Integration issues with modern technologies",
  "Poor scalability for growing businesses",
  "Inadequate security and compliance measures",
  "Unclear or poorly defined SLAs",
];

interface PredefinedObjectivesProps {
  selectedObjectives: string[];
  onChange: (objectives: string[]) => void;
}

export function PredefinedObjectives({ selectedObjectives, onChange }: PredefinedObjectivesProps) {
  const handleChange = (objective: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedObjectives, objective]);
    } else {
      onChange(selectedObjectives.filter(obj => obj !== objective));
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Choose from Common Objectives</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {predefinedObjectives.map((objective, index) => (
          <motion.label
            key={objective}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={selectedObjectives.includes(objective)}
              onChange={(e) => handleChange(objective, e.target.checked)}
              className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
              {objective}
            </span>
          </motion.label>
        ))}
      </div>
    </div>
  );
}