import { Search, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface FAQSearchProps {
  value: string;
  onChange: (value: string) => void;
  isLoading?: boolean;
}

export function FAQSearch({ value, onChange, isLoading = false }: FAQSearchProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative max-w-2xl mx-auto"
    >
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search questions..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={isLoading}
          className="w-full pl-12 pr-12 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
        />
        {isLoading && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
          </div>
        )}
      </div>
      
      {/* Search suggestions or popular searches could go here */}
      {value && !isLoading && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 p-2 z-10"
        >
          <div className="text-sm text-gray-500 px-3 py-2">
            Press Enter to search
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}