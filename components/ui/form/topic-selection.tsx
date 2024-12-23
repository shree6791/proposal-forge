"use client";

import { RadioGroup } from '@/components/ui/form/radio-group';

interface TopicSelectionProps {
  selectedTopic: string | null;
  onTopicChange: (topic: string) => void;
}

export function TopicSelection({ selectedTopic, onTopicChange }: TopicSelectionProps) {
  const topics = [
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

  return (
    <RadioGroup
      options={topics}
      value={selectedTopic}
      onChange={onTopicChange}
      name="topic"
    />
  );
}