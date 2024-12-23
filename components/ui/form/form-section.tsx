import { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function FormSection({ title, description, children, className = '' }: FormSectionProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        {description && (
          <p className="text-sm text-neutral-500">{description}</p>
        )}
      </div>
      <div className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm">
        {children}
      </div>
    </div>
  );
}