import { useState } from 'react';
import { Check, ArrowRight, Clock, GraduationCap, Users, BookOpen, Sparkles, Heart } from 'lucide-react';
import {
  MAJOR_LEARNING_AREAS,
  MONTESSORI_EDUCATORS,
  PageId,
  PROGRAMS,
  ProgramInfo,
  SCHOOL_IDENTITY,
} from '../data/preschoolContent';
import { ResilientImage } from './ResilientImage';
import { PaperPlaneDoodle, StarSparkDoodle } from './PreschoolDoodles';
import { WaveDivider } from './WaveDivider';

interface ProgramsSectionProps {
  onNavigate: (page: PageId) => void;
  showPageHeader?: boolean;
}

export function ProgramsSection({
  onNavigate,
  showPageHeader = true,
}: ProgramsSectionProps) {
  const [selectedId, setSelectedId] = useState<ProgramInfo['id']>('playgroup');
  const activeProgram = PROGRAMS.find((p) => p.id === selectedId) ?? PROGRAMS[0];

  return (
    <section id="programs" className="bg-[#FFFEFA]">
      {/* Services Page Hero Banner */}
      {showPageHeader && (
        <div className="relative bg-[#4C227C] text-white overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
            <StarSparkDoodle className="hidden md:block absolute top-8 right-10 w-10 h-10 text-[#FFBE0B]/70" />
            <p className="text-xs sm:text-sm font-bold text-[#FFBE0B] mb-2">
              Services · Programmes, Pedagogy & Oral Book
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance max-w-3xl mb-3">
              Joyful Early Learning Built for Every Little Milestone
            </h1>
            <p className="text-sm sm:text-lg text-purple-100 max-w-2xl leading-relaxed font-medium">
              Discover our Playgroup, Nursery, LKG & UKG stages, Montessori & Kreedo pedagogy, experiential themes, and original Early Wings Oral Book.
            </p>
          </div>
          <WaveDivider fillColor="#FFFEFA" bgColor="#4C227C" variant="clouds" />
        </div>
      )}

      <div className={`bg-playful-dots ${showPageHeader ? 'py-10 lg:py-16' : 'py-12 lg:py-16'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* School Timings Strip (shown on Services page) */}
          {showPageHeader && (
            <div className="bg-[#FFF8DC] border-2 border-amber-200 rounded-3xl p-5 sm:p-6 mb-12 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#4C227C] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold text-[#4C227C]">
                    Campus Schedule · {SCHOOL_IDENTITY.timings.days}
                  </p>
                  <p className="font-display text-lg font-bold text-slate-950">
                    Playgroup & Nursery (9:00 AM–12:30 PM) · LKG & UKG (9:00 AM–3:00 PM)
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#B45309] shrink-0">
                {SCHOOL_IDENTITY.timings.holidays}
              </p>
            </div>
          )}

          {/* Section Title with Playful Paper Plane Doodle */}
          <div className="relative text-center max-w-3xl mx-auto mb-12">
            <PaperPlaneDoodle className="hidden md:block absolute -top-4 -right-14 w-14 h-14 opacity-90" />
            <p className="text-sm font-bold text-[#4C227C] mb-2">
              Our Preschool Programmes <span aria-hidden="true" className="mx-1.5 text-slate-400">·</span> <span className="tabular-nums">Ages 2–6 Years</span>
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance mb-3">
              Four Developmental Stages from Playgroup to UKG
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Tap any classroom stage below to explore its daily routine, hands-on Montessori & Kreedo activities, and child outcomes.
            </p>
          </div>

          {/* Playful Rounded-3xl 4-Column Photo Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {PROGRAMS.map((program) => {
              const isSelected = program.id === selectedId;
              return (
                <div
                  key={program.id}
                  style={{ borderTopColor: program.accentHex, borderTopWidth: '6px' }}
                  className={`rounded-3xl border-2 bg-white overflow-hidden flex flex-col justify-between transition-all duration-150 ${
                    isSelected
                      ? 'border-[#4C227C] shadow-xl -translate-y-1'
                      : 'border-slate-200 hover:-translate-y-1 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                      <ResilientImage
                        src={program.image}
                        alt={program.imageAlt}
                        fallbackTitle={program.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <p
                        style={{ color: program.accentHex }}
                        className="text-xs font-extrabold tabular-nums mb-1"
                      >
                        {program.ageRange}
                      </p>
                      <h3 className="font-display text-2xl font-bold text-slate-950 mb-1">
                        {program.name}
                      </h3>
                      <p className="text-[11px] font-bold text-slate-500 tabular-nums mb-2.5">
                        {program.timing}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {program.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedId(program.id)}
                      aria-pressed={isSelected}
                      className={`w-full py-2.5 px-4 text-sm font-bold rounded-2xl transition-all whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#4C227C] text-white border-b-4 border-[#2E1150]'
                          : 'bg-[#FFF5D6] text-[#2A104C] border-b-4 border-amber-300 hover:bg-[#FFBE0B] hover:border-[#D99B00]'
                      }`}
                    >
                      {isSelected ? 'Exploring Now' : 'Explore Stage'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Program Deep-Dive Panel */}
          <div
            className={`rounded-3xl border-2 p-4 sm:p-8 mb-12 ${activeProgram.surfaceTint}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-bold text-[#4C227C] tabular-nums">
                    {activeProgram.ageRange}
                  </span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="font-bold text-slate-700">{activeProgram.stageLabel}</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="font-bold text-slate-600 tabular-nums">{activeProgram.timing}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
                  Inside Our {activeProgram.name} Classroom
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white rounded-2xl p-5 border border-slate-200/80">
                    <p className="text-xs font-bold text-[#4C227C] mb-1.5">Daily Classroom Rhythm</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{activeProgram.dailyRhythm}</p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-slate-200/80">
                    <p className="text-xs font-bold text-[#4C227C] mb-1.5">Child Outcome</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{activeProgram.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200/80">
                <p className="text-sm font-bold text-slate-900 mb-3">
                  Key Learning Milestones in {activeProgram.name}
                </p>
                <ul className="space-y-2.5 mb-5">
                  {activeProgram.focusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#4C227C] mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#4C227C] hover:underline underline-offset-4"
                >
                  <span>Enquire for {activeProgram.name}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Dedicated LKG & UKG Progression Spotlight */}
          <div className="bg-[#FFF8DC] border-2 border-amber-200 rounded-3xl p-6 sm:p-8 mb-12">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4C227C] text-white text-xs font-bold uppercase tracking-wider mb-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Kindergarten Progression</span>
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
                  Advancing Beyond Playgroup: LKG & UKG Readiness
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#B45309] bg-white px-3.5 py-1.5 rounded-full border border-amber-300 shrink-0">
                School Timings: 9:00 AM – 3:00 PM
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LKG Card */}
              <div className="bg-white border-2 border-emerald-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 relative">
                    <ResilientImage
                      src="/images/facebook/outdoor_nature_study_activity.jpg"
                      alt="Early Wings LKG children actively exploring numeracy and nature science"
                      fallbackTitle="LKG Exploration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#059669] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow">
                      LKG · Ages 4–5 Years
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h4 className="font-display text-xl font-bold text-slate-950">
                      LKG: Phonics Blending, Numeracy & Logic
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      Following gentle Playgroup foundations, LKG introduces structured Montessori workstations, CVC word blending, quantities & numerals 1–50, tactile shapes, and Telugu/English Oral Book rhymes.
                    </p>
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <Sparkles className="w-4 h-4 text-[#059669] shrink-0" />
                        <span>Key Focus: Three-letter word reading, addition concepts & practical life</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <BookOpen className="w-4 h-4 text-[#059669] shrink-0" />
                        <span>Oral Book: Telugu Vemana padyalu, bilingual vocabulary & nature themes</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedId('lkg');
                      document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 px-4 text-xs font-bold text-[#059669] bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors"
                  >
                    View LKG Daily Schedule & Milestones
                  </button>
                </div>
              </div>

              {/* UKG Card */}
              <div className="bg-white border-2 border-rose-200 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 relative">
                    <ResilientImage
                      src="/images/facebook/teachers_and_students_achievement.jpg"
                      alt="Early Wings UKG children graduating with fluent reading and stage confidence"
                      fallbackTitle="UKG Classroom"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#E11D48] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow">
                      UKG · Ages 5–6 Years
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h4 className="font-display text-xl font-bold text-slate-950">
                      UKG: Fluent Reading & Primary School Mastery
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      UKG consolidates early childhood learning into primary school readiness: sentence reading, comprehension, mental math, environmental inquiry, and expressive stage speaking.
                    </p>
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <Sparkles className="w-4 h-4 text-[#E11D48] shrink-0" />
                        <span>Key Focus: Fluent sentence reading, math operations, and independent writing</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <Users className="w-4 h-4 text-[#E11D48] shrink-0" />
                        <span>Class 1 Readiness: 100% smooth admission transition to top ICSE/CBSE schools</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedId('ukg');
                      document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 px-4 text-xs font-bold text-[#E11D48] bg-rose-50 hover:bg-rose-100 border border-rose-300 rounded-xl transition-colors"
                  >
                    View UKG Daily Schedule & Milestones
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Montessori Trained Teachers & Facilitators Showcase */}
          <div className="bg-white border-2 border-purple-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4FF] text-[#4C227C] text-xs font-bold uppercase tracking-wider mb-2">
                <Heart className="w-3.5 h-3.5 text-[#4C227C]" />
                <span>Our Educators</span>
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
                Montessori Trained Teachers & Loving Facilitators
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                Every classroom is led by certified educators trained in authentic Montessori pedagogy and Kreedo Early Childhood solutions, maintaining a loving 1:10 teacher-to-child ratio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MONTESSORI_EDUCATORS.map((educator) => (
                <div
                  key={educator.name}
                  className="bg-[#FFFEFA] border-2 border-slate-200/90 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                      <ResilientImage
                        src={educator.image}
                        alt={educator.alt}
                        fallbackTitle={educator.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <p className="text-xs font-bold text-[#B45309] uppercase tracking-wide">
                        {educator.experience}
                      </p>
                      <h4 className="font-display text-lg font-bold text-slate-950 leading-snug">
                        {educator.name}
                      </h4>
                      <p className="text-xs font-bold text-[#4C227C]">
                        {educator.role}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {educator.credentials}
                      </p>
                      <div className="pt-2 border-t border-slate-200/70">
                        <p className="text-xs text-slate-700 font-medium leading-relaxed">
                          <span className="font-bold text-slate-900">Classroom Focus: </span>
                          {educator.specialty}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 9 Major Learning Areas Grid */}
          <div className="bg-[#F5F0FF] border-2 border-purple-200/80 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-5">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#4C227C]">
                Nine Core Learning Areas Across Playgroup to UKG
              </h3>
              <p className="text-sm font-semibold text-slate-600">
                Balanced holistic progression from ages 2 to 6
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 border-t border-purple-200 pt-5">
              {MAJOR_LEARNING_AREAS.map((area, index) => (
                <div key={area} className="flex items-baseline gap-3 py-1 text-sm text-slate-800">
                  <span className="font-display font-bold text-[#4C227C] tabular-nums text-xs">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span className="font-bold">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
