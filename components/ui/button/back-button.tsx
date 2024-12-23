"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export function BackButton({ 
  href, 
  label = 'Go Back', 
  className = '' 
}: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      onClick={() => router.push(href)}
      className={`flex items-center gap-2 ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Button>
  );
}