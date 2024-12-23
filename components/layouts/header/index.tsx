import { BrandLogo } from './brand-logo';
import { NavMenu } from './nav-menu';
import { MobileMenu } from './mobile-menu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <BrandLogo />
        <NavMenu />
        <MobileMenu />
      </div>
    </header>
  );
}