import { PageId, SCHOOL_IDENTITY } from '../data/preschoolContent';
import { WaveDivider } from './WaveDivider';
import { FacebookLogo, InstagramLogo, WhatsAppLogo, YouTubeLogo } from './SocialBrandLogos';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

const FOOTER_PAGES: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'social', label: 'Social Media' },
  { id: 'contact', label: 'Contact Us' },
];

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#35145B] text-purple-100">
      <WaveDivider fillColor="#35145B" bgColor="#FFFEFA" variant="clouds" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-white/15 items-start">
          {/* Brand, Address & Contact */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-start gap-5">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              aria-label="Go to Early Wings Preschool Home"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-1.5 ring-4 ring-[#FFBE0B] shrink-0 shadow-lg overflow-hidden"
            >
              <img
                src="/assets/aistudio/image_bbab54bb.png"
                alt="Early Wings Preschool official emblem"
                className="w-full h-full object-contain scale-105 contrast-110"
              />
            </button>

            <div className="space-y-2">
              <p className="font-display text-2xl font-bold text-white tracking-tight">
                {SCHOOL_IDENTITY.name}
              </p>
              <p className="text-sm font-bold text-[#FFBE0B]">
                {SCHOOL_IDENTITY.tagline}
              </p>
              <p className="text-sm text-purple-100 leading-relaxed">
                {SCHOOL_IDENTITY.fullAddress.slice(1).join(' ')}
              </p>
              <p className="text-xs text-purple-200 tabular-nums">
                {SCHOOL_IDENTITY.timings.days}: Playgroup & Nursery 9:00 AM–12:30 PM · LKG & UKG 9:00 AM–3:00 PM · Sat & Sun Holiday
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-purple-100">
                <a
                  href={SCHOOL_IDENTITY.contact.phoneHref}
                  className="hover:text-[#FFBE0B] transition-colors tabular-nums font-bold"
                >
                  {SCHOOL_IDENTITY.contact.phone}
                </a>
                <span aria-hidden="true" className="text-white/40">·</span>
                <a
                  href={`mailto:${SCHOOL_IDENTITY.contact.email}`}
                  className="hover:text-[#FFBE0B] transition-colors break-all"
                >
                  {SCHOOL_IDENTITY.contact.email}
                </a>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold">
                <a
                  href={SCHOOL_IDENTITY.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#FFBE0B] transition-colors"
                >
                  <WhatsAppLogo className="w-5 h-5 shrink-0" />
                  <span>WhatsApp Enquiry</span>
                </a>
                <a
                  href={SCHOOL_IDENTITY.contact.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#FFBE0B] transition-colors"
                >
                  <YouTubeLogo className="w-5 h-5 shrink-0" />
                  <span>YouTube</span>
                </a>
                <a
                  href={SCHOOL_IDENTITY.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#FFBE0B] transition-colors"
                >
                  <FacebookLogo className="w-5 h-5 shrink-0" />
                  <span>Facebook</span>
                </a>
                <a
                  href={SCHOOL_IDENTITY.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#FFBE0B] transition-colors"
                >
                  <InstagramLogo className="w-5 h-5 shrink-0" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* 6 Page Navigation Links */}
          <div className="lg:col-span-5 lg:text-right">
            <p className="font-display text-sm font-bold text-[#FFBE0B] mb-3">
              Explore Pages
            </p>
            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 sm:flex sm:flex-wrap lg:justify-end gap-x-5 gap-y-2.5 text-sm font-bold"
            >
              {FOOTER_PAGES.map((page) => (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => onNavigate(page.id)}
                  className="text-left sm:text-center py-1 hover:text-[#FFBE0B] transition-colors"
                >
                  {page.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-purple-200">
          <p>{SCHOOL_IDENTITY.closingLine}</p>
          <p>© {new Date().getFullYear()} {SCHOOL_IDENTITY.name}. Established {SCHOOL_IDENTITY.foundedDate}.</p>
        </div>
      </div>
    </footer>
  );
}
