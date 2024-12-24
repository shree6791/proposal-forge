import { useCallback } from 'react';

interface TicketData {
  incidentTickets: number;
  serviceRequests: number;
  changeTickets: number;
}

export function useFormValidation() {
  const isTicketDataValid = useCallback((ticketData: TicketData) => {
    // Check if at least one ticket field has a value greater than 0
    return (
      Number(ticketData.incidentTickets) > 0 ||
      Number(ticketData.serviceRequests) > 0 ||
      Number(ticketData.changeTickets) > 0
    );
  }, []);

  const isFormComplete = useCallback((formData: any) => {
    // Check if all required fields are filled
    const hasRequiredFields = !!(
      formData.selectedTopic &&
      formData.companyName?.trim() &&
      formData.clientName?.trim() &&
      formData.clientObjectives?.length > 0
    );

    // Check if ticket data is valid
    const hasValidTickets = isTicketDataValid({
      incidentTickets: formData.incidentTickets,
      serviceRequests: formData.serviceRequests,
      changeTickets: formData.changeTickets
    });

    return hasRequiredFields && hasValidTickets;
  }, [isTicketDataValid]);

  return {
    isFormComplete,
    isTicketDataValid
  };
}