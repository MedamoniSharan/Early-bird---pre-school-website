export type PageId = 'home' | 'about' | 'services' | 'gallery' | 'social' | 'contact';

export interface ProgramInfo {
  id: 'playgroup' | 'nursery' | 'lkg' | 'ukg';
  name: string;
  ageRange: string;
  timing: string;
  stageLabel: string;
  image: string;
  imageAlt: string;
  accentHex: string;
  surfaceTint: string;
  summary: string;
  focusAreas: string[];
  dailyRhythm: string;
  outcome: string;
}

export interface PedagogyPillar {
  id: 'philosophy' | 'montessori' | 'kreedo' | 'teachers';
  index: string;
  title: string;
  subtitle: string;
  accentColor: string;
  lead: string;
  points: string[];
  closing: string;
}

export interface AchievementItem {
  year: string;
  title: string;
  organization: string;
  detail: string;
}

export interface OralBookCategory {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface AdmissionStep {
  step: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  category: 'certificates' | 'classroom' | 'activities';
  title: string;
  subtitle: string;
  year?: string;
  image: string;
  alt: string;
}

export const SCHOOL_IDENTITY = {
  name: 'Early Wings Preschool',
  shortName: 'Early Wings',
  tagline: 'Rise ~ Rooted Wings Within',
  foundedDate: '9th June 2016',
  location: 'Kanuru, Vijayawada, Andhra Pradesh',
  fullAddress: [
    'Early Wings Preschool',
    'Chalasani Nagar 3rd line,',
    'N G Wilson road,',
    'Kanuru,',
    'Vijayawada 520007.',
  ],
  timings: {
    days: 'Monday to Friday',
    playgroupNursery: '9:00 AM to 12:30 PM — Playgroup & Nursery',
    lkgUkg: '9:00 AM to 3:00 PM — LKG & UKG',
    holidays: 'Saturday & Sunday: Holiday',
  },
  belief: 'Quality Education is a Necessity, Not a Luxury.',
  visionQuote:
    'Train up a child in the way he should go: and when he is old, he will not depart from it.',
  visionSource: 'Proverbs 22:6',
  promise:
    "At Early Wings Preschool, we don't simply prepare children for the next class. We prepare them for life.",
  closingLine: 'Strong Foundation Today, Confident Learners Tomorrow.',
  heroLead: 'Laying the Foundation for Life and Unlocking Human Potential in the Early Years.',
  contact: {
    phone: '9100818264',
    phoneHref: 'tel:+919100818264',
    whatsappNumber: '919100818264',
    whatsappUrl:
      'https://wa.me/919100818264?text=Hello%20Early%20Wings%20Preschool%2C%20I%20would%20like%20to%20enquire%20about%20admissions.',
    email: 'earlywingspreschoolvijayawada@gmail.com',
    facebookUrl: 'https://www.facebook.com/share/1A1M9rq4vp/',
    instagramUrl: 'https://www.instagram.com/earlywingspreschool?utm_source=qr&mdxt=cXdqc2pzMnlnZXN5',
    youtubeUrl: 'https://youtube.com/@earlywings2039?si=1lSO7joZ0-gFE2lk',
  },
};

export function buildWhatsAppEnquiryUrl(details?: {
  parentName?: string;
  childName?: string;
  program?: string;
  phone?: string;
  email?: string;
  message?: string;
}): string {
  const lines = ['Hello Early Wings Preschool, I would like to enquire about admissions.'];
  if (details?.parentName?.trim()) lines.push(`Parent Name: ${details.parentName.trim()}`);
  if (details?.childName?.trim()) lines.push(`Child Name: ${details.childName.trim()}`);
  if (details?.program?.trim()) lines.push(`Programme: ${details.program.trim()}`);
  if (details?.phone?.trim()) lines.push(`Mobile: ${details.phone.trim()}`);
  if (details?.email?.trim()) lines.push(`Email: ${details.email.trim()}`);
  if (details?.message?.trim()) lines.push(`Message: ${details.message.trim()}`);
  return `https://wa.me/919100818264?text=${encodeURIComponent(lines.join('\n'))}`;
}

export const HERO_MILESTONES = [
  {
    value: '2016',
    label: 'Established June 9',
    subtext: 'Kanuru, Vijayawada, AP',
  },
  {
    value: '100th',
    label: 'Preschool in India',
    subtext: 'Recognised by ECDLA (2022)',
  },
  {
    value: '50th',
    label: 'National Ranking',
    subtext: 'Recognised by ECDLA (2024)',
  },
  {
    value: '2–6 Yrs',
    label: 'Early Learning Years',
    subtext: 'Playgroup, Nursery, LKG & UKG',
  },
];

export const PROGRAMS: ProgramInfo[] = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    ageRange: '2 – 3 Years',
    timing: 'Mon – Fri · 9:00 AM – 12:30 PM',
    stageLabel: 'First Steps in Discovery',
    image: '/src/assets/images/program_playgroup_toddlers_1794591737480.jpg',
    imageAlt: 'Happy toddlers in Playgroup playing with colorful wooden Montessori stacking rings and soft sensory blocks',
    accentHex: '#F59E0B',
    surfaceTint: 'bg-amber-50 border-amber-200',
    summary:
      'Gentle transition from home to school focused on early communication, vocabulary building, sensory exploration, motor skills, and warm social interaction.',
    focusAreas: [
      'Early Communication & Vocabulary Building',
      'Tactile & Sensory Exploration',
      'Fine & Gross Motor Coordination',
      'Warm Social Interaction & Routine Comfort',
    ],
    dailyRhythm:
      'Circle time songs, guided Montessori sensorial trays, free play, storytelling, and joyful movement.',
    outcome:
      'Builds emotional security, curiosity, and comfortable independence in a safe classroom community.',
  },
  {
    id: 'nursery',
    name: 'Nursery',
    ageRange: '3 – 4 Years',
    timing: 'Mon – Fri · 9:00 AM – 12:30 PM',
    stageLabel: 'Language & Sensory Foundations',
    image: '/src/assets/images/program_nursery_phonics_1794591736415.jpg',
    imageAlt: 'Smiling Nursery children exploring wooden alphabet letters and finger painting crafts',
    accentHex: '#0284C7',
    surfaceTint: 'bg-sky-50 border-sky-200',
    summary:
      'Structured foundation in language readiness, phonics awareness, early numbers, shapes, colours, rich vocabulary, and everyday environmental awareness.',
    focusAreas: [
      'Language Readiness & Phonics Sounds',
      'Numbers, Shapes & Colour Recognition',
      'Practical Life Independence Skills',
      'Environmental Awareness & Oral Book Rhymes',
    ],
    dailyRhythm:
      'Kreedo hands-on learning lab, phonics sound games, Early Wings Oral Book recitation, and creative craft.',
    outcome:
      'Develops expressive speech, concentration, observation habits, and eagerness to explore new concepts.',
  },
  {
    id: 'lkg',
    name: 'LKG',
    ageRange: '4 – 5 Years',
    timing: 'Mon – Fri · 9:00 AM – 3:00 PM',
    stageLabel: 'Early Literacy & Logical Thinking',
    image: '/src/assets/images/program_lkg_numeracy_1794591738118.jpg',
    imageAlt: 'Joyful LKG children counting colorful Montessori beads and solving wooden shape puzzles together',
    accentHex: '#059669',
    surfaceTint: 'bg-emerald-50 border-emerald-200',
    summary:
      'Progressive exploration of early reading and writing, concrete mathematical understanding, sensorial refinement, logical thinking, and theme-based learning.',
    focusAreas: [
      'Early Reading, Phonics Blending & Writing',
      'Concrete Mathematical Understanding',
      'Sensorial Refinement & Logical Thinking',
      'Theme-Based Discovery & Telugu/English Oral Book',
    ],
    dailyRhythm:
      'Montessori numeracy & language stations, thematic projects, puppet storytelling, and collaborative group work.',
    outcome:
      'Strengthens foundational literacy, problem-solving confidence, and respectful classroom habits.',
  },
  {
    id: 'ukg',
    name: 'UKG',
    ageRange: '5 – 6 Years',
    timing: 'Mon – Fri · 9:00 AM – 3:00 PM',
    stageLabel: 'School & Life Readiness',
    image: '/src/assets/images/program_ukg_readiness_1794591736397.jpg',
    imageAlt: 'Confident UKG students reading illustrated books and exploring a globe with their teacher',
    accentHex: '#E11D48',
    surfaceTint: 'bg-rose-50 border-rose-200',
    summary:
      'Comprehensive preparation covering advanced language readiness, fluent reading and writing, mathematical operations, environmental studies, reasoning, and primary school readiness.',
    focusAreas: [
      'Fluent Reading, Comprehension & Writing',
      'Mathematics, Reasoning & Problem Solving',
      'Environmental Studies (EVS) & General Knowledge',
      'Vemana Padyalu, National Songs & Stage Confidence',
    ],
    dailyRhythm:
      'Structured Kreedo & Montessori mastery labs, EVS inquiry, Oral Book mastery, and leadership responsibilities.',
    outcome:
      'Graduates confident, compassionate, independent learners prepared for primary schooling and life beyond.',
  },
];

