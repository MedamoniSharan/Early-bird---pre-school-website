import { useState, useRef, FormEvent } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  buildWhatsAppEnquiryUrl,
  HERO_MILESTONES,
  PageId,
  SCHOOL_IDENTITY,
} from '../data/preschoolContent';
import { ResilientImage } from './ResilientImage';
import { WaveDivider } from './WaveDivider';
import { CloudDoodle, SunDoodle, StarSparkDoodle } from './PreschoolDoodles';
import { WhatsAppLogo } from './SocialBrandLogos';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
}

interface QuickFormState {
  parentName: string;
  childName: string;
  phone: string;
  program: 'Playgroup' | 'Nursery' | 'LKG' | 'UKG';
}

const MILESTONE_STYLES = [
  'bg-[#FFF5D6] border-amber-200 text-[#4C227C]',
  'bg-[#E8F6FF] border-sky-200 text-[#0369A1]',
  'bg-[#E9FAF0] border-emerald-200 text-[#047857]',
  'bg-[#FFF0F3] border-rose-200 text-[#BE123C]',
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const sunY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 56]);
  const cloudY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -36]);
  const starY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 42]);
  const photoY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 18]);

  const [quickForm, setQuickForm] = useState<QuickFormState>({
    parentName: '',
    childName: '',
    phone: '',
    program: 'Playgroup',
  });
  const [quickError, setQuickError] = useState<string>('');
  const [quickSubmitted, setQuickSubmitted] = useState<QuickFormState | null>(null);

  const handleQuickSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!quickForm.parentName.trim() || !quickForm.childName.trim()) {
      setQuickError("Please enter parent and child's name.");
      return;
    }
    const digits = quickForm.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      setQuickError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setQuickError('');
    setQuickSubmitted(quickForm);
  };

  return (
    <section ref={heroRef} id="top" className="relative bg-[#4C227C] text-white overflow-hidden">
      {/* Parallax Preschool Sky Doodles */}
      <div className="pointer-events-none max-w-6xl mx-auto relative">
        <motion.div style={{ y: sunY }} className="hidden md:block absolute -top-2 right-8">
          <SunDoodle className="w-16 h-16 opacity-90" />
        </motion.div>
        <motion.div style={{ y: cloudY }} className="hidden lg:block absolute top-14 -left-16">
          <CloudDoodle className="w-28 h-16 text-white/10" />
        </motion.div>
        <motion.div style={{ y: starY }} className="hidden md:block absolute top-44 left-[44%]">
          <StarSparkDoodle className="w-7 h-7 text-[#FFBE0B]/60" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-8 lg:pt-14 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left & Center Preschool Hero Visual + Headline */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white p-1.5 ring-4 ring-[#FFBE0B] shadow-xl overflow-hidden shrink-0">
                <img
                  src="/assets/aistudio/image_bbab54bb.png"
                  alt="Early Wings Preschool official crest"
                  className="w-full h-full object-contain scale-105 contrast-110"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-bold text-[#FFBE0B] tracking-normal">
                  <span>{SCHOOL_IDENTITY.name}</span>
                  <span aria-hidden="true" className="mx-1.5 sm:mx-2 text-white/40">·</span>
                  <span className="text-purple-100">{SCHOOL_IDENTITY.location}</span>
                  <span aria-hidden="true" className="mx-1.5 sm:mx-2 text-white/40">·</span>
                  <span className="text-purple-100 tabular-nums">Est. {SCHOOL_IDENTITY.foundedDate}</span>
                </p>

                <h1 className="font-display text-[clamp(1.8rem,5vw,3.45rem)] font-bold leading-[1.08] tracking-tight text-white text-balance">
                  Rise ~ Rooted Wings Within
                </h1>
              </div>
            </div>

            <p className="text-sm sm:text-lg text-purple-100 leading-relaxed max-w-2xl font-medium">
              A joyful second home where little learners explore, play, ask big questions, and grow through Montessori materials, the Kreedo Learning Framework, and loving guidance across <span className="font-bold text-[#FFBE0B]">Playgroup, Nursery, LKG & UKG</span>.
            </p>

            {/* Storybook Classroom Photo Frame with non-overlapping inner scroll parallax */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-[#FFBE0B] shadow-2xl bg-[#3A1763]">
              <motion.div style={{ y: photoY, scale: shouldReduceMotion ? 1 : 1.06, willChange: 'transform' }}>
                <ResilientImage
                  src="/src/assets/images/hero_preschool_classroom_1794591478807.jpg"
                  alt="Happy Indian children learning with colorful wooden Montessori blocks and smiling educator at Early Wings Preschool"
                  fallbackTitle="Early Wings Preschool"
                  className="w-full h-56 sm:h-72 lg:h-80 object-cover"
                />
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3.5 sm:gap-5 pt-1">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-3 text-sm font-bold text-[#2A104C] bg-[#FFBE0B] hover:bg-[#F5B300] border-b-4 border-[#D99B00] active:translate-y-0.5 rounded-2xl transition-all sm:whitespace-nowrap shrink-0"
              >
                <span>Explore Services & Programmes</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>
              <p className="text-xs sm:text-sm text-purple-100 font-semibold text-center sm:text-left">
                {SCHOOL_IDENTITY.belief}
              </p>
            </div>
          </div>

          {/* Right Embedded Kidzee-Style Admission Enquiry Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-3xl overflow-hidden border-4 border-[#FFBE0B] shadow-2xl">
              <div className="bg-[#FFBE0B] px-5 sm:px-6 py-4">
                <h2 className="font-display text-lg sm:text-xl font-bold text-[#2A104C]">
                  Admissions Open 2026–27
                </h2>
                <p className="text-xs font-bold text-[#4C227C] mt-0.5">
                  Kanuru, Vijayawada · Ages 2–6 Years
                </p>
              </div>

              {quickSubmitted ? (
                <div className="p-5 sm:p-7 space-y-4">
                  <div className="flex items-center gap-2.5 text-[#4C227C]">
                    <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-xl font-bold text-slate-950">
                      Enquiry Ready to Send
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{quickSubmitted.parentName}</span>. Send your enquiry for <span className="font-bold text-slate-900">{quickSubmitted.childName}</span> ({quickSubmitted.program}) directly to our Kanuru admissions WhatsApp (<span className="font-bold text-slate-900 tabular-nums">{SCHOOL_IDENTITY.contact.phone}</span>).
                  </p>
                  <a
                    href={buildWhatsAppEnquiryUrl(quickSubmitted)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 text-sm font-bold text-white bg-[#15803D] hover:bg-[#166534] border-b-4 border-[#14532D] active:translate-y-0.5 rounded-2xl transition-all"
                  >
                    <WhatsAppLogo className="w-5 h-5 shrink-0" />
                    <span>Send Enquiry on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setQuickSubmitted(null);
                      setQuickForm({
                        parentName: '',
                        childName: '',
                        phone: '',
                        program: 'Playgroup',
                      });
                    }}
                    className="w-full py-2.5 px-4 text-sm font-bold text-[#4C227C] bg-[#EFE4FF] hover:bg-purple-200/70 rounded-2xl transition-colors"
                  >
                    Submit Another Child Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} noValidate className="p-5 sm:p-7 space-y-4">
                  <div>
                    <label
                      htmlFor="hero-parent"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Parent / Guardian Name
                    </label>
                    <input
                      id="hero-parent"
                      type="text"
                      value={quickForm.parentName}
                      onChange={(e) =>
                        setQuickForm({ ...quickForm, parentName: e.target.value })
                      }
                      placeholder="Enter parent full name"
                      className="w-full px-4 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-300 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#4C227C] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hero-child"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Child’s Name
                    </label>
                    <input
                      id="hero-child"
                      type="text"
                      value={quickForm.childName}
                      onChange={(e) =>
                        setQuickForm({ ...quickForm, childName: e.target.value })
                      }
                      placeholder="Enter child's name"
                      className="w-full px-4 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-300 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#4C227C] focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="hero-phone"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Mobile Number
                      </label>
                      <input
                        id="hero-phone"
                        type="tel"
                        value={quickForm.phone}
                        onChange={(e) =>
                          setQuickForm({ ...quickForm, phone: e.target.value })
                        }
                        placeholder="10-digit number"
                        className="w-full px-4 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-300 rounded-2xl text-slate-900 placeholder:text-slate-400 tabular-nums focus:outline-none focus:border-[#4C227C] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hero-program"
                        className="block text-xs font-bold text-slate-700 mb-1"
                      >
                        Programme
                      </label>
                      <select
                        id="hero-program"
                        value={quickForm.program}
                        onChange={(e) =>
                          setQuickForm({
                            ...quickForm,
                            program: e.target.value as QuickFormState['program'],
                          })
                        }
                        className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-300 rounded-2xl text-slate-900 focus:outline-none focus:border-[#4C227C] focus:bg-white"
                      >
                        <option value="Playgroup">Playgroup (2–3 Yrs)</option>
                        <option value="Nursery">Nursery (3–4 Yrs)</option>
                        <option value="LKG">LKG (4–5 Yrs)</option>
                        <option value="UKG">UKG (5–6 Yrs)</option>
                      </select>
                    </div>
                  </div>

                  {quickError && (
                    <p role="alert" className="text-xs font-bold text-red-700">
                      {quickError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 text-sm font-bold text-[#2A104C] bg-[#FFBE0B] hover:bg-[#F5B300] border-b-4 border-[#D99B00] active:translate-y-0.5 rounded-2xl transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C227C]"
                  >
                    Enquire Now
                  </button>

                  <a
                    href={buildWhatsAppEnquiryUrl(quickForm)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-[#14532D] bg-[#DCFCE7] hover:bg-[#BBF7D0] border-2 border-[#86EFAC] rounded-2xl transition-colors"
                  >
                    <WhatsAppLogo className="w-5 h-5 shrink-0" />
                    <span>Enquire Directly on WhatsApp</span>
                  </a>

                  <p className="text-xs text-slate-500 text-center font-medium">
                    Book a joyful classroom tour with Principal Karunamai Nandamuri
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fluffy Cloud Transition into Pastel Milestone Blocks */}
      <WaveDivider fillColor="#FFFEFA" bgColor="#4C227C" variant="clouds" />

      {/* 4-Column Pastel Rainbow Milestone Blocks */}
      <div className="bg-[#FFFEFA] text-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {HERO_MILESTONES.map((item, idx) => (
            <div
              key={item.label}
              className={`border-2 rounded-3xl p-4 sm:p-5 text-center ${MILESTONE_STYLES[idx % MILESTONE_STYLES.length]}`}
            >
              <p className="font-display text-xl sm:text-3xl font-bold tabular-nums">
                {item.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1">{item.label}</p>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 font-medium">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
