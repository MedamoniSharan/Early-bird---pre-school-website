import { useState, useEffect } from 'react';
import { Award, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, PageId } from '../data/preschoolContent';
import { ResilientImage } from './ResilientImage';
import { WaveDivider } from './WaveDivider';
import { StarSparkDoodle } from './PreschoolDoodles';

interface GallerySectionProps {
  onNavigate: (page: PageId) => void;
}

type CategoryFilter = 'all' | GalleryItem['category'];

const FILTER_TABS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Showcase' },
  { id: 'certificates', label: 'Certificates & Awards' },
  { id: 'classroom', label: 'Classroom & Montessori' },
  { id: 'activities', label: 'Activities & Stages' },
];

export function GallerySection({ onNavigate }: GallerySectionProps) {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const visibleItems =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const certificateItems = GALLERY_ITEMS.filter((item) => item.category === 'certificates');
  const classroomItems = visibleItems.filter((item) => item.category !== 'certificates');

  useEffect(() => {
    if (!lightboxItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
      } else if (e.key === 'ArrowRight') {
        const idx = visibleItems.findIndex((i) => i.id === lightboxItem.id);
        if (idx >= 0) {
          setLightboxItem(visibleItems[(idx + 1) % visibleItems.length]);
        }
      } else if (e.key === 'ArrowLeft') {
        const idx = visibleItems.findIndex((i) => i.id === lightboxItem.id);
        if (idx >= 0) {
          setLightboxItem(visibleItems[(idx - 1 + visibleItems.length) % visibleItems.length]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem, visibleItems]);

  const navigateLightbox = (direction: 1 | -1) => {
    if (!lightboxItem || visibleItems.length === 0) return;
    const currentIndex = visibleItems.findIndex((i) => i.id === lightboxItem.id);
    const nextIndex = (currentIndex + direction + visibleItems.length) % visibleItems.length;
    setLightboxItem(visibleItems[nextIndex]);
  };

  return (
    <div className="bg-[#FFFEFA]">
      {/* Gallery Hero Banner */}
      <section className="relative bg-[#4C227C] text-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
          <StarSparkDoodle className="hidden md:block absolute top-8 right-10 w-10 h-10 text-[#FFBE0B]/70" />
          <p className="text-xs sm:text-sm font-bold text-[#FFBE0B] mb-2">
            Gallery · Recognitions & Campus Life
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance max-w-3xl mb-3">
            National Certificates, Honours & Joyful Classroom Moments
          </h1>
          <p className="text-sm sm:text-lg text-purple-100 max-w-2xl leading-relaxed font-medium">
            Explore our official ECDLA #EYES2024 awards, Kreedo Early Childhood certifications, and everyday Montessori and play-based experiences at our Kanuru campus.
          </p>
        </div>
        <WaveDivider fillColor="#FFFEFA" bgColor="#4C227C" variant="clouds" />
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 lg:pb-20 space-y-14">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-100 pb-5">
          <div
            role="tablist"
            aria-label="Filter gallery items"
            className="flex flex-wrap gap-2"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = filter === tab.id;
              const count =
                tab.id === 'all'
                  ? GALLERY_ITEMS.length
                  : GALLERY_ITEMS.filter((i) => i.category === tab.id).length;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-2xl border-2 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#4C227C] ${
                    isSelected
                      ? 'bg-[#4C227C] text-white border-[#4C227C]'
                      : 'bg-white text-slate-700 border-purple-200 hover:border-[#4C227C]/50'
                  }`}
                >
                  {tab.label} <span className="tabular-nums opacity-80">({count})</span>
                </button>
              );
            })}
          </div>

          <p className="text-xs sm:text-sm font-semibold text-slate-500">
            Click any certificate or photograph to view full size
          </p>
        </div>

        {/* Section 1: Awards, Recognitions & Certifications */}
        {(filter === 'all' || filter === 'certificates') && (
          <div>
            <div className="flex items-start gap-3 mb-7">
              <Award className="w-7 h-7 text-[#D97706] shrink-0 mt-1" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold text-[#4C227C] mb-1">
                  Official Recognitions & Teacher Training Credentials
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
                  Awards, Recognitions & Certifications
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {certificateItems.map((cert) => (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => setLightboxItem(cert)}
                  className="group text-left bg-[#FFF8DC] border-2 border-amber-200 hover:border-[#4C227C] rounded-3xl p-4 sm:p-5 transition-all duration-150 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-[#4C227C]"
                >
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white border border-amber-200/80 p-2 mb-4">
                    <ResilientImage
                      src={cert.image}
                      alt={cert.alt}
                      fallbackTitle={cert.title}
                      className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#4C227C]/90 text-white text-xs font-bold shadow-sm">
                      <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Enlarge</span>
                    </span>
                  </div>

                  <div className="px-1">
                    {cert.year && (
                      <p className="text-xs font-extrabold text-[#B45309] tabular-nums mb-1">
                        {cert.year}
                      </p>
                    )}
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-950 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {cert.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Classroom & Activity Photos */}
        {classroomItems.length > 0 && (
          <div>
            <div className="mb-7">
              <p className="text-xs font-bold text-[#4C227C] mb-1">
                Playgroup, Nursery, LKG & UKG Experiences
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
                Inside Our Montessori & Kreedo Classrooms
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {classroomItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLightboxItem(item)}
                  className="group text-left bg-white border-2 border-purple-100 hover:border-[#4C227C] rounded-3xl overflow-hidden flex flex-col transition-all duration-150 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[#4C227C]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <ResilientImage
                      src={item.image}
                      alt={item.alt}
                      fallbackTitle={item.title}
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-950 mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Campus Tour Invitation Strip */}
        <div className="bg-[#EFE4FF] border-2 border-purple-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#4C227C] mb-1">
              See Our Kanuru Campus in Person
            </h3>
            <p className="text-sm text-slate-700 font-medium">
              Book a joyful morning walk-through to experience our Montessori lab, Kreedo stations, and Oral Book sessions.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-sm font-bold text-[#2A104C] bg-[#FFBE0B] hover:bg-[#F5B300] border-b-4 border-[#D99B00] active:translate-y-0.5 rounded-2xl transition-all whitespace-nowrap shrink-0"
          >
            Schedule Campus Visit
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border-4 border-[#FFBE0B] shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 bg-[#4C227C] text-white">
              <div className="min-w-0">
                <p className="font-display text-base sm:text-lg font-bold truncate">
                  {lightboxItem.title}
                </p>
                {lightboxItem.year && (
                  <p className="text-xs text-[#FFBE0B] font-bold tabular-nums">
                    {lightboxItem.year}
                  </p>
                )}
              </div>
              <button
                type="button"
                aria-label="Close image preview"
                onClick={() => setLightboxItem(null)}
                className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center shrink-0 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-slate-100 flex items-center justify-center p-3 sm:p-6">
              <ResilientImage
                src={lightboxItem.image}
                alt={lightboxItem.alt}
                fallbackTitle={lightboxItem.title}
                className="max-h-[58vh] sm:max-h-[68vh] w-auto object-contain rounded-xl"
              />

              {visibleItems.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous gallery item"
                    onClick={() => navigateLightbox(-1)}
                    className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#4C227C]/85 hover:bg-[#4C227C] text-white items-center justify-center shadow-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next gallery item"
                    onClick={() => navigateLightbox(1)}
                    className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#4C227C]/85 hover:bg-[#4C227C] text-white items-center justify-center shadow-lg transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="px-4 sm:px-5 py-3.5 sm:py-4 bg-[#FFFEFA] border-t border-slate-200 space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 font-medium">{lightboxItem.subtitle}</p>
              {visibleItems.length > 1 && (
                <div className="flex sm:hidden items-center justify-between gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => navigateLightbox(-1)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#4C227C] bg-[#EFE4FF] rounded-xl"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateLightbox(1)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#2A104C] bg-[#FFBE0B] rounded-xl"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
