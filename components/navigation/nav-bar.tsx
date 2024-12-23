import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AuthButtons } from './auth-buttons';
import { navLinks } from './nav-links';
import { theme } from '@/lib/design-system/theme';

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="/">
          <img
            src="/images/your-image-file-name.png"
            alt="ProposalForge Logo"
            className="h-12"
          />
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button 
                variant="ghost" 
                className="text-neutral-600 hover:text-primary-600 hover:bg-primary-50"
              >
                {link.label}
              </Button>
            </Link>
          ))}
          <AuthButtons />
        </div>
      </div>
    </nav>
  );
}