export const MAJOR_LEARNING_AREAS = [
  'English Language and Phonics',
  'Mathematics and Logical Thinking',
  'Environmental Studies (EVS)',
  'Sensorial Development',
  'Practical Life Skills',
  'Theme-Based Learning',
  'Creative Expression',
  'General Knowledge',
  'Social and Emotional Development',
];

export const PEDAGOGY_PILLARS: PedagogyPillar[] = [
  {
    id: 'philosophy',
    index: '01',
    title: 'Our Educational Philosophy',
    subtitle: 'Nurturing the whole child — physically, intellectually, socially, emotionally, creatively & morally',
    accentColor: '#F59E0B',
    lead: 'We believe every child is unique, capable, and naturally curious. Children learn best when given opportunities to explore, experience, question, discover, and create.',
    points: [
      'Explore surroundings and learn independently',
      'Develop curiosity, creativity, and imagination',
      'Build confidence and communication skills',
      'Develop logical thinking and problem-solving abilities',
      'Practise kindness, respect, discipline, and responsibility',
      'Develop social, emotional awareness and enjoy meaningful experiences',
    ],
    closing:
      'Our focus is on nurturing the whole child rather than rushing rote memorisation.',
  },
  {
    id: 'montessori',
    index: '02',
    title: 'Montessori-Based Learning',
    subtitle: 'Hands-on experiences, purposeful activities, and self-discovery',
    accentColor: '#0284C7',
    lead: 'Children interact with purposeful Montessori materials that help them understand concepts through observation, manipulation, and exploration.',
    points: [
      'Practical Life Activities',
      'Sensorial Exploration',
      'Language Development',
      'Mathematical Concepts',
      'Environmental Awareness',
      'Fine and Gross Motor Development',
      'Independent Learning and Problem Solving',
    ],
    closing:
      'We encourage independence, concentration, coordination, order, and a natural love for learning.',
  },
  {
    id: 'kreedo',
    index: '03',
    title: 'Kreedo Learning Framework',
    subtitle: 'Structured early childhood partnership with Kreedo Early Childhood Solutions, Bengaluru',
    accentColor: '#059669',
    lead: 'Early Wings has partnered with Kreedo Early Childhood Solutions, Bengaluru, to strengthen its early childhood programme across eight developmental domains.',
    points: [
      'Physical Development & Socio-Emotional Development',
      'Cognitive Development & Language and Communication',
      'Sensorial Development & Mathematics',
      'Creative Development & Environment and Culture',
    ],
    closing:
      'We integrate the structured Kreedo approach with Montessori principles and our own child-centred teaching practices.',
  },
  {
    id: 'teachers',
    index: '04',
    title: 'Our Teachers — The Heart of Early Wings',
    subtitle: 'Knowledgeable, caring, and responsible facilitators trained in Montessori & Kreedo',
    accentColor: '#E11D48',
    lead: 'Our teachers are not merely instructors; they are facilitators who guide children towards discovery, confidence, and independence.',
    points: [
      'Understanding early childhood development',
      'Montessori-based & activity-based classroom practices',
      'Child observation and individual attention',
      'Positive communication and encouragement',
      'Creating a joyful, respectful, and stimulating classroom environment',
    ],
    closing:
      'Every daily routine balances structured learning with play, stories, movement, creative expression, and social interaction.',
  },
];

