import { ReactNode, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  content: ReactNode;
}

interface FormWizardProps {
  steps: Step[];
  onComplete: () => void;
}

export function FormWizard({ steps, onComplete }: FormWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="relative">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center
                ${index <= currentStep 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-neutral-200 text-neutral-400'}
              `}>
                {index < currentStep ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  index + 1
                )}
              </div>
              <span className="text-sm mt-2">{step.title}</span>
            </div>
          ))}
        </div>
        <div className="absolute top-4 h-0.5 w-full bg-neutral-200">
          <div 
            className="h-full bg-primary-500 transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
        <h3 className="text-xl font-semibold mb-2">{steps[currentStep].title}</h3>
        <p className="text-neutral-500 mb-6">{steps[currentStep].description}</p>
        {steps[currentStep].content}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 text-neutral-600 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={goToNextStep}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
        >
          {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
}