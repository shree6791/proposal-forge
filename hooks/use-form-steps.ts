import { useState, useCallback } from 'react';

export interface FormStep {
  id: string;
  title: string;
  isCompleted: boolean;
  isActive: boolean;
}

export function useFormSteps(initialSteps: FormStep[]) {
  const [steps, setSteps] = useState(initialSteps);

  const updateStepStatus = useCallback((formData: any) => {
    setSteps(currentSteps => 
      currentSteps.map(step => {
        switch (step.id) {
          case 'topic':
            return {
              ...step,
              isCompleted: !!formData.selectedTopic,
              isActive: true
            };
          case 'details':
            return {
              ...step,
              isCompleted: !!(
                formData.companyName?.trim() && 
                formData.clientName?.trim()
              ),
              isActive: !!formData.selectedTopic
            };
          case 'objectives':
            return {
              ...step,
              isCompleted: formData.clientObjectives?.length > 0,
              isActive: !!(
                formData.companyName?.trim() && 
                formData.clientName?.trim()
              )
            };
          case 'tickets':
            return {
              ...step,
              isCompleted: !!(
                Number(formData.incidentTickets) > 0 || 
                Number(formData.serviceRequests) > 0 || 
                Number(formData.changeTickets) > 0
              ),
              isActive: formData.clientObjectives?.length > 0
            };
          default:
            return step;
        }
      })
    );
  }, []);

  return {
    steps,
    updateStepStatus
  };
}