import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
}

export function SimpleToast({ 
  message, 
  type = 'info', 
  duration = 3000, 
  onClose 
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  };

  if (!isVisible) return null;

  return (
    <div className={`
      fixed bottom-4 right-4 
      ${colors[type]} text-white 
      px-6 py-3 rounded-lg shadow-lg
      transform transition-all duration-300
    `}>
      <div className="flex items-center gap-2">
        <span>{message}</span>
        <button 
          onClick={() => setIsVisible(false)} 
          className="p-1 hover:bg-white/20 rounded"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}