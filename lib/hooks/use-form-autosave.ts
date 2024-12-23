import { useEffect, useRef } from 'react';
import { useDebounce } from './use-debounce';

interface AutosaveConfig {
  key: string;
  data: any;
  onSave?: (data: any) => Promise<void>;
  debounceMs?: number;
}

export function useFormAutosave({ 
  key, 
  data, 
  onSave, 
  debounceMs = 1000 
}: AutosaveConfig) {
  const savedData = useRef(data);
  const debouncedData = useDebounce(data, debounceMs);

  useEffect(() => {
    const saveData = async () => {
      // Save to localStorage
      localStorage.setItem(key, JSON.stringify(debouncedData));
      
      // Call optional save callback
      if (onSave) {
        try {
          await onSave(debouncedData);
        } catch (error) {
          console.error('Autosave failed:', error);
        }
      }
    };

    if (JSON.stringify(debouncedData) !== JSON.stringify(savedData.current)) {
      saveData();
      savedData.current = debouncedData;
    }
  }, [key, debouncedData, onSave]);

  const loadSavedData = () => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  };

  return { loadSavedData };
}