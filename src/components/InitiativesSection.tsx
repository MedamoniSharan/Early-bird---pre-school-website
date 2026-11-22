import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  Compass,
  ExternalLink,
  Heart,
  MessageSquare,
  PlayCircle,
  Sparkles,
  Star,
  X,
  ZoomIn,
} from 'lucide-react';
import {
  EARLY_WINGS_ORAL_BOOK,
  EXPERIENTIAL_ACTIVITIES,
  FOUNDER_PROFILE,
  INDEPENDENCE_DAY_SHOWCASE,
  IndependenceDayItem,
  LEARNING_THEMES,
  ORAL_BOOK_AUTHORSHIP,
  ORAL_BOOK_CATEGORIES,
  PageId,
  SCHOOL_IDENTITY,
} from '../data/preschoolContent';
import { ResilientImage } from './ResilientImage';
import { ParallaxLayer } from './ParallaxLayer';
import { WaveDivider } from './WaveDivider';
import { YouTubeLogo } from './SocialBrandLogos';

interface InitiativesSectionProps {
  onNavigate: (page: PageId) => void;
}

export function InitiativesSection({ onNavigate }: InitiativesSectionProps) {
  const [selectedBookCatId, setSelectedBookCatId] = useState(ORAL_BOOK_CATEGORIES[0].id);
  const [beyondTab, setBeyondTab] = useState<'activities' | 'themes'>('activities');
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedIndepItem, setSelectedIndepItem] = useState<IndependenceDayItem | null>(null);

  const activeCategory =
    ORAL_BOOK_CATEGORIES.find((cat) => cat.id === selectedBookCatId) ?? ORAL_BOOK_CATEGORIES[0];

  return (
    <section id="initiatives" className="bg-[#FFFEFA] overflow-hidden">
      <WaveDivider fillColor="#FFFEFA" bgColor="#FFF8DC" variant="clouds" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20 space-y-14">
        {/* Asymmetric Bento Row: Early Wings Oral Book + Karunamai's Tales */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-bold text-[#4C227C] mb-2">
              Our Original Educational Resource
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
              Early Wings Oral Book
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
              Curated with Purpose, Created with Love · Playgroup to Grade 2
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Large Bento Card: Early Wings Oral Book */}
            <div className="lg:col-span-7 bg-[#F5F0FF] border-2 border-purple-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4C227C] text-white text-xs font-bold uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    <span>Original Educational Resource</span>
                  </span>
                  <span className="text-xs font-bold text-[#4C227C] bg-white px-2.5 py-1 rounded-full border border-purple-200">
                    Playgroup to Grade 2
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
                    {EARLY_WINGS_ORAL_BOOK.title}
                  </h3>
                  <p className="font-display text-sm sm:text-base font-semibold text-[#4C227C] mt-0.5">
                    {EARLY_WINGS_ORAL_BOOK.subtitle}
                  </p>
                </div>

                {/* Actual Book Cover Mockup Image Frame */}
                <div
                  onClick={() => setIsBookModalOpen(true)}
                  className="relative rounded-2xl overflow-hidden border-2 border-purple-200 shadow-md group cursor-pointer bg-white"
                  title="Click to view full Early Wings Oral Book resource overview"
                >
                  <img
                    src={EARLY_WINGS_ORAL_BOOK.image}
                    alt={EARLY_WINGS_ORAL_BOOK.alt}
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-bold backdrop-blur-xs">
                    <ZoomIn className="w-5 h-5" />
                    <span>Click to Zoom & Inspect Book</span>
                  </div>
                </div>

                {/* Author's Guiding Words */}
                <div className="bg-white/80 border border-purple-200 rounded-xl p-3.5 space-y-1">
                  <p className="text-xs sm:text-sm font-bold text-[#4C227C] italic leading-snug">
                    “{EARLY_WINGS_ORAL_BOOK.quote}”
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-semibold">
                    — {EARLY_WINGS_ORAL_BOOK.authorship}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {EARLY_WINGS_ORAL_BOOK.purpose}
                </p>

                {/* The Book Includes List */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-purple-100 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#4C227C]">
                    What’s Inside the Book?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {EARLY_WINGS_ORAL_BOOK.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                        <Check className="w-4 h-4 text-[#4C227C] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Content Preview Tabs */}
                <div>
                  <p className="text-xs font-bold text-slate-600 mb-2">
                    Explore Oral Book Modules:
                  </p>
                  <div
                    role="tablist"
                    aria-label="Early Wings Oral Book sections"
                    className="flex flex-wrap gap-2"
                  >
                    {ORAL_BOOK_CATEGORIES.map((category) => {
                      const active = category.id === selectedBookCatId;
                      return (
                        <button
                          key={category.id}
                          role="tab"
                          type="button"
                          aria-selected={active}
                          onClick={() => setSelectedBookCatId(category.id)}
                          className={`px-3 py-2 text-xs font-bold rounded-xl border-2 transition-colors sm:whitespace-nowrap text-left focus-visible:outline-2 focus-visible:outline-[#4C227C] ${
                            active
                              ? 'bg-[#4C227C] text-white border-[#4C227C]'
                              : 'bg-white text-slate-700 border-purple-200 hover:border-[#4C227C]/50'
                          }`}
                        >
                          {category.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div
                  role="tabpanel"
                  aria-label={activeCategory.title}
                  className="bg-white border-2 border-purple-100 rounded-2xl p-4 sm:p-5 shadow-xs"
                >
                  <p className="font-display text-base font-bold text-slate-950 mb-1">
                    {activeCategory.title}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    {activeCategory.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-[#4C227C]">
                    {activeCategory.highlights.map((item, idx) => (
                      <span key={item}>
                        {idx > 0 && <span aria-hidden="true" className="mr-3 text-slate-300">/</span>}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome & Core Values Footer */}
                <div className="pt-2 border-t border-purple-200/80 space-y-1">
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {EARLY_WINGS_ORAL_BOOK.outcome}
                  </p>
                  <p className="text-xs font-bold text-[#4C227C] italic">
                    “{EARLY_WINGS_ORAL_BOOK.tagline}”
                  </p>
                </div>
              </div>
            </div>

            {/* Adjacent Bento Card: Karunamai's Tales */}
            <div className="lg:col-span-5 bg-[#FFF5D6] border-2 border-amber-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <p className="text-xs font-bold text-[#4C227C]">
                    {FOUNDER_PROFILE.storytelling.platform}
                  </p>
                  <PlayCircle className="w-5 h-5 text-[#D97706]" aria-hidden="true" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 mb-3">
                  {FOUNDER_PROFILE.storytelling.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  {FOUNDER_PROFILE.storytelling.description}
                </p>

                <ul className="space-y-2.5 text-sm text-slate-800 border-t border-amber-200 pt-5 font-medium">
                  {FOUNDER_PROFILE.storytelling.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-amber-200 space-y-4">
                <p className="font-display text-base font-bold text-[#4C227C]">
                  “{FOUNDER_PROFILE.storytelling.quote}”
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={SCHOOL_IDENTITY.contact.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-[#2A104C] bg-[#FFBE0B] hover:bg-[#F5B300] border-b-4 border-[#D99B00] rounded-xl transition-all"
                  >
                    <YouTubeLogo className="w-4 h-4 shrink-0" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => onNavigate('social')}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#4C227C] hover:underline underline-offset-4"
                  >
                    <span>All Social Channels</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Benefits Children Strip (Matching the Book Poster) */}
        <div className="bg-[#FFF8DC] border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4C227C] text-white text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Oral Learning Outcomes</span>
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
              How It Benefits Children?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Cultivating strong language foundations, confident expression, and cultural pride from Playgroup to Grade 2.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {EARLY_WINGS_ORAL_BOOK.benefits.map((benefit, idx) => {
              const icons = [MessageSquare, Brain, Compass, Star, Heart];
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={benefit.title}
                  className="bg-white border-2 border-amber-200/90 rounded-2xl p-4 flex flex-col justify-between text-center hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-[#B45309] flex items-center justify-center mb-2.5">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-display text-sm font-bold text-slate-950 leading-snug mb-1">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Beyond the Classroom + Joyful Storybook Classroom Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-2">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-bold text-[#4C227C] mb-2">
              Beyond the Classroom
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 mb-3 text-balance">
              Little Hands, Big Adventures Every Single Day
            </h3>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              Children learn through yoga, festivals, gardening, cooking, puppetry, music, and thematic discovery that foster creativity, teamwork, and joyful confidence.
            </p>

            {/* Interactive Switcher: Activities vs Learning Themes */}
            <div
              role="tablist"
              aria-label="Beyond the classroom categories"
              className="w-full sm:w-auto inline-flex flex-wrap items-center gap-1 p-1.5 bg-[#F5F0FF] border-2 border-purple-200 rounded-2xl self-start mb-6"
            >
              <button
                role="tab"
                type="button"
                aria-selected={beyondTab === 'activities'}
                onClick={() => setBeyondTab('activities')}
                className={`flex-1 sm:flex-initial text-center px-3 sm:px-4 py-2.5 sm:py-2 text-xs sm:text-sm font-bold rounded-xl transition-colors sm:whitespace-nowrap ${
                  beyondTab === 'activities'
                    ? 'bg-[#4C227C] text-white'
                    : 'text-slate-700 hover:text-[#4C227C]'
                }`}
              >
                Experiential Activities
              </button>
              <button
                role="tab"
                type="button"
                aria-selected={beyondTab === 'themes'}
                onClick={() => setBeyondTab('themes')}
                className={`flex-1 sm:flex-initial text-center px-3 sm:px-4 py-2.5 sm:py-2 text-xs sm:text-sm font-bold rounded-xl transition-colors sm:whitespace-nowrap ${
                  beyondTab === 'themes'
                    ? 'bg-[#4C227C] text-white'
                    : 'text-slate-700 hover:text-[#4C227C]'
                }`}
              >
                Thematic Units
              </button>
            </div>

            {beyondTab === 'activities' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 border-t border-slate-200 pt-5">
                {EXPERIENTIAL_ACTIVITIES.map((activity, idx) => (
                  <div key={activity} className="flex items-baseline gap-2.5 text-sm text-slate-800 py-1">
                    <span className="font-display text-xs font-bold text-[#4C227C] tabular-nums">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="font-semibold">{activity}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 border-t border-slate-200 pt-5">
                {LEARNING_THEMES.map((theme, idx) => (
                  <div key={theme} className="flex items-baseline gap-2.5 text-sm text-slate-800 py-1">
                    <span className="font-display text-xs font-bold text-[#4C227C] tabular-nums">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="font-semibold">{theme}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-3xl overflow-hidden border-4 border-[#FFBE0B] shadow-xl bg-slate-100 transition-transform duration-200 lg:rotate-1 lg:hover:rotate-0">
              <ParallaxLayer offset={14} className="w-full h-64 sm:h-80 lg:h-full">
                <ResilientImage
                  src="/images/creative_storytelling_arts_1794591479625.jpg"
                  alt="Early Wings children joyfully participating in puppet storytelling and creative leaf craft activities"
                  fallbackTitle="Storytelling & Creative Arts"
                  className="w-full h-full object-cover"
                />
              </ParallaxLayer>
            </div>
          </div>
        </div>

        {/* Independence Day & Patriotic Celebrations Showcase */}
        <div id="independence-day" className="bg-gradient-to-br from-amber-50/70 via-white to-emerald-50/70 border-2 border-amber-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-emerald-600 text-white text-xs font-semibold uppercase tracking-wider shadow-xs">
                🇮🇳 Independence Day Celebrations
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950">
                {INDEPENDENCE_DAY_SHOWCASE.theme}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {INDEPENDENCE_DAY_SHOWCASE.lead}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white/90 px-3.5 py-2 rounded-2xl border border-amber-200 shadow-2xs">
              <span>🌟 Annual Flag Hoisting & Patriotic Roleplay</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INDEPENDENCE_DAY_SHOWCASE.items.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedIndepItem(item)}
                className="bg-white border-2 border-amber-100 hover:border-[#4C227C] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
                title="Click to view full photo"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <ResilientImage
                      src={item.image}
                      alt={item.alt}
                      fallbackTitle={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      style={{ backgroundColor: item.accentColor }}
                      className="absolute top-2 left-2 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-xs"
                    >
                      {item.badge}
                    </div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-white text-xs font-semibold backdrop-blur-xs">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>View</span>
                    </div>
                  </div>
                  <div className="p-3.5 space-y-1.5">
                    <h4 className="font-display text-xs sm:text-sm font-semibold text-slate-950 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 pt-0">
                  <div className="border-t border-slate-100 pt-2 space-y-1">
                    {item.highlights.slice(0, 2).map((h) => (
                      <div key={h} className="flex items-center gap-1 text-[10px] text-slate-700 font-medium">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Independence Day Photos */}
      {selectedIndepItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedIndepItem.title}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedIndepItem(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100">
              <div>
                <span
                  style={{ backgroundColor: selectedIndepItem.accentColor }}
                  className="inline-block text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-1"
                >
                  {selectedIndepItem.badge}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-slate-950">
                  {selectedIndepItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedIndepItem(null)}
                aria-label="Close photo preview"
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-1 bg-slate-900 flex items-center justify-center p-2 overflow-hidden min-h-[300px]">
              <img
                src={selectedIndepItem.image}
                alt={selectedIndepItem.alt}
                className="max-h-[60vh] max-w-full object-contain rounded-lg"
              />
            </div>

            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 space-y-2">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {selectedIndepItem.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedIndepItem.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-900 bg-amber-100/90 px-2.5 py-1 rounded-full"
                  >
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>{highlight}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Full Book Graphic */}
      {isBookModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsBookModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-950">
                  {EARLY_WINGS_ORAL_BOOK.title}
                </h3>
                <p className="text-xs text-[#4C227C] font-semibold">
                  {EARLY_WINGS_ORAL_BOOK.subtitle} · Compiled by Karunamai Nandamuri
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsBookModalOpen(false)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center">
              <img
                src={EARLY_WINGS_ORAL_BOOK.image}
                alt={EARLY_WINGS_ORAL_BOOK.alt}
                className="w-full h-auto object-contain max-h-[70vh]"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 pt-1">
              <p className="font-medium italic text-slate-800">
                “{EARLY_WINGS_ORAL_BOOK.quote}”
              </p>
              <button
                type="button"
                onClick={() => setIsBookModalOpen(false)}
                className="self-end sm:self-auto px-4 py-2 font-bold text-white bg-[#4C227C] rounded-xl hover:bg-[#3A1763] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
