"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FAQSearch } from '@/components/ui/faq/faq-search';
import { FAQCategories } from '@/components/ui/faq/faq-categories';
import { FAQItem } from '@/components/ui/faq/faq-item';
// import { PopularQuestions } from '@/components/ui/faq/popular-questions';
import { FAQCTA } from '@/components/ui/faq/faq-cta';
import { faqData } from '@/lib/data/faq-data';
import { useDebounce } from '@/lib/hooks/use-debounce';

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(faqData.categories[0].name);
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});
  const [isSearching, setIsSearching] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState(faqData.categories[0].questions);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    setIsSearching(true);
    
    const searchResults = debouncedSearchQuery
      ? faqData.categories
          .flatMap(category => 
            category.questions.filter(q => 
              q.question.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
            )
          )
      : faqData.categories
          .find(category => category.name === selectedCategory)
          ?.questions || [];

    setFilteredQuestions(searchResults);
    setIsSearching(false);
  }, [debouncedSearchQuery, selectedCategory]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Questions
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about ProposalForge and learn how we can help streamline your proposal creation process.
          </p>
        </motion.div>

        <div className="mb-16">
          <FAQSearch 
            value={searchQuery}
            onChange={setSearchQuery}
            isLoading={isSearching}
          />
        </div>

        {/* <div className="mb-16">
          <PopularQuestions 
            questions={faqData.popularQuestions}
            onQuestionClick={handleCategorySelect}
          />
        </div> */}

        <div className="mb-12">
          <FAQCategories 
            categories={faqData.categories.map(cat => ({
              name: cat.name,
              count: cat.questions.length
            }))}
            selectedCategory={selectedCategory}
            onSelect={handleCategorySelect}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto mb-20"
        >
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((faq, index) => (
              <FAQItem
                key={`${selectedCategory}-${index}`}
                question={faq.question}
                answer={faq.answer}
                isOpen={openQuestions[`${selectedCategory}-${index}`]}
                onToggle={() => toggleQuestion(`${selectedCategory}-${index}`)}
                index={index}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600">No questions found matching your search.</p>
            </motion.div>
          )}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <FAQCTA />
        </div>
      </div>
    </div>
  );
}