export const TEACHING_METHODOLOGY_LIST = [
  'Montessori Methodology',
  'Kreedo Learning Framework',
  'Play-Based Learning',
  'Experiential Learning',
  'Theme-Based Teaching',
  'Sensorial Activities',
  'Storytelling and Puppet Shows',
  'Circle Time and Group Interaction',
  'Practical Life Experiences',
  'Activity-Based Learning',
];

export const ORAL_BOOK_CATEGORIES: OralBookCategory[] = [
  {
    id: 'poems',
    title: 'English and Telugu Poems',
    description:
      'Rhythmic bilingual verses curated for Nursery to UKG to build pronunciation, vocabulary, and expressive confidence in both languages.',
    highlights: ['Bilingual phonetic rhythm', 'Memory & listening fluency', 'Daily joyful recitation'],
  },
  {
    id: 'national',
    title: 'National Songs',
    description:
      'Patriotic songs and civic verses that cultivate gratitude, unity, respect for heritage, and poised assembly participation.',
    highlights: ['Civic & cultural pride', 'Group singing harmony', 'Stage readiness'],
  },
  {
    id: 'vemana',
    title: 'Vemana Padyalu',
    description:
      'Timeless Telugu moral verses introduced in child-friendly explanations to nurture ethical thinking, humility, and cultural roots.',
    highlights: ['Mother-tongue heritage', 'Moral character lessons', 'Age-appropriate meaning'],
  },
  {
    id: 'gk',
    title: 'General Knowledge Topics',
    description:
      'Structured age-appropriate oral facts covering nature, community helpers, seasons, healthy habits, and the world around us.',
    highlights: ['Curiosity-driven inquiry', 'Conversational awareness', 'Real-world connections'],
  },
];

