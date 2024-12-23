import { useState, useCallback } from 'react';

interface ValidationRule {
  validate: (value: any) => boolean;
  message: string;
}

interface FieldValidation {
  [key: string]: ValidationRule[];
}

export function useFormValidation(validationRules: FieldValidation) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = useCallback((fieldName: string, value: any) => {
    const fieldRules = validationRules[fieldName];
    if (!fieldRules) return true;

    for (const rule of fieldRules) {
      if (!rule.validate(value)) {
        setErrors(prev => ({
          ...prev,
          [fieldName]: rule.message
        }));
        return false;
      }
    }

    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
    return true;
  }, [validationRules]);

  const validateForm = useCallback((formData: Record<string, any>) => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    Object.keys(validationRules).forEach(fieldName => {
      const value = formData[fieldName];
      const fieldRules = validationRules[fieldName];

      for (const rule of fieldRules) {
        if (!rule.validate(value)) {
          newErrors[fieldName] = rule.message;
          isValid = false;
          break;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [validationRules]);

  return {
    errors,
    validateField,
    validateForm,
    hasErrors: Object.keys(errors).length > 0
  };
}