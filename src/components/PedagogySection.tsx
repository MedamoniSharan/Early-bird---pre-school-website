import { useState } from 'react';
import {
  PEDAGOGY_PILLARS,
  PedagogyPillar,
  TEACHING_METHODOLOGY_LIST,
  OUTDOOR_LEARNING_ACTIVITIES,
  OutdoorActivityItem,
} from '../data/preschoolContent';
import { ResilientImage } from './ResilientImage';
import { WaveDivider } from './WaveDivider';
import { ParallaxLayer } from './ParallaxLayer';
import { Sparkles, Check, ZoomIn, X } from 'lucide-react';

export function PedagogySection() {
  const [activeId, setActiveId] = useState<PedagogyPillar['id']>('philosophy');
  const [selectedOutdoorItem, setSelectedOutdoorItem] = useState<OutdoorActivityItem | null>(null);
  const activePillar =
    PEDAGOGY_PILLARS.find((pillar) => pillar.id === activeId) ?? PEDAGOGY_PILLARS[0];

  return (
    <section id="methodology" className="bg-[#FFF8DC] overflow-hidden">
      <WaveDivider fillColor="#FFF8DC" bgColor="#FFFEFA" variant="clouds" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14 lg:py-20 space-y-12">
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <p className="text-sm font-bold text-[#4C227C] mb-2">
              Our Pedagogy & Methodology
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance mb-3">
              Hands-On Discovery, Joyful Concentration & Loving Facilitators
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Early Wings nurtures every dimension of childhood growth through authentic wooden Montessori apparatus, Kreedo’s Bengaluru-designed structured framework, and warm teacher observation.
            </p>
          </div>

          {/* Storybook Photo Frame + Interactive Color-Coded Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white flex-1 transition-transform duration-200 lg:-rotate-1 lg:hover:rotate-0">
                <ParallaxLayer offset={14} className="w-full h-64 sm:h-72 lg:h-full">
                  <ResilientImage
                    src="/images/montessori_sensory_learning_1794591478244.jpg"
                    alt="Wooden Montessori geometric solids, pink tower, counting beads, and phonics cards in a sunlit Early Wings classroom"
                    fallbackTitle="Montessori & Kreedo Materials"
                    className="w-full h-full object-cover"
                  />
                </ParallaxLayer>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-5">
              <div
                role="tablist"
                aria-label="Pedagogical pillars"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {PEDAGOGY_PILLARS.map((pillar) => {
                  const isSelected = pillar.id === activeId;
                  return (
                    <button
                      key={pillar.id}
                      role="tab"
                      type="button"
                      aria-selected={isSelected}
                      onClick={() => setActiveId(pillar.id)}
                      style={{
                        borderTopColor: pillar.accentColor,
                        borderTopWidth: '5px',
                      }}
                      className={`text-left p-4 rounded-2xl border-2 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[#4C227C] ${
                        isSelected
                          ? 'bg-[#4C227C] text-white border-[#4C227C] shadow-md'
                          : 'bg-white text-slate-900 border-amber-200 hover:border-[#4C227C]/40'
                      }`}
                    >
                      <span
                        className={`block font-display text-xs font-bold tabular-nums mb-1 ${
                          isSelected ? 'text-[#FFBE0B]' : 'text-[#4C227C]'
                        }`}
                      >
                        {pillar.index}.
                      </span>
                      <span className="block font-display text-base font-bold leading-snug">
                        {pillar.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                aria-label={activePillar.title}
                className="bg-white border-2 border-amber-200 rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <p className="text-xs font-bold text-[#4C227C] mb-1">
                    {activePillar.index}. {activePillar.subtitle}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-slate-950 mb-3">
                    {activePillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                    {activePillar.lead}
                  </p>

                  <ul className="space-y-2.5 border-t border-slate-200 pt-4 mb-5">
                    {activePillar.points.map((point, idx) => (
                      <li
                        key={point}
                        className="flex items-baseline gap-3 text-sm text-slate-800"
                      >
                        <span className="font-display text-xs font-bold text-[#4C227C] tabular-nums shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm font-bold text-[#4C227C] pt-4 border-t border-slate-200">
                  {activePillar.closing}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Outdoor Learning & Garden Discovery Section */}
        <div id="outdoor-learning" className="bg-[#F0FDF4] border-2 border-emerald-300 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#059669] text-xs font-semibold uppercase tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open-Air Nature Classrooms</span>
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-950">
                Outdoor Learning & Garden Discovery
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                At Early Wings, learning naturally expands outdoors into our serene green garden. Under the fresh air and green canopy of our Kanuru campus, children explore sensorial Montessori geography trays, gather for lively circle time rhymes, solve giant world continent puzzles, and practice mindful morning yoga.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-3.5 py-2 rounded-2xl border border-emerald-200">
              <span>🌿 Nature-integrated experiential pedagogy</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OUTDOOR_LEARNING_ACTIVITIES.map((item) => (
              <div
                key={item.id}
                className="bg-white border-2 border-emerald-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div
                    onClick={() => setSelectedOutdoorItem(item)}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer"
                    title="Click to view full photo"
                  >
                    <ResilientImage
                      src={item.image}
                      alt={item.alt}
                      fallbackTitle={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      style={{ backgroundColor: item.accentColor }}
                      className="absolute top-2.5 left-2.5 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs"
                    >
                      {item.tag}
                    </div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold backdrop-blur-xs">
                      <ZoomIn className="w-4 h-4" />
                      <span>Enlarge Photo</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h4 className="font-display text-base font-semibold text-slate-950 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="border-t border-emerald-100 pt-2.5 space-y-1.5">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 10 Core Teaching Methodologies */}
        <div className="bg-white border-2 border-amber-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-5">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#4C227C]">
              Our Teaching Methodology in Daily Practice
            </h3>
            <p className="text-sm font-semibold text-slate-600">
              Ten child-centred practices integrated across all stages
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-3 border-t border-amber-200 pt-5">
            {TEACHING_METHODOLOGY_LIST.map((method, idx) => (
              <div key={method} className="flex items-baseline gap-2.5 text-sm text-slate-800 py-1">
                <span className="font-display text-xs font-bold text-[#B45309] tabular-nums shrink-0">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <span className="font-bold leading-snug">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Outdoor Learning Photos */}
      {selectedOutdoorItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedOutdoorItem.title}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedOutdoorItem(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100">
              <div>
                <span
                  style={{ backgroundColor: selectedOutdoorItem.accentColor }}
                  className="inline-block text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-1"
                >
                  {selectedOutdoorItem.tag}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-slate-950">
                  {selectedOutdoorItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedOutdoorItem(null)}
                aria-label="Close photo preview"
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-1 bg-slate-900 flex items-center justify-center p-2 overflow-hidden min-h-[300px]">
              <img
                src={selectedOutdoorItem.image}
                alt={selectedOutdoorItem.alt}
                className="max-h-[60vh] max-w-full object-contain rounded-lg"
              />
            </div>

            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 space-y-2">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {selectedOutdoorItem.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedOutdoorItem.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full"
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
    </section>
  );
}
