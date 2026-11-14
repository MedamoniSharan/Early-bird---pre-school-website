import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { PageId, SCHOOL_IDENTITY } from '../data/preschoolContent';
import { WhatsAppLogo } from './SocialBrandLogos';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'social', label: 'Social Media' },
];

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelect = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFEFA]/95 backdrop-blur-sm border-b border-purple-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Brand Logo & Wordmark */}
        <button
          type="button"
          onClick={() => handleSelect('home')}
          className="inline-flex items-center gap-2.5 sm:gap-3 font-display text-lg sm:text-2xl font-bold tracking-tight text-[#4C227C] whitespace-nowrap shrink-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4C227C]"
        >
          <span className="inline-flex items-center justify-center h-11 w-11 sm:h-16 sm:w-16 rounded-full bg-white p-0.5 ring-2 ring-[#4C227C]/25 shadow-sm overflow-hidden shrink-0">
            <img
              src="/assets/aistudio/image_bbab54bb.png"
              alt="Early Wings Preschool logo"
              className="h-full w-full object-contain scale-105 contrast-110"
            />
          </span>
          <span>Early Wings</span>
        </button>

        {/* Zone 2: Clean single-line page navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-bold text-slate-700"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`whitespace-nowrap shrink-0 py-1.5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4C227C] ${
                  isActive
                    ? 'text-[#4C227C] underline underline-offset-4 decoration-[#FFBE0B] decoration-2'
                    : 'hover:text-[#4C227C] hover:underline underline-offset-4 decoration-[#FFBE0B] decoration-2'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Tactile Preschool Contact Us CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect('contact')}
            aria-current={activePage === 'contact' ? 'page' : undefined}
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-bold rounded-2xl transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C227C] ${
              activePage === 'contact'
                ? 'bg-[#4C227C] text-white border-b-4 border-[#2E1150]'
                : 'text-[#2A104C] bg-[#FFBE0B] hover:bg-[#F5B300] border-b-4 border-[#D99B00] active:translate-y-0.5'
            }`}
          >
            Contact Us
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-2xl text-[#4C227C] hover:bg-purple-50 transition-colors focus-visible:outline-2 focus-visible:outline-[#4C227C]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-purple-100 bg-[#FFFEFA] px-4 py-4 space-y-1.5 max-h-[calc(100dvh-4rem)] overflow-y-auto shadow-lg"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`block w-full text-left px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                  isActive
                    ? 'bg-[#EFE4FF] text-[#4C227C]'
                    : 'text-slate-700 hover:text-[#4C227C] hover:bg-purple-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 space-y-2.5">
            <button
              type="button"
              onClick={() => handleSelect('contact')}
              aria-current={activePage === 'contact' ? 'page' : undefined}
              className="block w-full text-center px-4 py-3.5 text-sm font-bold text-[#2A104C] bg-[#FFBE0B] hover:bg-[#F5B300] border-b-4 border-[#D99B00] rounded-2xl"
            >
              Contact Us & Admissions
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={SCHOOL_IDENTITY.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-3 py-3 text-xs font-bold text-[#4C227C] bg-[#EFE4FF] rounded-xl tabular-nums"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Call School</span>
              </a>
              <a
                href={SCHOOL_IDENTITY.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-3 text-xs font-bold text-[#14532D] bg-[#DCFCE7] rounded-xl"
              >
                <WhatsAppLogo className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