export const ORAL_BOOK_AUTHORSHIP =
  'Conceptualised, Compiled & Authored by Karunamai Nandamuri, Founder & Principal, Early Wings Preschool.';

export const EXPERIENTIAL_ACTIVITIES = [
  'Yoga and physical activities',
  'Art and Craft',
  'Dance, Music and Songs',
  'Storytelling and Puppet Shows',
  'Gardening and Cooking',
  'Life Skills and Practical Activities',
  'Cultural and Festival Celebrations',
  'Sports and Special Days',
  'Educational Field Trips',
  'Annual Day Celebrations',
];

export const LEARNING_THEMES = [
  'All About Me',
  'Transportation',
  'Earth and Nature',
  'Animal Kingdom',
  'Plant Kingdom',
  'Food and Nutrition',
  'Culture and Society',
  'Professions and Industries',
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: '01',
    title: 'Fill the Admission Enquiry Form',
    description:
      'Share your child’s name, age group, and contact details online in under a minute.',
  },
  {
    step: '02',
    title: 'Receive an Invitation Call',
    description:
      'Our Kanuru campus coordinator connects with you to schedule a convenient morning visit.',
  },
  {
    step: '03',
    title: 'Guided Campus Tour',
    description:
      'Explore our Montessori & Kreedo classrooms, meet our facilitators, and review the Oral Book.',
  },
  {
    step: '04',
    title: 'Join the Early Wings Family',
    description:
      'Complete simple registration formalities and begin your child’s joyful learning journey.',
  },
];

