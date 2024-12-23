import { motion } from 'framer-motion';

interface FormStep {
  id: string;
  title: string;
  isCompleted: boolean;
  isActive: boolean;
}

interface FormStepsProps {
  steps: FormStep[];
}

export function FormSteps({ steps }: FormStepsProps) {
  return (
    <div className="relative mb-8">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2" />
      
      <div className="relative flex justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center">
            <motion.div
              initial={false}
              animate={{
                backgroundColor: step.isCompleted 
                  ? '#22C55E' 
                  : step.isActive 
                    ? '#3B82F6' 
                    : '#E5E7EB',
                scale: step.isActive ? 1.1 : 1,
              }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white relative z-10"
            >
              {step.isCompleted ? '✓' : index + 1}
            </motion.div>
            <span className={`
              mt-2 text-sm font-medium
              ${step.isCompleted 
                ? 'text-green-600' 
                : step.isActive 
                  ? 'text-blue-600' 
                  : 'text-gray-500'}
            `}>
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}