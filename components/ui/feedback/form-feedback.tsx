import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface FormFeedbackProps {
  type: 'success' | 'error' | 'warning';
  message: string;
  visible: boolean;
}

export function FormFeedback({ type, message, visible }: FormFeedbackProps) {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle
  };

  const colors = {
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200'
  };

  const Icon = icons[type];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`rounded-lg border p-4 flex items-start space-x-3 ${colors[type]}`}
        >
          <Icon className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}