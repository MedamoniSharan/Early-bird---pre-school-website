import { useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/preschoolContent';
import { ResilientImage } from './ResilientImage';

interface CertificatesShowcaseProps {
  compact?: boolean;
  onViewGallery?: () => void;
}

const CERTIFICATES = GALLERY_ITEMS.filter((item) => item.category === 'certificates');

export function CertificatesShowcase({ compact = false, onViewGallery }: CertificatesShowcaseProps) {
  const [selectedCert, setSelectedCert] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!selectedCert) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      } else if (e.key === 'ArrowRight') {
        const idx = CERTIFICATES.findIndex((c) => c.id === selectedCert.id);
        setSelectedCert(CERTIFICATES[(idx + 1) % CERTIFICATES.length]);
      } else if (e.key === 'ArrowLeft') {
        const idx = CERTIFICATES.findIndex((c) => c.id === selectedCert.id);
        setSelectedCert(CERTIFICATES[(idx - 1 + CERTIFICATES.length) % CERTIFICATES.length]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  const navigateCert = (dir: 1 | -1) => {
    if (!selectedCert) return;
    const idx = CERTIFICATES.findIndex((c) => c.id === selectedCert.id);
    setSelectedCert(CERTIFICATES[(idx + dir + CERTIFICATES.length) % CERTIFICATES.length]);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
        <div className="flex items-start gap-3">
          <Award className="w-7 h-7 text-[#D97706] shrink-0 mt-1" aria-hidden="true" />
          <div>
            <p className="text-xs font-bold text-[#4C227C] mb-1">
              National Awards & Accredited Training
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
              Awards, Recognitions & Certifications
            </h2>
          </div>
        </div>
        {onViewGallery && (
          <button
            type="button"
            onClick={onViewGallery}
            className="text-sm font-bold text-[#4C227C] hover:underline underline-offset-4 self-start sm:self-auto shrink-0"
          >
            Open Full Gallery
          </button>
        )}
      </div>

      <div
        className={`grid gap-5 ${
          compact
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            : 'grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'
        }`}
      >
        {CERTIFICATES.map((cert) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => setSelectedCert(cert)}
            className="group text-left bg-[#FFF8DC] border-2 border-amber-200 hover:border-[#4C227C] rounded-3xl p-4 transition-all duration-150 hover:shadow-xl flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#4C227C]"
          >
            <div>
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white border border-amber-200/80 p-1.5 mb-3.5">
                <ResilientImage
                  src={cert.image}
                  alt={cert.alt}
                  fallbackTitle={cert.title}
                  className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#4C227C]/90 text-white text-[11px] font-bold shadow-xs">
                  <ZoomIn className="w-3 h-3" aria-hidden="true" />
                  <span>View</span>
                </span>
              </div>

              {cert.year && (
                <p className="text-xs font-semibold text-[#B45309] tabular-nums mb-1">
                  {cert.year}
                </p>
              )}
              <h3 className="font-display text-base sm:text-lg font-bold text-slate-950 mb-1 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {cert.subtitle}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border-4 border-[#FFBE0B] shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 bg-[#4C227C] text-white">
              <div className="min-w-0">
                <p className="font-display text-base sm:text-lg font-bold truncate">
                  {selectedCert.title}
                </p>
                {selectedCert.year && (
                  <p className="text-xs text-[#FFBE0B] font-bold tabular-nums">
                    {selectedCert.year}
                  </p>
                )}
              </div>
              <button
                type="button"
                aria-label="Close certificate preview"
                onClick={() => setSelectedCert(null)}
                className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center shrink-0 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-slate-100 flex items-center justify-center p-3 sm:p-6">
              <ResilientImage
                src={selectedCert.image}
                alt={selectedCert.alt}
                fallbackTitle={selectedCert.title}
                className="max-h-[58vh] sm:max-h-[68vh] w-auto object-contain rounded-xl"
              />
              <button
                type="button"
                aria-label="Previous certificate"
                onClick={() => navigateCert(-1)}
                className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#4C227C]/85 hover:bg-[#4C227C] text-white items-center justify-center shadow-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next certificate"
                onClick={() => navigateCert(1)}
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#4C227C]/85 hover:bg-[#4C227C] text-white items-center justify-center shadow-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="px-4 sm:px-5 py-3.5 sm:py-4 bg-[#FFFEFA] border-t border-slate-200 space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 font-medium">{selectedCert.subtitle}</p>
              <div className="flex sm:hidden items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => navigateCert(-1)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#4C227C] bg-[#EFE4FF] rounded-xl"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigateCert(1)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#2A104C] bg-[#FFBE0B] rounded-xl"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
