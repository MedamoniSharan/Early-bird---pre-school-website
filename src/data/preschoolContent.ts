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
    youtubeUrl: 'https://www.youtube.com/watch?v=MqdXBWG0qRE',
    youtubeChannelUrl: 'https://youtube.com/@earlywings2039?si=1lSO7joZ0-gFE2lk',
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
    value: 'Top 100',
    label: 'Preschool in India',
    subtext: 'ECDLA National Award (2023)',
  },
  {
    value: 'Top 50',
    label: 'Preschool in India',
    subtext: 'EYES National Ranking (2024)',
  },
  {
    value: '10 Years',
    label: 'Dr. Kiran Bedi Honour',
    subtext: 'Outstanding Contribution (10 Oct 2026)',
  },
  {
    value: '2–6 Yrs',
    label: 'Ages Nurtured',
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
    image: '/images/facebook/classroom_toddler_learning_play.jpg',
    imageAlt: 'Early Wings Playgroup toddlers engaged in joyful sensory and tactile learning with educators',
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
    image: '/images/facebook/classroom_children_studying_activity.jpg',
    imageAlt: 'Early Wings Nursery children learning with hands-on Montessori and Kreedo classroom materials',
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
    image: '/images/facebook/outdoor_nature_study_activity.jpg',
    imageAlt: 'Early Wings LKG students actively exploring numeracy, letters, and theme discovery',
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
    image: '/images/facebook/teachers_and_students_achievement.jpg',
    imageAlt: 'Early Wings UKG children learning confidently with caring Montessori teachers',
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
    title: 'Powered by Kreedo Early Childhood Solutions',
    subtitle: 'Kreedo Early Childhood Solutions, Bengaluru',
    accentColor: '#059669',
    lead: 'Early Wings Preschool is proudly powered by Kreedo Early Childhood Solutions, Bengaluru — delivering an activity-based curriculum, concrete sensorial materials, and verified child outcomes.',
    points: [
      'Structured learning framework.',
      'Montessori-inspired learning materials.',
      'Activity-based curriculum.',
      'Age-appropriate learning experiences.',
      'Teacher training and pedagogical guidance.',
    ],
    closing:
      'We integrate the structured Kreedo approach with Montessori principles and child-centred teaching practices.',
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

export const KREEDO_POWERED = {
  badge: 'Powered by...',
  partner: 'Kreedo Early Childhood Solutions. Bengaluru.',
  pillars: [
    'Structured learning framework.',
    'Montessori-inspired learning materials.',
    'Activity-based curriculum.',
    'Age-appropriate learning experiences.',
    'Teacher training and pedagogical guidance.',
  ],
  summary:
    'Early Wings Preschool is proudly powered by Kreedo Early Childhood Solutions, Bengaluru — providing structured learning frameworks, Montessori-inspired learning materials, and ongoing teacher training.',
};

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
    year: '2023',
    title: 'Top 100 Preschools in India — ECDLA Awards',
    organization: 'Early Childhood Development & Learning Association (ECDLA) · Chennai (27 April 2023)',
    detail:
      'Early Wings Preschool nationally recognised among the Top 100 Preschools in India for authentic child-centric early education.',
  },
  {
    year: '2024',
    title: 'Top 50 Preschools in India (#EYES2024)',
    organization: 'ECDLA & GEC · Radisson Hi-Tech City, Hyderabad (27 July 2024)',
    detail:
      'Honoured as one of the Top 50 Preschools in India and Top Distinguished Leader in Education awarded to Principal Karunamai Nandamuri.',
  },
  {
    year: '2026',
    title: '10 Years of Contribution Award — Honoured by Dr. Kiran Bedi',
    organization: 'Early Years Educators Summit 2026 (11th Edition) · The LaLiT, Mumbai (10 October 2026)',
    detail:
      'Chief Guest Dr. Kiran Bedi presented the prestigious #EYES2026HONOURS award to Ms. Karunamai Nandamuri for 10 glorious years of dedication to early childhood education.',
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
    title: '10 Years Contribution Award — Honoured by Dr. Kiran Bedi',
    subtitle: 'Chief Guest Dr. Kiran Bedi presenting #EYES2026HONOURS at The LaLiT, Mumbai',
    year: '10 October 2026',
    image: '/assets/aistudio/83c150fc-e205-47a3-8a0e-f11a486b5218_42a00dae.jpg',
    alt: 'Principal Karunamai Nandamuri receiving the 10 Years Contribution Honour from Dr. Kiran Bedi at EYES 2026 Summit in Mumbai',
  },
  {
    id: 'award-eyes2026-portrait',
    category: 'certificates',
    title: 'EYES 2026 11th Edition Trophy & Honour',
    subtitle: 'Karunamai Nandamuri holding the EYES 2026 Trophy & Certificate of Honour presented by Dr. Kiran Bedi',
    year: '10 October 2026',
    image: '/assets/aistudio/ca59a61d-85da-4d9d-b8af-6fe72f625ba3_2c9a29f6.jpg',
    alt: 'Karunamai Nandamuri with the EYES 2026 11th Edition Trophy and Certificate of Honour on stage',
  },
  {
    id: 'award-eyes2026-certificate-trophy',
    category: 'certificates',
    title: 'Outstanding Contribution to Early Years Education Trophy',
    subtitle: 'Honour Certificate & Handcrafted Trophy presented at The LaLiT, Mumbai',
    year: '10 October 2026',
    image: '/assets/aistudio/fadda97b-df9c-4a10-a2fb-27fe3b65256d_e69aa409.jpg',
    alt: 'EYES 2026 Certificate of Honour and engraved trophy celebrating 10 Years of Contribution to Early Years Education',
  },
  {
    id: 'award-eyes2026-trophy-detail',
    category: 'certificates',
    title: '10-Year Contribution Trophy Citation',
    subtitle: 'Official citation recognizing leadership, commitment, and meaningful impact through education',
    year: '10 October 2026',
    image: '/assets/aistudio/06c5fcc9-3e40-432e-b257-46dfbd885a45_c31a2dee.jpg',
    alt: 'Close-up of the EYES 2026 trophy presented to Ms. Karunamai Nandamuri for Outstanding Contribution to Early Years Education on 10 October 2026',
  },
  {
    id: 'award-eyes2024-stage',
    category: 'certificates',
    title: 'Top 50 Preschools in India (#EYES2024)',
    subtitle: 'Presenting Top 50 Preschools in India & Top Distinguished Leader honours at Radisson Hi-Tech City, Hyderabad',
    year: '27 July 2024',
    image: '/assets/aistudio/646fee87-47cc-4d0b-a406-671f17d93684_abdbf1f3.jpg',
    alt: 'Karunamai Nandamuri receiving Top 50 Preschools in India and Distinguished Leader certificates on stage at EYES 2024',
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
    title: 'Top 50 Preschools in India Official Certificate',
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
  // Authentic Facebook Community & Campus Life Photos
  {
    id: 'school-annual-day-grand',
    category: 'activities',
    title: 'Annual Day Celebrations & Student Honours',
    subtitle: 'Early Wings Preschool community celebrating milestones, student awards, and parent partnerships',
    image: '/images/facebook/school_annual_day_celebration.jpg',
    alt: 'Early Wings Preschool students, parents, and educators gathered for the grand Annual Day celebration',
  },
  {
    id: 'festival-janmashtami-krishna',
    category: 'activities',
    title: 'Sri Krishna Janmashtami & Cultural Festivities',
    subtitle: 'Preserving our traditions through joyous costumes, devotional songs, and cultural celebrations',
    image: '/images/facebook/festival_janmashtami_krishna_celebration.jpg',
    alt: 'Early Wings preschool student dressed as Lord Krishna with peacock feather and flute celebrating Janmashtami',
  },
  {
    id: 'annual-dance-performance',
    category: 'activities',
    title: 'Annual Cultural Dance & Stage Performances',
    subtitle: 'Building stage courage, rhythm, team coordination, and joyful self-expression',
    image: '/images/facebook/annual_day_cultural_dance_celebration.jpg',
    alt: 'Preschool children in bright traditional costumes performing cultural dance on stage',
  },
  {
    id: 'annual-kids-performance',
    category: 'activities',
    title: 'Children’s Day & Annual Day Celebrations',
    subtitle: 'Celebrating every child’s voice, talents, and smiles with certificates and encouragement',
    image: '/images/facebook/annual_day_kids_performance_smile.jpg',
    alt: 'Early Wings children smiling proudly with their performance certificates',
  },
  {
    id: 'field-trip-heritage',
    category: 'activities',
    title: 'Field Trips & Heritage Exploration',
    subtitle: 'Experiential learning visits to Undavalli Caves and regional heritage sites',
    image: '/images/facebook/school_field_trip_monument_visit.jpg',
    alt: 'Early Wings preschool learners on a guided educational field trip to heritage monuments',
  },
  {
    id: 'playground-play',
    category: 'activities',
    title: 'Campus Playground & Gross Motor Play',
    subtitle: 'Trampoline, climbing gym, balance beams, and safe open-air physical fun',
    image: '/images/facebook/school_playground_trampoline_activity.jpg',
    alt: 'Children enjoying safe trampoline and outdoor motor activities on the preschool campus',
  },
  {
    id: 'educators-montessori-team',
    category: 'classroom',
    title: 'Montessori Trained Teachers & Caring Facilitators',
    subtitle: 'Dedicated, APPTI & Kreedo certified educators providing loving 1:10 mentorship',
    image: '/images/facebook/educators_montessori_facilitators.jpg',
    alt: 'Montessori certified teachers and educators at Early Wings Preschool',
  },
  {
    id: 'teachers-mentorship-achieve',
    category: 'classroom',
    title: 'Individualized Classroom Mentorship & Achievements',
    subtitle: 'Guiding each child at their developmental pace with warmth, patience, and positive praise',
    image: '/images/facebook/teachers_and_students_achievement.jpg',
    alt: 'Preschool teacher proudly mentoring students with hands-on learning materials',
  },
  {
    id: 'classroom-children-activity',
    category: 'classroom',
    title: 'Hands-On Kreedo & Montessori Work Cycle',
    subtitle: 'Concentration, self-directed exploration, and practical life problem solving',
    image: '/images/facebook/classroom_children_studying_activity.jpg',
    alt: 'Children engaged with Montessori sensory learning trays and math materials in classroom',
  },
  {
    id: 'classroom-toddler-play',
    category: 'classroom',
    title: 'Playgroup & Nursery Sensory Discovery',
    subtitle: 'Tactile exploration, fine motor finger coordination, and cooperative play',
    image: '/images/facebook/classroom_toddler_learning_play.jpg',
    alt: 'Toddlers exploring colorful sensory materials in the Early Wings classroom',
  },
  {
    id: 'outdoor-nature-study',
    category: 'classroom',
    title: 'LKG & UKG Nature Study & Inquiry',
    subtitle: 'Connecting classroom concepts with nature, plants, gardening, and environment',
    image: '/images/facebook/outdoor_nature_study_activity.jpg',
    alt: 'Early Wings preschool children conducting outdoor nature and science observation',
  },
];

