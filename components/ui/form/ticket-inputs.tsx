"use client";

import { BaseInput } from '@/components/ui/input/base-input';

interface TicketInputsProps {
  incidentTickets: number;
  serviceRequests: number;
  changeTickets: number;
  onChange: (field: string, value: number) => void;
  errors?: Record<string, string>;
}

export function TicketInputs({ 
  incidentTickets, 
  serviceRequests, 
  changeTickets, 
  onChange,
  errors = {}
}: TicketInputsProps) {
  const fields = [
    {
      id: "incidentTickets",
      label: "Incident Tickets (per month)",
      value: incidentTickets,
      placeholder: "e.g., 100"
    },
    {
      id: "serviceRequests",
      label: "Service Requests (per month)",
      value: serviceRequests,
      placeholder: "e.g., 250"
    },
    {
      id: "changeTickets",
      label: "Change Tickets (per month)",
      value: changeTickets,
      placeholder: "e.g., 50"
    }
  ];

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <BaseInput
          key={field.id}
          type="number"
          label={field.label}
          name={field.id}
          value={field.value || ''}
          onChange={(e) => onChange(field.id, parseInt(e.target.value) || 0)}
          placeholder={field.placeholder}
          error={errors[field.id]}
          required
          min="0"
        />
      ))}
    </div>
  );
}