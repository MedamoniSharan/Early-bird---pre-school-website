import { useState } from 'react';
import {
  PEDAGOGY_PILLARS,
  PedagogyPillar,
  TEACHING_METHODOLOGY_LIST,
} from '../data/preschoolContent';
import { ResilientImage } from './ResilientImage';
import { WaveDivider } from './WaveDivider';
import { ParallaxLayer } from './ParallaxLayer';

export function PedagogySection() {
  const [activeId, setActiveId] = useState<PedagogyPillar['id']>('philosophy');
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
    </section>
  );
}