export interface EducatorProfile {
  name: string;
  role: string;
  credentials: string;
  image: string;
  alt: string;
  experience: string;
  specialty: string;
}

export const MONTESSORI_EDUCATORS: EducatorProfile[] = [
  {
    name: 'Karunamai Nandamuri',
    role: 'Founder, Principal & Head of Pedagogy',
    credentials:
      'MA English Literature · B.Ed. · Certified Montessori Teacher (APPTI) · Kreedo Early Childhood Educator (Bengaluru) · Child Psychologist & Counsellor',
    image: '/assets/aistudio/9cbc7595-f057-4020-93f2-e8f5c451b21e_4dd1e6d7.jpg',
    alt: 'Principal Karunamai Nandamuri, Certified Montessori Educator & Child Psychologist',
    experience: '10+ Years Dedicated Leadership in Early Childhood Education',
    specialty:
      'Early childhood psychology, Kreedo & Montessori curriculum integration, Telugu storytelling, and value-based education.',
  },
  {
    name: 'Certified Montessori Facilitators Team',
    role: 'Classroom Teachers & Early Learning Guides',
    credentials:
      'Accredited Early Childhood Montessori Methodology & Kreedo Learning Framework (Ages 2–6 Yrs)',
    image: '/images/facebook/educators_montessori_facilitators.jpg',
    alt: 'Montessori certified educators team at Early Wings Preschool',
    experience: 'Continuous Pedagogy Training & Child Safety Certified',
    specialty:
      'Low 1:10 teacher-to-child ratio, phonics development, sensorial apparatus guidance, and emotional nurturing.',
  },
  {
    name: 'Classroom Mentorship & Student Guidance',
    role: 'Hands-On Learning Lab Mentors',
    credentials:
      'Specialists in Sensory Labs, Abacus Math, Fine Motor Skills & Oral Book Recitation',
    image: '/images/facebook/teachers_and_students_achievement.jpg',
    alt: 'Montessori teachers mentoring children with learning materials in classroom',
    experience: 'Individual Attention for Playgroup, Nursery, LKG & UKG',
    specialty:
      'Reading readiness, bilingual oral confidence, tactile geometry, and primary school transition support.',
  },
];
