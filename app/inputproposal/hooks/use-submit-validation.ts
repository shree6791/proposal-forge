"use client";

import { useFormValidation } from '@/hooks/use-form-validation';
import { FormData } from '@/lib/client-storage';

interface TouchedFields {
  incidentTickets: boolean;
  serviceRequests: boolean;
  changeTickets: boolean;
}

export function useSubmitValidation(formData: FormData, touchedFields: TouchedFields) {
  const { isFormComplete } = useFormValidation();

  const areAllTicketFieldsTouched = () => {
    return Object.values(touchedFields).every(touched => touched);
  };

  const isSubmitDisabled = () => {
    return !isFormComplete(formData) || !areAllTicketFieldsTouched();
  };

  return {
    isSubmitDisabled,
    areAllTicketFieldsTouched
  };
}