"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FAQSearch } from '@/components/ui/faq/faq-search';
import { FAQCategories } from '@/components/ui/faq/faq-categories';
import { FAQItem } from '@/components/ui/faq/faq-item';
import { FAQCTA } from '@/components/ui/faq/faq-cta';
import { faqData } from '@/lib/data/faq-data';
import { useDebounce } from '@/lib/hooks/use-debounce';
import { HelpCircle, Search } from 'lucide-react';

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
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-purple-50/90" />
          <motion.div 
            className="absolute top-1/4 -right-48 w-[500px] h-[500px] bg-blue-400/20 rounded-full filter blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.015]" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6"
            >
              <HelpCircle className="w-4 h-4" />
              Help Center
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Questions
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about ProposalForge and learn how we can help streamline your proposal creation process.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-24">
        {/* Search Section */}
        <div className="mb-16">
          <FAQSearch 
            value={searchQuery}
            onChange={setSearchQuery}
            isLoading={isSearching}
          />
        </div>

        {/* Categories */}
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

        {/* Questions */}
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
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No questions found matching your search.</p>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <FAQCTA />
        </div>
      </div>
    </div>
  );
}