export const JOURNEY_ACHIEVEMENTS: AchievementItem[] = [
  {
    year: '2016',
    title: 'Foundation of Early Wings Preschool',
    organization: 'Kanuru, Vijayawada',
    detail:
      'Established on 9th June 2016 with a mission to make quality, value-based early childhood education accessible and joyful.',
  },
  {
    year: '2022',
    title: 'Recognised as the 100th Preschool in India',
    organization: 'Early Childhood Development & Learning Association (ECDLA)',
    detail:
      'National recognition acknowledging our structured Montessori and Kreedo classroom standards.',
  },
  {
    year: '2024',
    title: '50th-Place National Ranking — Top 50 Preschools in India',
    organization: 'ECDLA · #EYES2024 Summit & Awards',
    detail:
      'Honoured as one of the Top 50 Preschools in India for exceptional commitment to early education and a nurturing environment.',
  },
  {
    year: '2024',
    title: 'Woman Acharya of the Year & Top Distinguished Leader in Education',
    organization: 'EK NARI 100 PE BHARI & ECDLA #EYES2024',
    detail:
      'Founder & Principal Karunamai Nandamuri honoured nationally for leadership and passion for early childhood teaching.',
  },
  {
    year: '2026',
    title: 'Recognised at ECDLA EYES Summit',
    organization: 'Mumbai, India',
    detail:
      'Founder honoured at the national Early Years Education Summit for ongoing educational innovation.',
  },
];

export const FOUNDER_PROFILE = {
  name: 'Karunamai Nandamuri',
  image: '/assets/aistudio/9cbc7595-f057-4020-93f2-e8f5c451b21e_4dd1e6d7.jpg',
  credentialsShort: 'MA, B.Ed.',
  titles: [
    'Early Educator',
    'Child Counsellor and Child Psychologist',
    'Founder and Principal of Early Wings Preschool',
  ],
  role: 'Founder and Principal of Early Wings Preschool',
  qualifications: [
    'MA in English Literature',
    'Bachelor of Education (B.Ed.)',
    'Early Childhood Educator Training (0–6 years) — Kreedo Early Childhood Solutions, Bengaluru',
    'Montessori Training — APPTI',
    'Diploma in Child Psychology and Child Counselling',
  ],
  bio: 'An educator deeply committed to childhood development, meaningful education, and value-based learning. Her vision is to create an educational environment where children are respected, understood, encouraged, and empowered to discover their abilities.',
  storytelling: {
    title: "Karunamai's Tales",
    platform: 'YouTube Storytelling Initiative',
    description:
      'Through narrated Telugu stories, Karunamai’s Tales preserves our mother tongue, strengthens listening and language skills, sparks imagination, and plants moral values in young minds.',
    quote: 'A good story can plant a beautiful thought in a young mind.',
    highlights: [
      'Preserve and celebrate our mother tongue',
      'Develop listening and language skills',
      'Encourage imagination and creativity',
      'Introduce moral values and positive life lessons',
      'Strengthen children’s connection with culture and storytelling',
    ],
  },
};

export const MISSION_COMMITMENTS = [
  'Nurturing every child’s unique potential.',
  'Providing a safe, joyful, and stimulating learning environment.',
  'Encouraging curiosity, creativity, and independent thinking.',
  'Developing strong academic and life-skill foundations.',
  'Instilling values, respect, and responsibility.',
  'Partnering with parents in children’s developmental journey.',
];

