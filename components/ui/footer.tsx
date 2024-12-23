import { Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { theme } from '@/lib/design-system/theme';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ProposalForge</h3>
            <p className="text-neutral-400">
              Revolutionizing the way businesses create and manage proposals
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/platform" className="hover:text-white transition-colors">Platform</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400">
          <p>© {new Date().getFullYear()} ProposalForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}