"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FAQSearch } from '@/components/ui/faq/faq-search';
import { FAQCategories } from '@/components/ui/faq/faq-categories';
import { FAQList } from '@/components/ui/faq/faq-list';
import { FAQCTA } from '@/components/ui/faq/faq-cta';
import { faqData } from '@/lib/data/faq-data';
import { useDebounce } from '@/lib/hooks/use-debounce';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FAQHeader } from '@/components/ui/faq/faq-header';

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(faqData.categories[0].name);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative py-32 overflow-hidden">
        <AnimatedBackground />
        <FAQHeader />
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

        {/* Questions List */}
        <FAQList 
          questions={filteredQuestions}
          searchQuery={debouncedSearchQuery}
        />

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-24">
          <FAQCTA />
        </div>
      </div>
    </div>
  );
}