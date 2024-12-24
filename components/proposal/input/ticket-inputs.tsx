"use client";

import { motion } from 'framer-motion';
import { BaseInput } from '@/components/ui/input/base-input';
import { useState } from 'react';

interface TicketInputsProps {
  incidentTickets: number;
  serviceRequests: number;
  changeTickets: number;
  onChange: (field: string, value: number) => void;
  errors?: Record<string, string>;
}

const fields = [
  {
    id: "incidentTickets",
    label: "Incident Tickets (per month)",
    placeholder: "e.g., 100",
    description: "Number of incidents requiring support intervention",
    required: true,
    min: 0
  },
  {
    id: "serviceRequests",
    label: "Service Requests (per month)",
    placeholder: "e.g., 250",
    description: "Standard service and access requests",
    required: true,
    min: 0
  },
  {
    id: "changeTickets",
    label: "Change Tickets (per month)",
    placeholder: "e.g., 50",
    description: "System changes and enhancements",
    required: true,
    min: 0
  }
];

export function TicketInputs({ 
  incidentTickets, 
  serviceRequests, 
  changeTickets, 
  onChange,
  errors = {}
}: TicketInputsProps) {
  // Track which fields have been touched
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const getFieldValue = (id: string) => {
    switch (id) {
      case 'incidentTickets': return incidentTickets;
      case 'serviceRequests': return serviceRequests;
      case 'changeTickets': return changeTickets;
      default: return 0;
    }
  };

  const validateNumber = (value: string) => {
    const num = parseInt(value);
    return !isNaN(num) && num >= 0 ? num : 0;
  };

  const handleChange = (field: string, value: string) => {
    const validatedValue = validateNumber(value);
    onChange(field, validatedValue);
  };

  const handleBlur = (fieldId: string) => {
    setTouchedFields(prev => ({
      ...prev,
      [fieldId]: true
    }));
  };

  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <motion.div
          key={field.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <BaseInput
            type="number"
            label={field.label}
            name={field.id}
            value={getFieldValue(field.id) || ''}
            onChange={(e) => handleChange(field.id, e.target.value)}
            onBlur={() => handleBlur(field.id)}
            placeholder={field.placeholder}
            error={errors[field.id]}
            helperText={field.description}
            required={field.required}
            min={field.min}
          />
          {touchedFields[field.id] && getFieldValue(field.id) === 0 && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-500 mt-1"
            >
              Please enter a value greater than 0
            </motion.p>
          )}
        </motion.div>
      ))}
    </div>
  );
}