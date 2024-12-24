"use client";

import { BrandLogo } from '../ui/brand/brand-logo';
import { FooterBrand } from './footer/footer-brand';
import { FooterSection } from './footer/footer-section';
import { FooterContact } from './footer/footer-contact';
import { FooterBottom } from './footer/footer-bottom';

export function Footer() {
  const sections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/pricing" },
        { label: "FAQs", href: "/faqs" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Team", href: "/team" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Documentation", href: "/docs" },
        { label: "Support", href: "/support" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gray-800">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <FooterBrand />
          </div>

          {/* Navigation Sections */}
          <div className="md:col-span-5 grid grid-cols-3 gap-8">
            {sections.map((section) => (
              <FooterSection
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3">
            <FooterContact />
          </div>
        </div>

        {/* Footer Bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
}