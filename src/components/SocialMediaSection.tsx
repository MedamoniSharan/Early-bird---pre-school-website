import { ExternalLink, Sparkles } from 'lucide-react';
import { FOUNDER_PROFILE, PageId, SCHOOL_IDENTITY } from '../data/preschoolContent';
import { WaveDivider } from './WaveDivider';
import { StarSparkDoodle } from './PreschoolDoodles';
import { FacebookLogo, InstagramLogo, YouTubeLogo } from './SocialBrandLogos';

interface SocialMediaSectionProps {
  onNavigate: (page: PageId) => void;
}

export function SocialMediaSection({ onNavigate }: SocialMediaSectionProps) {
  return (
    <div className="bg-[#FFFEFA]">
      {/* Social Media Hero */}
      <section className="relative bg-[#4C227C] text-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
          <StarSparkDoodle className="hidden md:block absolute top-8 right-10 w-10 h-10 text-[#FFBE0B]/70" />
          <p className="text-xs sm:text-sm font-bold text-[#FFBE0B] mb-2">
            Social Media & Storytelling
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance max-w-3xl mb-3">
            Stories, Classroom Joys & Our Parent Community Online
          </h1>
          <p className="text-sm sm:text-lg text-purple-100 max-w-2xl leading-relaxed font-medium">
            Watch narrated Telugu tales on YouTube, celebrate school milestones on Facebook, and glimpse daily Montessori & Kreedo moments on Instagram.
          </p>
        </div>
        <WaveDivider fillColor="#FFFEFA" bgColor="#4C227C" variant="clouds" />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 lg:pb-20 space-y-10">
        {/* Featured YouTube Initiative: Karunamai's Tales */}
        <div className="bg-[#FFF5D6] border-2 border-amber-300 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#B45309]">
                <YouTubeLogo className="w-6 h-6 shrink-0" />
                <span>{FOUNDER_PROFILE.storytelling.platform}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950">
                {FOUNDER_PROFILE.storytelling.title}
              </h2>

              <p className="text-base text-slate-700 leading-relaxed font-medium">
                {FOUNDER_PROFILE.storytelling.description}
              </p>

              <blockquote className="font-display text-lg sm:text-xl font-bold text-[#4C227C] pt-2">
                “{FOUNDER_PROFILE.storytelling.quote}”
              </blockquote>

              <div className="pt-3 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={SCHOOL_IDENTITY.contact.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-[#2A104C] bg-[#FFBE0B] hover:bg-[#F5B300] border-b-4 border-[#D99B00] active:translate-y-0.5 rounded-2xl transition-all"
                >
                  <YouTubeLogo className="w-5 h-5 shrink-0" />
                  <span>Watch Karunamai’s Journey (10 Glorious Years) & Tales</span>
                  <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
                <span className="text-xs font-bold text-slate-600 text-center sm:text-left">
                  Narrated & Presented by {FOUNDER_PROFILE.name}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border-2 border-amber-200 rounded-3xl p-6 space-y-3">
              <p className="text-xs font-bold text-[#4C227C] mb-2">
                Why Storytelling Matters at Early Wings
              </p>
              <ul className="space-y-3">
                {FOUNDER_PROFILE.storytelling.highlights.map((item, idx) => (
                  <li key={item} className="flex items-baseline gap-3 text-sm text-slate-800">
                    <span className="font-display text-xs font-bold text-[#D97706] tabular-nums shrink-0">
                      {String(idx + 1).padStart(2, '0')}.
                    </span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Facebook & Instagram Official Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Facebook */}
          <div className="bg-[#E8F6FF] border-2 border-sky-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <FacebookLogo className="w-6 h-6 shrink-0" />
                <p className="text-xs font-bold text-[#0369A1]">
                  Official School Page · Facebook
                </p>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 mb-3">
                Early Wings Preschool on Facebook
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Follow our Kanuru campus updates, national award celebrations (Top 50 Preschools in India & Dr. Kiran Bedi 10-Year Contribution Award), cultural festival days, Annual Day performances, and educational field trips.
              </p>

              {/* Facebook Photos Preview Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                <div className="rounded-xl overflow-hidden aspect-square border border-sky-200 shadow-xs">
                  <img
                    src="/images/facebook/school_annual_day_celebration.jpg"
                    alt="Early Wings Annual Day celebration from Facebook"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square border border-sky-200 shadow-xs">
                  <img
                    src="/images/facebook/festival_janmashtami_krishna_celebration.jpg"
                    alt="Sri Krishna Janmashtami celebration from Facebook"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square border border-sky-200 shadow-xs">
                  <img
                    src="/images/facebook/school_field_trip_monument_visit.jpg"
                    alt="Field trip heritage visit from Facebook"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square border border-sky-200 shadow-xs">
                  <img
                    src="/images/facebook/annual_day_cultural_dance_celebration.jpg"
                    alt="Annual Day cultural performance from Facebook"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <a
                href={SCHOOL_IDENTITY.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#0369A1] hover:bg-[#075985] border-b-4 border-[#0C4A6E] active:translate-y-0.5 rounded-2xl transition-all"
              >
                <FacebookLogo className="w-5 h-5 shrink-0" />
                <span>Visit Facebook Page & Gallery</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-[#FFF0F3] border-2 border-rose-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <InstagramLogo className="w-6 h-6 shrink-0" />
                <p className="text-xs font-bold text-[#BE123C]">
                  Visual Glimpses · @earlywingspreschool
                </p>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 mb-3">
                Early Wings on Instagram
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                See everyday glimpses of wooden Montessori activities, Kreedo classroom labs, gardening & cooking fun, field trips, and joyful moments with our little learners.
              </p>
            </div>

            <div>
              <a
                href={SCHOOL_IDENTITY.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#BE123C] hover:bg-[#9F1239] border-b-4 border-[#881337] active:translate-y-0.5 rounded-2xl transition-all"
              >
                <InstagramLogo className="w-5 h-5 shrink-0" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Cross-Link Strip to Gallery & Contact */}
        <div className="bg-[#EFE4FF] border-2 border-purple-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-[#4C227C] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-display text-xl font-bold text-[#4C227C]">
                Want to Explore Our Certificates & Classroom Photos?
              </h3>
              <p className="text-sm text-slate-700 font-medium mt-0.5">
                View our ECDLA national awards and Kreedo certifications inside our Gallery, or reach out to book a visit.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row flex-wrap gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('gallery')}
              className="w-full sm:w-auto px-5 py-3 text-sm font-bold text-[#4C227C] bg-white hover:bg-purple-50 border-2 border-[#4C227C]/30 rounded-2xl transition-colors text-center"
            >
              View Gallery
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-5 py-3 text-sm font-bold text-[#2A104C] bg-[#FFBE0B] hover:bg-[#F5B300] border-b-4 border-[#D99B00] rounded-2xl transition-all text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
