"use client";

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export function MobileMenu() {
  return (
    <Button variant="ghost" className="md:hidden">
      <Menu className="h-6 w-6" />
    </Button>
  );
}