import { motion } from 'framer-motion';

interface FAQCategory {
  name: string;
  count: number;
}

interface FAQCategoriesProps {
  categories: FAQCategory[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export function FAQCategories({ categories, selectedCategory, onSelect }: FAQCategoriesProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center gap-4 flex-wrap"
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onSelect(category.name)}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all duration-200
            ${selectedCategory === category.name
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-gray-50'}
          `}
        >
          {category.name}
          <span className="ml-2 text-sm opacity-70">({category.count})</span>
        </button>
      ))}
    </motion.div>
  );
}