"use client";

interface ClientObjectivesProps {
  selectedObjectives: string[];
  onChange: (objectives: string[]) => void;
}

export function ClientObjectives({ selectedObjectives, onChange }: ClientObjectivesProps) {
  const objectives = [
    "High operational and maintenance costs",
    "Frequent application downtime or outages",
    "Difficulty managing legacy systems",
    "Insufficient resources or skilled personnel",
    "Lack of real-time issue resolution",
    "Inefficient incident management and reporting",
    "Integration issues with modern technologies",
    "Poor scalability for growing businesses",
    "Inadequate security and compliance measures",
    "Unclear or poorly defined SLAs",
  ];

  const handleChange = (objective: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedObjectives, objective]);
    } else {
      onChange(selectedObjectives.filter(obj => obj !== objective));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {objectives.map((objective) => (
        <label key={objective} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selectedObjectives.includes(objective)}
            onChange={(e) => handleChange(objective, e.target.checked)}
            className="form-checkbox h-4 w-4"
          />
          <span className="text-sm">{objective}</span>
        </label>
      ))}
    </div>
  );
}