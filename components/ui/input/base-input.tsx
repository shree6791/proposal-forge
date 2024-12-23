import { forwardRef } from 'react';
import { theme } from '@/lib/design-system/theme';
import { cn } from '@/lib/utils';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  helperText?: string;
}

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className, error, label, helperText, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={cn(
              "w-full px-4 py-2 transition-colors duration-200",
              "border rounded-lg shadow-sm",
              "focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
              error 
                ? "border-red-500 focus:ring-red-500 focus:border-red-500" 
                : "border-neutral-300",
              className
            )}
            {...props}
          />
          {error && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="h-5 w-5 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p className={cn(
            "text-sm",
            error ? "text-red-500" : "text-neutral-500"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

BaseInput.displayName = 'BaseInput';