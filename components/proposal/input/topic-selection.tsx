"use client";

import { motion } from 'framer-motion';

interface Topic {
  id: string;
  title: string;
  description: string;
  available: boolean;
}

interface TopicSelectionProps {
  selectedTopic: string | null;
  onTopicChange: (topic: string) => void;
}

const topics: Topic[] = [
  {
    id: "application-support",
    title: "Application Support",
    description: "Support and maintenance for enterprise applications",
    available: true
  },
  {
    id: "infrastructure-support",
    title: "Infrastructure Support",
    description: "Coming soon - Support for IT infrastructure",
    available: false
  },
  {
    id: "service-desk",
    title: "Service Desk",
    description: "Coming soon - End-user IT support services",
    available: false
  }
];

export function TopicSelection({ selectedTopic, onTopicChange }: TopicSelectionProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {topics.map((topic) => (
        <motion.label
          key={topic.id}
          whileHover={topic.available ? { y: -4 } : {}}
          className={`
            flex items-start p-4 rounded-xl cursor-pointer transition-all duration-300
            ${topic.available 
              ? 'hover:shadow-lg border-2' 
              : 'opacity-50 cursor-not-allowed bg-gray-50 border border-gray-200'}
            ${selectedTopic === topic.id
              ? 'border-blue-500 shadow-lg shadow-blue-100'
              : topic.available ? 'border-gray-200' : ''}
          `}
        >
          <input
            type="radio"
            name="topic"
            value={topic.id}
            checked={selectedTopic === topic.id}
            onChange={() => topic.available && onTopicChange(topic.id)}
            disabled={!topic.available}
            className="mt-1 mr-3"
          />
          <div>
            <div className="font-medium text-gray-900">{topic.title}</div>
            <div className="text-sm text-gray-500 mt-1">{topic.description}</div>
          </div>
        </motion.label>
      ))}
    </div>
  );
}