export const FUTURE_VISION_PILLARS = [
  'Quality Montessori-based early childhood education',
  'Early educator and teacher training',
  'Practical and experiential learning',
  'Value-based educational opportunities',
  'A broader learning environment that nurtures children and educators',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'award-eyes2026-stage',
    category: 'certificates',
    title: 'Honoured at #EYES2026HONOURS Summit',
    subtitle: 'Early Years Educators Summit 2026 national stage recognition — Mumbai',
    year: '10 October 2026',
    image: '/assets/aistudio/83c150fc-e205-47a3-8a0e-f11a486b5218_42a00dae.jpg',
    alt: 'Karunamai Nandamuri receiving #EYES2026HONOURS award on stage at Early Years Educators Summit 2026',
  },
  {
    id: 'award-eyes2026-portrait',
    category: 'certificates',
    title: 'Early Years Educators Summit 2026 (11th Edition)',
    subtitle: 'Karunamai Nandamuri holding the EYES 2026 Trophy & Certificate of Honour',
    year: '10 October 2026',
    image: '/assets/aistudio/ca59a61d-85da-4d9d-b8af-6fe72f625ba3_2c9a29f6.jpg',
    alt: 'Karunamai Nandamuri with the EYES 2026 11th Edition Trophy and Certificate of Honour on stage',
  },
  {
    id: 'award-eyes2026-certificate-trophy',
    category: 'certificates',
    title: 'EYES 2026 Certificate of Honour & Wooden Trophy',
    subtitle: 'Outstanding Contribution to Early Years Education — The LaLiT, Mumbai (GEC)',
    year: '10 October 2026',
    image: '/assets/aistudio/fadda97b-df9c-4a10-a2fb-27fe3b65256d_e69aa409.jpg',
    alt: 'EYES 2026 Certificate of Honour and engraved wooden trophy presented to Ms. Karunamai Nandamuri',
  },
  {
    id: 'award-eyes2026-trophy-detail',
    category: 'certificates',
    title: 'Outstanding Contribution to Early Years Education (#EYES2026HONOURS)',
    subtitle: 'Handcrafted EYES 2026 Honour Trophy presented to Ms. Karunamai Nandamuri at The LaLiT, Mumbai',
    year: '10 October 2026',
    image: '/assets/aistudio/06c5fcc9-3e40-432e-b257-46dfbd885a45_c31a2dee.jpg',
    alt: 'Close-up of the EYES 2026 wooden pencil trophy presented to Ms. Karunamai Nandamuri for Outstanding Contribution to Early Years Education',
  },
  {
    id: 'award-eyes2024-stage',
    category: 'certificates',
    title: 'EYES 2024 Awards Presentation — Hyderabad',
    subtitle: 'Presenting Top 50 Preschools in India & Top Distinguished Leader in Education honours at Radisson Hi-Tech City',
    year: '27 July 2024',
    image: '/assets/aistudio/646fee87-47cc-4d0b-a406-671f17d93684_abdbf1f3.jpg',
    alt: 'Karunamai Nandamuri receiving dual Certificates of Recognition on stage at Early Years Educators Summit & Awards 2024',
  },
  {
    id: 'award-eyes2023-chennai',
    category: 'certificates',
    title: 'Top 100 Preschools in India — ECDLA Awards 2023',
    subtitle: 'Early Wings Preschool recognised at Early Years Educators Summit and Awards 2023 in Chennai',
    year: '27 April 2023',
    image: '/assets/aistudio/ea355518-5e9a-4532-91ab-a18f3164c204_2a977fb5.jpg',
    alt: 'Early Wings Preschool receiving the ECDLA Top 100 Preschools in India plaque on 27 April 2023 in Chennai',
  },
  {
    id: 'cert-top-50',
    category: 'certificates',
    title: 'Top 50 Preschools in India (#EYES2024)',
    subtitle: 'Certificate of Recognition awarded to Early Wings Preschool, Vijayawada by ECDLA & GEC',
    year: '27 July 2024',
    image: '/assets/aistudio/4d1a81fc-8c74-446b-b36f-745c62b3c804_940fc1ea.jpg',
    alt: 'Certificate of Recognition certifying Early Wings Preschool Vijayawada as one of the Top 50 Preschools in India at EYES 2024',
  },
  {
    id: 'cert-distinguished-leader',
    category: 'certificates',
    title: 'Top Distinguished Leader in Education (#EYES2024)',
    subtitle: 'Certificate of Recognition awarded to Ms. Karunamai Nandamuri by ECDLA & GEC',
    year: '27 July 2024',
    image: '/assets/aistudio/cd9dfa60-1760-4133-a1d0-0a0990ee4574_5124056b.jpg',
    alt: 'Certificate of Recognition certifying Ms. Karunamai Nandamuri as a Top Distinguished Leader in Education at EYES 2024',
  },
  {
    id: 'cert-kreedo-2022',
    category: 'certificates',
    title: 'Kreedo Early Childhood Training (Ages 2–6 Years)',
    subtitle: 'Certificate of Completion awarded to Karunamai Nandamuri by Kreedo Early Childhood Solutions',
    year: '28 April 2022',
    image: '/assets/aistudio/740cb683-ef25-4d09-b818-a33cd9632e0a_8445f980.jpg',
    alt: 'Kreedo Early Childhood Solutions Certificate of Completion for Karunamai Nandamuri covering ages 2 to 6 years',
  },
  {
    id: 'cert-kreedo-2016',
    category: 'certificates',
    title: 'Kreedo Teacher Training — Bengaluru (Ages 2–4 Years)',
    subtitle: 'Foundational certification completed prior to launching Early Wings Preschool in June 2016',
    year: '20 May 2016',
    image: '/assets/aistudio/b061acc4-3c06-4435-8463-936a3606c82d_ddbb6c72.jpg',
    alt: 'Kreedo Teacher Training Bengaluru Certificate of Completion awarded to Karunamai Nandamuri on 20 May 2016',
  },
  {
    id: 'classroom-hero',
    category: 'classroom',
    title: 'Guided Montessori Table Exploration',
    subtitle: 'Facilitators working individually with children using hands-on wooden materials',
    image: '/src/assets/images/hero_preschool_classroom_1794591478807.jpg',
    alt: 'Early Wings teacher guiding children with wooden Montessori puzzles in a sunlit classroom',
  },
  {
    id: 'classroom-montessori',
    category: 'classroom',
    title: 'Montessori Sensorial & Numeracy Lab',
    subtitle: 'Pink tower, geometric solids, counting beads, and tactile phonics cards',
    image: '/src/assets/images/montessori_sensory_learning_1794591478244.jpg',
    alt: 'Wooden Montessori pink tower, geometric solids, counting beads, and phonics cards',
  },
  {
    id: 'activity-circle',
    category: 'activities',
    title: 'Joyful Circle Time & Music',
    subtitle: 'Developing confidence, rhythm, and social bonding together',
    image: '/src/assets/images/why_holistic_circle_time_1794592559146.jpg',
    alt: 'Preschool teacher and children clapping happily during circle time',
  },
  {
    id: 'activity-storytelling',
    category: 'activities',
    title: 'Storytelling, Puppetry & Nature Craft',
    subtitle: 'Creative expression and language imagination in action',
    image: '/src/assets/images/creative_storytelling_arts_1794591479625.jpg',
    alt: 'Children enjoying puppet storytelling and leaf craft activities',
  },
  {
    id: 'stage-playgroup',
    category: 'activities',
    title: 'Playgroup Sensory Discovery',
    subtitle: 'Ages 2–3 years · Motor coordination and tactile play',
    image: '/src/assets/images/program_playgroup_toddlers_1794591737480.jpg',
    alt: 'Playgroup toddlers stacking wooden rings and soft sensory blocks',
  },
  {
    id: 'stage-nursery',
    category: 'activities',
    title: 'Nursery Phonics & Painting',
    subtitle: 'Ages 3–4 years · Language readiness and creative exploration',
    image: '/src/assets/images/program_nursery_phonics_1794591736415.jpg',
    alt: 'Nursery children exploring wooden letters and watercolor painting',
  },
  {
    id: 'stage-lkg',
    category: 'classroom',
    title: 'LKG Numeracy & Reading Readiness',
    subtitle: 'Ages 4–5 years · Abacus counting and cooperative learning',
    image: '/src/assets/images/program_lkg_numeracy_1794591738118.jpg',
    alt: 'LKG children counting Montessori abacus beads and reading picture books',
  },
  {
    id: 'stage-ukg',
    category: 'classroom',
    title: 'UKG World & School Readiness',
    subtitle: 'Ages 5–6 years · EVS globe exploration and fluent reading',
    image: '/src/assets/images/program_ukg_readiness_1794591736397.jpg',
    alt: 'UKG children reading storybooks and exploring a classroom globe with teacher',
  },
];
