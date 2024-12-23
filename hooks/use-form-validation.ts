import { useCallback } from 'react';

interface TicketData {
  incidentTickets: number;
  serviceRequests: number;
  changeTickets: number;
}

export function useFormValidation() {
  const isTicketDataValid = useCallback((ticketData: TicketData) => {
    const hasValidTickets = 
      Number(ticketData.incidentTickets) > 0 ||
      Number(ticketData.serviceRequests) > 0 ||
      Number(ticketData.changeTickets) > 0;

    return hasValidTickets;
  }, []);

  const isFormComplete = useCallback((formData: any) => {
    return !!(
      formData.selectedTopic &&
      formData.companyName?.trim() &&
      formData.clientName?.trim() &&
      formData.clientObjectives?.length > 0 &&
      isTicketDataValid({
        incidentTickets: formData.incidentTickets,
        serviceRequests: formData.serviceRequests,
        changeTickets: formData.changeTickets
      })
    );
  }, [isTicketDataValid]);

  return {
    isFormComplete,
    isTicketDataValid
  };
}