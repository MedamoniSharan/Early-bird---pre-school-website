import { ArrowRight, Mail, Phone } from 'lucide-react';
import {
  FOUNDER_PROFILE,
  FUTURE_VISION_PILLARS,
  JOURNEY_ACHIEVEMENTS,
  MISSION_COMMITMENTS,
  PageId,
  SCHOOL_IDENTITY,
} from '../data/preschoolContent';
import { ResilientImage } from './ResilientImage';
import { WaveDivider } from './WaveDivider';
import { StarSparkDoodle } from './PreschoolDoodles';
import { FacebookLogo, InstagramLogo, WhatsAppLogo, YouTubeLogo } from './SocialBrandLogos';
import { CertificatesShowcase } from './CertificatesShowcase';

interface AboutUsPageProps {
  onNavigate: (page: PageId) => void;
}

export function AboutUsPage({ onNavigate }: AboutUsPageProps) {
  return (
    <div className="bg-[#FFFEFA]">
      {/* About Us Page Hero */}
      <section className="relative bg-[#4C227C] text-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
          <StarSparkDoodle className="hidden md:block absolute top-8 right-10 w-10 h-10 text-[#FFBE0B]/70" />
          <p className="text-xs sm:text-sm font-bold text-[#FFBE0B] mb-2">
            About Us · Established {SCHOOL_IDENTITY.foundedDate} · {SCHOOL_IDENTITY.location}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance max-w-4xl mb-4">
            {SCHOOL_IDENTITY.heroLead}
          </h1>
          <p className="text-sm sm:text-lg text-purple-100 max-w-3xl leading-relaxed font-medium">
            Founded with a strong educational purpose, Early Wings Preschool believes early childhood is the most significant foundation for lifelong learning. We see education as more than teaching alphabets, numbers, and concepts — it is about nurturing character, confidence, curiosity, independence, and unlocking every child’s potential.
          </p>
        </div>
        <WaveDivider fillColor="#FFFEFA" bgColor="#4C227C" variant="clouds" />
      </section>

      {/* About Story + Vision + Belief + Mission + Future Vision */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-bold text-[#4C227C]">
              Who We Are · {SCHOOL_IDENTITY.tagline}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 text-balance">
              Nurturing Capable, Compassionate & Value-Driven Individuals
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Established on 9th June 2016 in Kanuru, Vijayawada, Andhra Pradesh, Early Wings Preschool provides early childhood education across Playgroup, Nursery, LKG, and UKG.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Our educational approach thoughtfully integrates authentic Montessori principles, the Kreedo Early Childhood Learning Framework (Bengaluru), and play-based experiential learning so every child thrives physically, intellectually, socially, emotionally, creatively, and morally.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#FFF5D6] border-2 border-amber-200 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-full bg-[#B45309] text-white text-[11px] font-extrabold uppercase tracking-wide">
                Vision · Bible Verse
              </span>
              <span className="text-xs font-bold text-[#4C227C]">
                {SCHOOL_IDENTITY.visionSource}
              </span>
            </div>
            <blockquote className="font-display text-xl sm:text-2xl font-bold text-slate-950 leading-snug">
              “{SCHOOL_IDENTITY.visionQuote}”
            </blockquote>
            <p className="text-xs sm:text-sm font-bold text-[#4C227C]">
              — {SCHOOL_IDENTITY.visionSource} · Our Guiding Vision
            </p>
            <div className="pt-3 border-t border-amber-300/80">
              <p className="text-xs font-bold text-[#B45309] uppercase tracking-wide mb-1">
                Core Belief
              </p>
              <p className="text-sm sm:text-base font-bold text-slate-900">
                “{SCHOOL_IDENTITY.belief}”
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Future Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-[#F5F0FF] border-2 border-purple-200/80 rounded-3xl p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-[#4C227C] mb-2">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              To provide meaningful, quality, and developmentally appropriate early childhood education through Montessori principles, structured learning, and experiential activities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 border-t border-purple-200 pt-5">
              {MISSION_COMMITMENTS.map((item, idx) => (
                <div key={item} className="flex items-baseline gap-2.5 text-sm text-slate-800">
                  <span className="font-display text-xs font-bold text-[#4C227C] tabular-nums shrink-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#4C227C] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#FFBE0B] mb-2">
                Our Future Vision
              </h3>
              <p className="text-sm text-purple-100 leading-relaxed mb-5">
                Our aspirations extend beyond preschool classrooms toward a comprehensive educational ecosystem bringing together:
              </p>
              <ul className="space-y-2.5 border-t border-white/15 pt-4">
                {FUTURE_VISION_PILLARS.map((pillar, idx) => (
                  <li key={pillar} className="flex items-baseline gap-2.5 text-sm text-purple-50">
                    <span className="font-display text-xs font-bold text-[#FFBE0B] tabular-nums shrink-0">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile & Journey Section */}
      <section className="bg-[#EFE4FF] overflow-hidden">
        <WaveDivider fillColor="#EFE4FF" bgColor="#FFFEFA" variant="wave" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Founder Card */}
            <div className="lg:col-span-6 bg-white border-2 border-purple-200 rounded-3xl p-5 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start mb-6">
                <div className="sm:col-span-5 flex justify-center sm:block">
                  <div className="w-full max-w-[260px] sm:max-w-none rounded-3xl overflow-hidden border-4 border-[#FFBE0B] bg-white shadow-sm">
                    <ResilientImage
                      src={FOUNDER_PROFILE.image}
                      alt="Karunamai Nandamuri — Founder, Director & Principal of Early Wings Preschool"
                      fallbackTitle={FOUNDER_PROFILE.name}
                      className="w-full h-auto object-contain bg-white"
                    />
                  </div>
                </div>
                <div className="sm:col-span-7 space-y-2">
                  <p className="text-xs font-bold text-[#4C227C]">
                    Founder & Principal · {FOUNDER_PROFILE.credentialsShort}
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 leading-tight">
                    {FOUNDER_PROFILE.name}
                  </h2>
                  <p className="text-xs font-bold text-[#B45309] leading-relaxed">
                    {FOUNDER_PROFILE.titles.join(' · ')}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    {FOUNDER_PROFILE.bio}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <p className="text-xs font-bold text-[#4C227C] mb-3">
                  Academic Qualifications & Professional Training
                </p>
                <ul className="space-y-2">
                  {FOUNDER_PROFILE.qualifications.map((qualification) => (
                    <li
                      key={qualification}
                      className="text-sm text-slate-800 font-medium leading-snug py-1 border-b border-slate-100 last:border-b-0"
                    >
                      {qualification}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-200 mt-5 pt-5 space-y-2.5">
                <p className="text-xs font-bold text-[#4C227C]">
                  Direct Contact
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href={SCHOOL_IDENTITY.contact.phoneHref}
                    className="inline-flex items-center gap-2 font-semibold text-slate-800 hover:text-[#4C227C] tabular-nums w-fit"
                  >
                    <Phone className="w-4 h-4 text-[#4C227C] shrink-0" aria-hidden="true" />
                    <span>{SCHOOL_IDENTITY.contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${SCHOOL_IDENTITY.contact.email}`}
                    className="inline-flex items-center gap-2 font-semibold text-slate-800 hover:text-[#4C227C] break-all w-fit"
                  >
                    <Mail className="w-4 h-4 text-[#4C227C] shrink-0" aria-hidden="true" />
                    <span>{SCHOOL_IDENTITY.contact.email}</span>
                  </a>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
                    <a
                      href={SCHOOL_IDENTITY.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-[#15803D] hover:underline underline-offset-4"
                    >
                      <WhatsAppLogo className="w-5 h-5 shrink-0" />
                      <span>WhatsApp Enquiry</span>
                    </a>
                    <a
                      href={SCHOOL_IDENTITY.contact.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-[#4C227C] hover:underline underline-offset-4"
                    >
                      <YouTubeLogo className="w-5 h-5 shrink-0" />
                      <span>YouTube</span>
                    </a>
                    <a
                      href={SCHOOL_IDENTITY.contact.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-[#4C227C] hover:underline underline-offset-4"
                    >
                      <FacebookLogo className="w-5 h-5 shrink-0" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href={SCHOOL_IDENTITY.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-[#4C227C] hover:underline underline-offset-4"
                    >
                      <InstagramLogo className="w-5 h-5 shrink-0" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* National Recognition Timeline & Partnership */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <p className="text-sm font-bold text-[#4C227C] mb-1.5">
                  Our Journey & Achievements (2016–2026)
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-balance mb-5">
                  Recognised Nationally for Early Childhood Excellence
                </h2>

                <div className="space-y-3">
                  {JOURNEY_ACHIEVEMENTS.map((item) => (
                    <div
                      key={`${item.year}-${item.title}`}
                      className="bg-white border border-purple-100 rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
                    >
                      <div className="sm:col-span-2 font-display text-lg font-bold text-[#4C227C] tabular-nums">
                        {item.year}
                      </div>
                      <div className="sm:col-span-10">
                        <h3 className="font-display text-base font-bold text-slate-950">
                          {item.title}
                        </h3>
                        <p className="text-xs font-bold text-[#B45309] mt-0.5 mb-1">
                          {item.organization}
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('gallery')}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#4C227C] hover:underline underline-offset-4"
                  >
                    <span>View Our Official Certificates & Awards in Gallery</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Partnership With Parents */}
              <div className="bg-[#FFF5D6] border-2 border-amber-200 rounded-3xl p-6 sm:p-8 space-y-3">
                <h3 className="font-display text-xl font-bold text-slate-950">
                  Our Partnership with Parents
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  We believe parents are a child’s first teachers and our most important partners in education. Through Parent–Teacher Meetings, school celebrations, and ongoing communication, we work together to understand and support every child’s progress.
                </p>
                <p className="text-sm font-bold text-[#4C227C]">
                  {SCHOOL_IDENTITY.promise}
                </p>
              </div>
            </div>
          </div>
        </div>

        <WaveDivider fillColor="#FFFEFA" bgColor="#EFE4FF" variant="hills" />
      </section>

      {/* Official Certificates & Recognitions Showcase */}
      <section className="bg-[#FFFEFA] py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <CertificatesShowcase compact onViewGallery={() => onNavigate('gallery')} />
        </div>
      </section>
    </div>
  );
}
