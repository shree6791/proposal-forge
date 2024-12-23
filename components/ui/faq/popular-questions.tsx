import { motion } from 'framer-motion';

interface PopularQuestion {
  question: string;
  category: string;
}

interface PopularQuestionsProps {
  questions: PopularQuestion[];
  onQuestionClick: (category: string) => void;
}

export function PopularQuestions({ questions, onQuestionClick }: PopularQuestionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto mb-12"
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Popular Questions</h2>
      <div className="grid gap-4">
        {questions.map((item, index) => (
          <motion.button
            key={item.question}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onQuestionClick(item.category)}
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-left group"
          >
            <p className="text-gray-900 group-hover:text-blue-600 transition-colors">
              {item.question}
            </p>
            <span className="text-sm text-gray-500">Category: {item.category}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}