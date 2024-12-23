"use client";

import { motion } from 'framer-motion';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="relative mb-12">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2" />
      <div className="relative flex justify-between max-w-2xl mx-auto">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={false}
            animate={{
              scale: index === currentStep ? 1.2 : 1,
            }}
          >
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 ${
                index <= currentStep
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-400'
              }`}
              initial={false}
              animate={{
                scale: index === currentStep ? 1.1 : 1,
                backgroundColor: index <= currentStep ? '#2563EB' : '#E5E7EB',
              }}
            >
              {index + 1}
            </motion.div>
            {index < totalSteps - 1 && (
              <motion.div
                className="absolute top-1/2 left-full w-full h-0.5 -translate-y-1/2"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: index < currentStep ? 1 : 0,
                  backgroundColor: index < currentStep ? '#2563EB' : '#E5E7EB',
                }}
                style={{ transformOrigin: 'left' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}