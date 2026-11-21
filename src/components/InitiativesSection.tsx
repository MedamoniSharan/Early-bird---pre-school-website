import { useState } from 'react';
import { ArrowRight, BookOpen, Check, ExternalLink, PlayCircle, Sparkles } from 'lucide-react';
import {
  EARLY_WINGS_ORAL_BOOK,
  EXPERIENTIAL_ACTIVITIES,
  FOUNDER_PROFILE,
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
              Original Educational Initiatives
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
              Curated with Purpose, Rooted in Language & Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Large Bento Card: Early Wings Oral Book */}
            <div className="lg:col-span-7 bg-[#F5F0FF] border-2 border-purple-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4C227C] text-white text-xs font-bold uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    <span>Exclusive Educational Resource</span>
                  </span>
                  <span className="text-xs font-bold text-[#4C227C]">
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

                <p className="text-xs sm:text-sm text-slate-700 font-semibold bg-white/70 border border-purple-200/60 rounded-xl p-3 leading-relaxed">
                  {EARLY_WINGS_ORAL_BOOK.authorship}
                </p>

                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {EARLY_WINGS_ORAL_BOOK.purpose}
                </p>

                {/* The Book Includes List */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-purple-100 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#4C227C]">
                    The Book Includes:
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
      </div>
    </section>
  );
}
