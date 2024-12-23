"use client";

interface RadioOption {
  id: string;
  title: string;
  description: string;
  available: boolean;
}

interface RadioGroupProps {
  options: RadioOption[];
  value: string | null;
  onChange: (value: string) => void;
  name: string;
}

export function RadioGroup({ options, value, onChange, name }: RadioGroupProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {options.map((option) => (
        <label
          key={option.id}
          className={`
            flex items-center p-4 border rounded-lg cursor-pointer transition-all
            ${option.available 
              ? 'hover:bg-blue-50 border-blue-300' 
              : 'opacity-50 cursor-not-allowed bg-gray-100 border-gray-300'}
          `}
        >
          <input
            type="radio"
            name={name}
            value={option.id}
            checked={value === option.id}
            onChange={() => option.available && onChange(option.id)}
            disabled={!option.available}
            className="mr-2"
          />
          <div>
            <div className="font-medium">{option.title}</div>
            <div className="text-sm text-gray-500">{option.description}</div>
          </div>
        </label>
      ))}
    </div>
  );
}