import { useState, useEffect, useCallback } from 'react';
import { Award, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { GALLERY_ITEMS, GalleryItem, PageId } from '../data/preschoolContent';
import { ResilientImage } from './ResilientImage';
import { WaveDivider } from './WaveDivider';

interface AwardsCarouselProps {
  onNavigate: (page: PageId) => void;
}

const AWARDS_SLIDES = GALLERY_ITEMS.filter((item) => item.category === 'certificates');

export function AwardsCarousel({ onNavigate }: AwardsCarouselProps) {
  const shouldReduceMotion = useReducedMotion();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxAward, setLightboxAward] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const handleNext = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % AWARDS_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + AWARDS_SLIDES.length) % AWARDS_SLIDES.length);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || isPaused || lightboxAward) return;
    const timer = window.setInterval(handleNext, 4500);
    return () => window.clearInterval(timer);
  }, [shouldReduceMotion, isPaused, lightboxAward, handleNext]);

  useEffect(() => {
    if (!lightboxAward) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxAward(null);
      } else if (e.key === 'ArrowRight') {
        const idx = AWARDS_SLIDES.findIndex((item) => item.id === lightboxAward.id);
        setLightboxAward(AWARDS_SLIDES[(idx + 1) % AWARDS_SLIDES.length]);
      } else if (e.key === 'ArrowLeft') {
        const idx = AWARDS_SLIDES.findIndex((item) => item.id === lightboxAward.id);
        setLightboxAward(AWARDS_SLIDES[(idx - 1 + AWARDS_SLIDES.length) % AWARDS_SLIDES.length]);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxAward]);

  const currentSlides: GalleryItem[] = [];
  for (let i = 0; i < Math.min(visibleCount, AWARDS_SLIDES.length); i++) {
    currentSlides.push(AWARDS_SLIDES[(startIndex + i) % AWARDS_SLIDES.length]);
  }

  return (
    <section
      aria-label="Awards and recognitions carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="bg-[#EFE4FF] overflow-hidden"
    >
      <WaveDivider fillColor="#EFE4FF" bgColor="#FFFEFA" variant="wave" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 lg:pt-12 lg:pb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div className="flex items-start gap-3">
            <Award className="w-7 h-7 text-[#4C227C] shrink-0 mt-1" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold text-[#4C227C] mb-1">
                Celebrating National Milestones (2016–2026)
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
                Awards, Honours & Certifications
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous award slide"
              className="w-10 h-10 rounded-2xl bg-white border-2 border-purple-200 hover:border-[#4C227C] text-[#4C227C] flex items-center justify-center transition-colors shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next award slide"
              className="w-10 h-10 rounded-2xl bg-[#FFBE0B] hover:bg-[#F5B300] border-b-4 border-[#D99B00] text-[#2A104C] flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('gallery')}
              className="ml-1 text-xs sm:text-sm font-bold text-[#4C227C] hover:underline underline-offset-4 whitespace-nowrap"
            >
              View All ({AWARDS_SLIDES.length})
            </button>
          </div>
        </div>

        {/* Multi-Card Award Carousel Grid */}
        <div
          className={`grid gap-5 ${
            visibleCount === 1
              ? 'grid-cols-1'
              : visibleCount === 2
              ? 'grid-cols-2'
              : 'grid-cols-3'
          }`}
        >
          {currentSlides.map((award) => (
            <button
              key={award.id}
              type="button"
              onClick={() => setLightboxAward(award)}
              className="group text-left bg-white border-2 border-purple-200 hover:border-[#4C227C] rounded-3xl p-4 transition-all duration-150 hover:shadow-xl flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#4C227C]"
            >
              <div>
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#FFF8DC] border border-amber-200/80 p-1.5 mb-3.5">
                  <ResilientImage
                    src={award.image}
                    alt={award.alt}
                    fallbackTitle={award.title}
                    className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#4C227C]/90 text-white text-[11px] font-bold shadow-xs">
                    <ZoomIn className="w-3 h-3" aria-hidden="true" />
                    <span>Enlarge</span>
                  </span>
                </div>

                {award.year && (
                  <p className="text-xs font-semibold text-[#B45309] tabular-nums mb-1">
                    {award.year}
                  </p>
                )}
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-950 mb-1 leading-snug">
                  {award.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {award.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Carousel Dot Indicators */}
        <div
          role="tablist"
          aria-label="Select award slide"
          className="flex items-center justify-center gap-2 mt-6"
        >
          {AWARDS_SLIDES.map((slide, idx) => {
            const isActive = idx === startIndex;
            return (
              <button
                key={slide.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-label={`Show award ${idx + 1}: ${slide.title}`}
                onClick={() => setStartIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'w-7 bg-[#4C227C]'
                    : 'w-2.5 bg-[#4C227C]/30 hover:bg-[#4C227C]/60'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Wave Divider seamlessly connecting into Footer (#35145B) */}
      <WaveDivider fillColor="#FFFEFA" bgColor="#EFE4FF" variant="clouds" />

      {/* Lightbox Modal */}
      {lightboxAward && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxAward.title}
          onClick={() => setLightboxAward(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border-4 border-[#FFBE0B] shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 bg-[#4C227C] text-white">
              <div className="min-w-0">
                <p className="font-display text-base sm:text-lg font-bold truncate">
                  {lightboxAward.title}
                </p>
                {lightboxAward.year && (
                  <p className="text-xs text-[#FFBE0B] font-bold tabular-nums">
                    {lightboxAward.year}
                  </p>
                )}
              </div>
              <button
                type="button"
                aria-label="Close award preview"
                onClick={() => setLightboxAward(null)}
                className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center shrink-0 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-slate-100 flex items-center justify-center p-3 sm:p-6">
              <ResilientImage
                src={lightboxAward.image}
                alt={lightboxAward.alt}
                fallbackTitle={lightboxAward.title}
                className="max-h-[58vh] sm:max-h-[68vh] w-auto object-contain rounded-xl"
              />
              <button
                type="button"
                aria-label="Previous award"
                onClick={() => {
                  const idx = AWARDS_SLIDES.findIndex((i) => i.id === lightboxAward.id);
                  setLightboxAward(AWARDS_SLIDES[(idx - 1 + AWARDS_SLIDES.length) % AWARDS_SLIDES.length]);
                }}
                className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#4C227C]/85 hover:bg-[#4C227C] text-white items-center justify-center shadow-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next award"
                onClick={() => {
                  const idx = AWARDS_SLIDES.findIndex((i) => i.id === lightboxAward.id);
                  setLightboxAward(AWARDS_SLIDES[(idx + 1) % AWARDS_SLIDES.length]);
                }}
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#4C227C]/85 hover:bg-[#4C227C] text-white items-center justify-center shadow-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="px-4 sm:px-5 py-3.5 sm:py-4 bg-[#FFFEFA] border-t border-slate-200 space-y-3">
              <p className="text-xs sm:text-sm text-slate-700 font-medium">{lightboxAward.subtitle}</p>
              <div className="flex sm:hidden items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    const idx = AWARDS_SLIDES.findIndex((i) => i.id === lightboxAward.id);
                    setLightboxAward(AWARDS_SLIDES[(idx - 1 + AWARDS_SLIDES.length) % AWARDS_SLIDES.length]);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#4C227C] bg-[#EFE4FF] rounded-xl"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const idx = AWARDS_SLIDES.findIndex((i) => i.id === lightboxAward.id);
                    setLightboxAward(AWARDS_SLIDES[(idx + 1) % AWARDS_SLIDES.length]);
                  }}
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
    </section>
  );
}
