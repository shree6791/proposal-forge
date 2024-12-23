"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AuthButtons } from '@/components/navigation/auth-buttons';
import { navLinks } from '@/components/navigation/nav-links';

export function NavMenu() {
  return (
    <nav className="hidden md:flex items-center space-x-4">
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button variant="ghost" className="text-neutral-600 hover:text-primary-600">
            {link.label}
          </Button>
        </Link>
      ))}
      <AuthButtons />
    </nav>
  );
}