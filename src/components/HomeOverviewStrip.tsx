import { ArrowRight, Award, BookOpen, Clock, HeartHandshake, PlayCircle } from 'lucide-react';
import { FOUNDER_PROFILE, PageId, SCHOOL_IDENTITY } from '../data/preschoolContent';
import { WaveDivider } from './WaveDivider';
import { ResilientImage } from './ResilientImage';
import { WhatsAppLogo } from './SocialBrandLogos';

interface HomeOverviewStripProps {
  onNavigate: (page: PageId) => void;
}

const PATHWAYS: {
  page: PageId;
  title: string;
  eyebrow: string;
  description: string;
  cta: string;
  style: string;
  icon: typeof HeartHandshake;
}[] = [
  {
    page: 'about',
    eyebrow: 'Vision & Leadership',
    title: 'About Early Wings & Our Founder',
    description:
      'Discover our journey since 9th June 2016, Proverbs 22:6 vision, and Principal Karunamai Nandamuri (MA, B.Ed., Child Psychologist).',
    cta: 'Read Our Story',
    style: 'bg-[#FFF5D6] border-amber-200 hover:border-[#4C227C]',
    icon: HeartHandshake,
  },
  {
    page: 'services',
    eyebrow: 'Ages 2–6 Years · Mon–Fri',
    title: 'Programmes, Pedagogy & Oral Book',
    description:
      'Explore Playgroup, Nursery, LKG & UKG timings, Montessori & Kreedo methodology, and our original Early Wings Oral Book.',
    cta: 'Explore Services',
    style: 'bg-[#E8F6FF] border-sky-200 hover:border-[#4C227C]',
    icon: BookOpen,
  },
  {
    page: 'gallery',
    eyebrow: 'Awards & Campus Life',
    title: 'Certificates & Campus Gallery',
    description:
      'View our Top 100 & Top 50 Preschool awards, 10-Year Contribution honour by Dr. Kiran Bedi, and authentic school photos.',
    cta: 'View Gallery',
    style: 'bg-[#E9FAF0] border-emerald-200 hover:border-[#4C227C]',
    icon: Award,
  },
  {
    page: 'social',
    eyebrow: 'YouTube, Facebook & Instagram',
    title: "Karunamai's Tales & Social Updates",
    description:
      'Watch Karunamai’s 10 glorious years journey on YouTube and follow festival, Annual Day, and classroom updates on Facebook.',
    cta: 'Connect Online',
    style: 'bg-[#FFF0F3] border-rose-200 hover:border-[#4C227C]',
    icon: PlayCircle,
  },
];

export function HomeOverviewStrip({ onNavigate }: HomeOverviewStripProps) {
  return (
    <section className="bg-[#FFFEFA] overflow-hidden">
      <WaveDivider fillColor="#FFFEFA" bgColor="#EFE4FF" variant="hills" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
        {/* Highlighted Director / Founder & Principal Spotlight on Landing Page */}
        <div className="bg-[#F5F0FF] border-2 border-purple-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden border-4 border-[#FFBE0B] bg-white shadow-xl">
                <ResilientImage
                  src={FOUNDER_PROFILE.image}
                  alt="Karunamai Nandamuri — Founder, Director & Principal of Early Wings Preschool"
                  fallbackTitle={FOUNDER_PROFILE.name}
                  className="w-full h-auto object-contain bg-white"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs sm:text-sm font-bold text-[#4C227C]">
                Leadership & Mentorship <span aria-hidden="true" className="mx-1.5 text-slate-400">·</span> Founder, Director & Principal
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 leading-tight">
                {FOUNDER_PROFILE.name}
              </h2>
              <p className="text-sm font-bold text-[#B45309]">
                {FOUNDER_PROFILE.credentialsShort} · Early Educator · Child Counsellor & Child Psychologist
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {FOUNDER_PROFILE.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 border-t border-purple-200 pt-4 text-sm text-slate-800">
                {FOUNDER_PROFILE.qualifications.map((qual) => (
                  <div key={qual} className="font-semibold leading-snug py-0.5">
                    • {qual}
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#2A104C] bg-[#FFBE0B] hover:bg-[#F5B300] border-b-4 border-[#D99B00] active:translate-y-0.5 rounded-2xl transition-all"
                >
                  <span>Read Founder’s Story & Achievements</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>
                <a
                  href={SCHOOL_IDENTITY.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#14532D] bg-[#DCFCE7] hover:bg-[#BBF7D0] border-2 border-[#86EFAC] rounded-2xl transition-colors"
                >
                  <WhatsAppLogo className="w-5 h-5 shrink-0" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* School Promise & Timings Strip */}
        <div className="bg-[#FFF8DC] border-2 border-amber-200 rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-[#4C227C]">
                Our Promise · {SCHOOL_IDENTITY.location}
              </span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-xs font-bold text-[#B45309]">
                {SCHOOL_IDENTITY.tagline}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 text-balance">
              {SCHOOL_IDENTITY.promise}
            </h2>
            <div className="pt-2 border-t border-amber-300/60 space-y-1">
              <p className="text-xs font-bold text-[#4C227C] uppercase tracking-wide">
                Vision · Bible Verse
              </p>
              <p className="text-sm sm:text-base text-slate-800 font-bold italic leading-snug">
                “{SCHOOL_IDENTITY.visionQuote}” — <span className="font-bold text-[#4C227C] not-italic">{SCHOOL_IDENTITY.visionSource}</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-700 font-semibold pt-0.5">
                <span className="font-bold text-[#B45309]">Core Belief:</span> “{SCHOOL_IDENTITY.belief}”
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-amber-200 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#4C227C]">
              <Clock className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>School Timings ({SCHOOL_IDENTITY.timings.days})</span>
            </div>
            <p className="text-sm font-bold text-slate-900 tabular-nums">
              {SCHOOL_IDENTITY.timings.playgroupNursery}
            </p>
            <p className="text-sm font-bold text-slate-900 tabular-nums">
              {SCHOOL_IDENTITY.timings.lkgUkg}
            </p>
            <p className="text-xs font-semibold text-slate-500">
              {SCHOOL_IDENTITY.timings.holidays}
            </p>
          </div>
        </div>

        {/* 4 Clean Page Pathways */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-sm font-bold text-[#4C227C] mb-1.5">
              Discover Early Wings Preschool
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 text-balance">
              Everything Parents Want to Explore
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PATHWAYS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => onNavigate(item.page)}
                  className={`group text-left border-2 rounded-3xl p-6 flex flex-col justify-between transition-all duration-150 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[#4C227C] ${item.style}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-xs font-bold text-[#4C227C]">{item.eyebrow}</span>
                      <Icon className="w-5 h-5 text-[#4C227C] shrink-0" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-950 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4C227C] group-hover:underline underline-offset-4">
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
