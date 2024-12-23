interface TicketData {
  incidentTickets: number;
  serviceRequests: number;
  changeTickets: number;
}

interface CostBreakdown {
  monthlyCost: number;
  year1Cost: number;
  year2Cost: number;
  year3Cost: number;
}

const CONSTANTS = {
  MAX_INCIDENT_TICKETS: 80,
  MAX_SERVICE_REQUESTS: 250,
  MAX_CHANGE_TICKETS: 80,
  PRICE_PER_ENGINEER_INDIA: 4500,
  PRICE_PER_ENGINEER_USA: 16000,
  INDIA_RATIO: 0.8,
  YEAR2_DISCOUNT: 0.85,
  YEAR3_DISCOUNT: 0.95
};

export function calculateCosts(ticketData: TicketData): CostBreakdown {
  // Ensure all values are numbers and not NaN
  const sanitizedData = {
    incidentTickets: Number(ticketData.incidentTickets) || 0,
    serviceRequests: Number(ticketData.serviceRequests) || 0,
    changeTickets: Number(ticketData.changeTickets) || 0,
  };

  const engineersForIncidents = Math.ceil(sanitizedData.incidentTickets / CONSTANTS.MAX_INCIDENT_TICKETS) || 0;
  const engineersForServiceRequests = Math.ceil(sanitizedData.serviceRequests / CONSTANTS.MAX_SERVICE_REQUESTS) || 0;
  const engineersForChangeTickets = Math.ceil(sanitizedData.changeTickets / CONSTANTS.MAX_CHANGE_TICKETS) || 0;

  const totalEngineers = Math.max(1, engineersForIncidents + engineersForServiceRequests + engineersForChangeTickets);
  const engineersInIndia = Math.floor(totalEngineers * CONSTANTS.INDIA_RATIO);
  const engineersInUSA = totalEngineers - engineersInIndia;

  const monthlyCostInIndia = engineersInIndia * CONSTANTS.PRICE_PER_ENGINEER_INDIA;
  const monthlyCostInUSA = engineersInUSA * CONSTANTS.PRICE_PER_ENGINEER_USA;
  const totalMonthlyCost = monthlyCostInIndia + monthlyCostInUSA;

  const year1Cost = totalMonthlyCost * 12;
  const year2Cost = year1Cost * CONSTANTS.YEAR2_DISCOUNT;
  const year3Cost = year2Cost * CONSTANTS.YEAR3_DISCOUNT;

  return {
    monthlyCost: Math.round(totalMonthlyCost),
    year1Cost: Math.round(year1Cost),
    year2Cost: Math.round(year2Cost),
    year3Cost: Math.round(year3Cost),
  };
}