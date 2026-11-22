import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { KREEDO_POWERED } from '../data/preschoolContent';
import { ResilientImage } from './ResilientImage';
import { WaveDivider } from './WaveDivider';

export function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Gentle parallax exclusively on background corner doodles and inner-frame images (zero frame collision)
  const doodleTopY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-16, 16]);
  const doodleBottomY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [16, -16]);
  const innerImgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-10, 10]);

  return (
    <section
      ref={sectionRef}
      id="why-early-wings"
      className="relative bg-[#EFE4FF] overflow-hidden"
    >
      <WaveDivider fillColor="#EFE4FF" bgColor="#FFFEFA" variant="wave" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 lg:pt-12 lg:pb-20">
        {/* Top-Left Kidzee-Style Line Doodle */}
        <motion.svg
          style={{ y: doodleTopY }}
          aria-hidden="true"
          viewBox="0 0 80 60"
          fill="none"
          className="hidden md:block absolute top-6 left-6 w-14 h-12 text-[#5B2182]/75 pointer-events-none"
        >
          <path
            d="M12 18L30 12L26 36L10 38L12 18Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M14 26H24M14 31H22M30 12L44 26L30 34"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44 26C48 22 54 24 52 28C56 27 59 31 55 34C51 37 46 34 46 31"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Centered Headline & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#5B2182] text-balance mb-3">
            Why Choose Early Wings Preschool?
          </h2>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
            Early Wings Preschool is your trusted early learning partner since 2016 in Kanuru, Vijayawada. Here’s why families choose us for their little ones
          </p>
        </div>

        {/* 4 Geometric Photo Frames + Non-Overlapping Dashed Doodle Ribbon */}
        <div className="relative">
          {/* Desktop Continuous Curved Dashed Path routed strictly through open gutters */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 280"
            fill="none"
            className="hidden lg:block absolute inset-x-0 top-0 w-full h-[250px] pointer-events-none select-none z-0"
          >
            {/* Left gentle tail + ribbon between cards */}
            <path
              d="M22 210 C32 165, 60 140, 140 135 M245 135 C270 135, 295 142, 325 138 M555 140 C585 138, 608 138, 635 134 M862 135 C892 128, 918 112, 955 96 M1120 112 C1155 135, 1170 175, 1140 205"
              stroke="#5B2182"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />

            {/* Hand-drawn Star cleanly in left margin (no overlap with title text) */}
            <path
              d="M24 176L29 190L44 191L32 199L36 213L24 205L12 213L16 199L4 191L19 190L24 176Z"
              stroke="#5B2182"
              strokeWidth="1.8"
              strokeLinejoin="round"
              fill="#EFE4FF"
            />

            {/* Small Flower Doodle centered in gap 1-2 */}
            <g transform="translate(274, 118)" stroke="#5B2182" strokeWidth="1.6">
              <circle cx="12" cy="12" r="3" fill="#EFE4FF" />
              <circle cx="12" cy="5" r="3.5" fill="#EFE4FF" />
              <circle cx="18.5" cy="9.5" r="3.5" fill="#EFE4FF" />
              <circle cx="16" cy="17" r="3.5" fill="#EFE4FF" />
              <circle cx="8" cy="17" r="3.5" fill="#EFE4FF" />
              <circle cx="5.5" cy="9.5" r="3.5" fill="#EFE4FF" />
              <path d="M12 20V30" strokeLinecap="round" />
            </g>

            {/* Paper Plane Doodle cleanly above gap 2-3 */}
            <g transform="translate(574, 14)" stroke="#5B2182" strokeWidth="1.8" strokeLinejoin="round">
              <path d="M4 18L42 6L24 34L19 22L4 18Z" fill="#EFE4FF" />
              <path d="M42 6L19 22" />
            </g>

            {/* Little Cloud Doodle centered in gap 2-3 */}
            <path
              d="M580 148C575 148 571 144 571 139C571 135 574 131 578 130C579 125 584 121 590 121C595 121 600 124 602 129C606 129 610 133 610 138C610 143 606 148 600 148H580Z"
              stroke="#5B2182"
              strokeWidth="1.8"
              fill="#EFE4FF"
            />

            {/* Cherry / Leaf Doodle centered in gap 3-4 */}
            <g transform="translate(888, 108)" stroke="#5B2182" strokeWidth="1.7" strokeLinecap="round">
              <path d="M12 2C10 9 7 15 6 20M12 2C15 8 18 14 19 20" />
              <circle cx="6" cy="23" r="5" fill="#EFE4FF" />
              <circle cx="19" cy="23" r="5" fill="#EFE4FF" />
            </g>
          </svg>

          {/* 4 Geometric Cards Grid with stationary frames + inner photo parallax */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 items-end">
            {/* 1. Tilted Square Left */}
            <div className="flex flex-col items-center text-center">
              <div className="w-52 h-52 sm:w-56 sm:h-56 flex items-center justify-center mb-5 sm:mb-6">
                <div className="p-2.5 border-2 border-dashed border-[#6D28D9]/75 -rotate-6 transition-transform duration-200 hover:rotate-0">
                  <div className="bg-white p-2 shadow-md">
                    <div className="w-40 h-40 sm:w-44 sm:h-44 overflow-hidden">
                      <motion.div
                        style={{ y: innerImgY, scale: shouldReduceMotion ? 1 : 1.08, willChange: 'transform' }}
                        className="w-full h-full"
                      >
                        <ResilientImage
                          src="/images/why_holistic_circle_time_1794592559146.jpg"
                          alt="Teacher and preschool children clapping in circle time at Early Wings"
                          fallbackTitle="Holistic Learning"
                          className="w-full h-full object-cover object-center"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-950 mb-2">
                Holistic Learning
              </h3>
              <p className="text-sm text-slate-800 leading-relaxed max-w-[240px] font-medium">
                Fostering all-round development through a balanced blend of Montessori, play, and life skills.
              </p>
            </div>

            {/* 2. Dashed Circle */}
            <div className="flex flex-col items-center text-center">
              <div className="w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center mb-5 sm:mb-6">
                <div className="p-2.5 rounded-full border-2 border-dashed border-[#F59E0B]/90 transition-transform duration-200 hover:scale-[1.03]">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden">
                      <motion.div
                        style={{ y: innerImgY, scale: shouldReduceMotion ? 1 : 1.08, willChange: 'transform' }}
                        className="w-full h-full"
                      >
                        <ResilientImage
                          src="/images/why_expert_educator_child_1794592559332.jpg"
                          alt="Smiling preschool child holding wooden Montessori number blocks"
                          fallbackTitle="Expert Educators"
                          className="w-full h-full object-cover object-center"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-950 mb-2">
                Expert Educators
              </h3>
              <p className="text-sm text-slate-800 leading-relaxed max-w-[240px] font-medium">
                Montessori & Kreedo trained facilitators dedicated to nurturing every child’s unique potential.
              </p>
            </div>

            {/* 3. Tilted Square Right */}
            <div className="flex flex-col items-center text-center">
              <div className="w-52 h-52 sm:w-56 sm:h-56 flex items-center justify-center mb-5 sm:mb-6">
                <div className="p-2.5 border-2 border-dashed border-[#6D28D9]/75 rotate-6 transition-transform duration-200 hover:rotate-0">
                  <div className="bg-white p-2 shadow-md">
                    <div className="w-40 h-40 sm:w-44 sm:h-44 overflow-hidden">
                      <motion.div
                        style={{ y: innerImgY, scale: shouldReduceMotion ? 1 : 1.08, willChange: 'transform' }}
                        className="w-full h-full"
                      >
                        <ResilientImage
                          src="/images/why_safe_classroom_view_1794592559835.jpg"
                          alt="Happy preschool children seated neatly in a bright safe classroom"
                          fallbackTitle="Safe and Secure"
                          className="w-full h-full object-cover object-center"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-950 mb-2">
                Safe and Secure
              </h3>
              <p className="text-sm text-slate-800 leading-relaxed max-w-[240px] font-medium">
                A protected, child-friendly campus in Kanuru ensuring safety, warmth, and peace of mind.
              </p>
            </div>

            {/* 4. Dashed Triangle Frame */}
            <div className="flex flex-col items-center text-center">
              <div className="w-52 h-48 sm:w-60 sm:h-56 flex items-center justify-center mb-5 sm:mb-6">
                <svg
                  viewBox="0 0 240 218"
                  className="w-52 h-48 sm:w-60 sm:h-56 drop-shadow-sm transition-transform duration-200 hover:scale-[1.03]"
                  role="img"
                  aria-label="Innovative Montessori, Kreedo, and Early Wings Oral Book learning"
                >
                  <defs>
                    <clipPath id="early-wings-triangle-photo">
                      <polygon points="120,24 22,196 218,196" />
                    </clipPath>
                  </defs>
                  <polygon
                    points="120,6 4,208 236,208"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2.2"
                    strokeDasharray="6 6"
                    strokeLinejoin="round"
                  />
                  <polygon points="120,16 14,202 226,202" fill="#FFFFFF" />
                  <polygon points="120,24 22,196 218,196" fill="#F3E8FF" />
                  <image
                    href="/images/why_innovative_learner_boy_1794592562293.jpg"
                    x="10"
                    y="16"
                    width="220"
                    height="210"
                    preserveAspectRatio="xMidYMin slice"
                    clipPath="url(#early-wings-triangle-photo)"
                  />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-950 mb-2">
                Innovative Learning
              </h3>
              <p className="text-sm text-slate-800 leading-relaxed max-w-[240px] font-medium">
                Engaging Montessori, Kreedo, and Oral Book methods that make learning joyful and meaningful.
              </p>
            </div>
          </div>
        </div>

        {/* Powered by Kreedo Early Childhood Solutions Showcase */}
        <div className="mt-12 bg-white border-2 border-emerald-300 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 lg:max-w-md">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#059669] text-xs font-semibold uppercase tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{KREEDO_POWERED.badge}</span>
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950">
                {KREEDO_POWERED.partner}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {KREEDO_POWERED.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
              {KREEDO_POWERED.pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" aria-hidden="true" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom-Right Mouse Line Doodle */}
        <motion.svg
          style={{ y: doodleBottomY }}
          aria-hidden="true"
          viewBox="0 0 70 40"
          fill="none"
          className="hidden md:block absolute bottom-4 right-8 w-14 h-9 text-[#5B2182]/75 pointer-events-none"
        >
          <path
            d="M12 24C12 16 24 12 36 16C44 18 48 24 44 28C36 32 18 30 12 24Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="24" cy="14" r="4.5" stroke="currentColor" strokeWidth="1.5" fill="#EFE4FF" />
          <circle cx="20" cy="21" r="1.2" fill="currentColor" />
          <path d="M44 26C52 24 56 30 62 27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </motion.svg>
      </div>
    </section>
  );
}
