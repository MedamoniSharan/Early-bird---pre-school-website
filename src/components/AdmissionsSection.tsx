import { useState, FormEvent } from 'react';
import { CheckCircle2, MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';
import {
  ADMISSION_STEPS,
  buildWhatsAppEnquiryUrl,
  FOUNDER_PROFILE,
  SCHOOL_IDENTITY,
} from '../data/preschoolContent';
import { WaveDivider } from './WaveDivider';
import { StarSparkDoodle } from './PreschoolDoodles';
import { FacebookLogo, InstagramLogo, WhatsAppLogo, YouTubeLogo } from './SocialBrandLogos';

interface InquiryFormState {
  parentName: string;
  childName: string;
  program: 'Playgroup' | 'Nursery' | 'LKG' | 'UKG';
  phone: string;
  email: string;
  message: string;
}

const INITIAL_FORM: InquiryFormState = {
  parentName: '',
  childName: '',
  program: 'Nursery',
  phone: '',
  email: '',
  message: '',
};

const STEP_COLORS = [
  'bg-[#FFF5D6] border-amber-200 text-[#B45309]',
  'bg-[#E8F6FF] border-sky-200 text-[#0369A1]',
  'bg-[#E9FAF0] border-emerald-200 text-[#047857]',
  'bg-[#FFF0F3] border-rose-200 text-[#BE123C]',
];

export function AdmissionsSection() {
  const [form, setForm] = useState<InquiryFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormState, string>>>({});
  const [submittedInquiry, setSubmittedInquiry] = useState<InquiryFormState | null>(null);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof InquiryFormState, string>> = {};

    if (!form.parentName.trim()) {
      nextErrors.parentName = 'Please enter parent or guardian name.';
    }
    if (!form.childName.trim()) {
      nextErrors.childName = "Please enter your child's name.";
    }
    const digitsOnly = form.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedInquiry(form);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmittedInquiry(null);
  };

  return (
    <section id="admissions" className="bg-[#FFFEFA]">
      {/* Contact Us Page Banner */}
      <div className="relative bg-[#4C227C] text-white overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
          <StarSparkDoodle className="hidden md:block absolute top-8 right-10 w-10 h-10 text-[#FFBE0B]/70" />
          <p className="text-xs sm:text-sm font-bold text-[#FFBE0B] mb-2">
            Contact Us & Admissions · Kanuru, Vijayawada
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance max-w-3xl mb-3">
            Visit Early Wings Preschool & Connect With Our Principal
          </h1>
          <p className="text-sm sm:text-lg text-purple-100 max-w-2xl leading-relaxed font-medium">
            We welcome parents to visit our campus on N G Wilson Road, Kanuru, meet Founder & Principal Karunamai Nandamuri, and explore our classrooms.
          </p>
        </div>
        <WaveDivider fillColor="#FFFEFA" bgColor="#4C227C" variant="clouds" />
      </div>

      <div className="bg-playful-dots py-10 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
          {/* Full Campus Visit Form + Address & Timings Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-sm font-bold text-[#4C227C] mb-1">
                  Campus Address & Timings
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-balance">
                  Early Wings Preschool, Kanuru
                </h2>
              </div>

              <div className="border-t border-slate-200 pt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#4C227C] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Campus Address</p>
                    <address className="not-italic text-sm text-slate-700 leading-relaxed mt-0.5">
                      {SCHOOL_IDENTITY.fullAddress.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#4C227C] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">School Timings ({SCHOOL_IDENTITY.timings.days})</p>
                    <p className="text-sm text-slate-700 tabular-nums mt-0.5">
                      {SCHOOL_IDENTITY.timings.playgroupNursery}
                    </p>
                    <p className="text-sm text-slate-700 tabular-nums">
                      {SCHOOL_IDENTITY.timings.lkgUkg}
                    </p>
                    <p className="text-xs font-bold text-[#B45309] mt-0.5">
                      {SCHOOL_IDENTITY.timings.holidays}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#4C227C] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {FOUNDER_PROFILE.name} ({FOUNDER_PROFILE.credentialsShort})
                    </p>
                    <p className="text-xs text-slate-600 mb-1">
                      {FOUNDER_PROFILE.titles.join(' · ')}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <a
                        href={SCHOOL_IDENTITY.contact.phoneHref}
                        className="text-sm font-bold text-[#4C227C] hover:underline underline-offset-4 tabular-nums"
                      >
                        {SCHOOL_IDENTITY.contact.phone}
                      </a>
                      <a
                        href={SCHOOL_IDENTITY.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#15803D] hover:underline underline-offset-4"
                      >
                        <WhatsAppLogo className="w-4 h-4 shrink-0" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#4C227C] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Email Admissions</p>
                    <a
                      href={`mailto:${SCHOOL_IDENTITY.contact.email}`}
                      className="text-sm font-semibold text-[#4C227C] hover:underline underline-offset-4 break-all"
                    >
                      {SCHOOL_IDENTITY.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 text-[#4C227C] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Official Social Channels</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mt-1.5">
                      <a
                        href={SCHOOL_IDENTITY.contact.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-[#4C227C] hover:underline underline-offset-4"
                      >
                        <YouTubeLogo className="w-5 h-5 shrink-0" />
                        <span>YouTube</span>
                      </a>
                      <a
                        href={SCHOOL_IDENTITY.contact.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-[#4C227C] hover:underline underline-offset-4"
                      >
                        <FacebookLogo className="w-5 h-5 shrink-0" />
                        <span>Facebook</span>
                      </a>
                      <a
                        href={SCHOOL_IDENTITY.contact.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-[#4C227C] hover:underline underline-offset-4"
                      >
                        <InstagramLogo className="w-5 h-5 shrink-0" />
                        <span>Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#4C227C] text-white rounded-3xl p-6 shadow-md">
                <p className="font-display text-xl font-bold text-[#FFBE0B] mb-1">
                  {SCHOOL_IDENTITY.tagline}
                </p>
                <p className="text-sm text-purple-100 font-medium">
                  {SCHOOL_IDENTITY.promise}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F5F0FF] border-2 border-purple-200 rounded-3xl p-5 sm:p-10">
              {submittedInquiry ? (
                <div className="py-6 space-y-5">
                  <div className="flex items-center gap-3 text-[#4C227C]">
                    <CheckCircle2 className="w-7 h-7 shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-2xl font-bold text-slate-950">
                      Campus Visit Enquiry Ready
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{submittedInquiry.parentName}</span>. Send your enquiry details for <span className="font-bold text-slate-900">{submittedInquiry.childName}</span> ({submittedInquiry.program}) directly to our Kanuru admissions WhatsApp (<span className="font-bold text-slate-900 tabular-nums">{SCHOOL_IDENTITY.contact.phone}</span>).
                  </p>
                  <div className="bg-white border border-purple-100 rounded-2xl p-4 text-sm text-slate-700 space-y-1">
                    <p><span className="font-bold">Programme:</span> {submittedInquiry.program}</p>
                    <p><span className="font-bold">Mobile:</span> <span className="tabular-nums">{submittedInquiry.phone}</span></p>
                    {submittedInquiry.email && (
                      <p><span className="font-bold">Email:</span> {submittedInquiry.email}</p>
                    )}
                    {submittedInquiry.message && (
                      <p><span className="font-bold">Notes:</span> {submittedInquiry.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                    <a
                      href={buildWhatsAppEnquiryUrl(submittedInquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#15803D] hover:bg-[#166534] border-b-4 border-[#14532D] active:translate-y-0.5 rounded-2xl transition-all"
                    >
                      <WhatsAppLogo className="w-5 h-5 shrink-0" />
                      <span>Send Enquiry on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-[#4C227C] bg-white hover:bg-purple-50 border-2 border-[#4C227C]/30 rounded-2xl transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-950 mb-1">
                      Book a Guided Campus Tour
                    </h3>
                    <p className="text-sm text-slate-600">
                      Share your child’s details to schedule an interactive school visit and counselling session.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="parentName"
                        className="block text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Parent / Guardian Name
                      </label>
                      <input
                        id="parentName"
                        type="text"
                        value={form.parentName}
                        onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                        placeholder="e.g. Lakshmi Narayana"
                        className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#4C227C] focus:ring-2 focus:ring-[#4C227C]/15"
                      />
                      {errors.parentName && (
                        <p className="text-xs text-red-700 mt-1 font-semibold" role="alert">
                          {errors.parentName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="childName"
                        className="block text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Child’s Full Name
                      </label>
                      <input
                        id="childName"
                        type="text"
                        value={form.childName}
                        onChange={(e) => setForm({ ...form, childName: e.target.value })}
                        placeholder="e.g. Aarav"
                        className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#4C227C] focus:ring-2 focus:ring-[#4C227C]/15"
                      />
                      {errors.childName && (
                        <p className="text-xs text-red-700 mt-1 font-semibold" role="alert">
                          {errors.childName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-bold text-slate-800 mb-2">
                      Preferred Programme
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['Playgroup', 'Nursery', 'LKG', 'UKG'] as const).map((prog) => {
                        const active = form.program === prog;
                        return (
                          <button
                            key={prog}
                            type="button"
                            onClick={() => setForm({ ...form, program: prog })}
                            className={`py-2.5 px-3 text-sm font-bold rounded-2xl border-2 transition-colors whitespace-nowrap ${
                              active
                                ? 'bg-[#4C227C] text-white border-[#4C227C]'
                                : 'bg-white text-slate-700 border-slate-300 hover:border-[#4C227C]/50'
                            }`}
                          >
                            {prog}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-2xl text-slate-900 placeholder:text-slate-400 tabular-nums focus:outline-none focus:border-[#4C227C] focus:ring-2 focus:ring-[#4C227C]/15"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-700 mt-1 font-semibold" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-slate-800 mb-1.5"
                      >
                        Email Address (Optional)
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#4C227C] focus:ring-2 focus:ring-[#4C227C]/15"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-700 mt-1 font-semibold" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-slate-800 mb-1.5"
                    >
                      Questions or Preferred Visit Day (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share preferred morning hours or questions about Montessori & Kreedo classrooms..."
                      className="w-full px-4 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#4C227C] focus:ring-2 focus:ring-[#4C227C]/15"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-[#2A104C] bg-[#FFBE0B] hover:bg-[#F5B300] border-b-4 border-[#D99B00] active:translate-y-0.5 rounded-2xl transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4C227C]"
                    >
                      Request Campus Visit
                    </button>
                    <a
                      href={buildWhatsAppEnquiryUrl(form)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#14532D] bg-[#DCFCE7] hover:bg-[#BBF7D0] border-2 border-[#86EFAC] rounded-2xl transition-colors"
                    >
                      <WhatsAppLogo className="w-5 h-5 shrink-0" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Four Easy Steps to Join Early Wings */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-sm font-bold text-[#4C227C] mb-1.5">
                Simple Admission Process
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-balance">
                Four Easy Steps to Join Early Wings
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ADMISSION_STEPS.map((item, idx) => (
                <div
                  key={item.step}
                  className={`border-2 rounded-3xl p-6 ${STEP_COLORS[idx % STEP_COLORS.length]}`}
                >
                  <span className="inline-block font-display text-3xl font-bold tabular-nums mb-2">
                    {item.step}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-950 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
