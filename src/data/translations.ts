import { NavigationItem, ServiceItem, ProjectItem, TeamMember, Testimonial } from '../types/language';

export const navigationItems: NavigationItem[] = [
  {
    key: 'home',
    label: { sw: 'Nyumbani', en: 'Home' },
    href: '#home'
  },
  {
    key: 'about',
    label: { sw: 'Kuhusu Sisi', en: 'About Us' },
    href: '#about'
  },
  {
    key: 'services',
    label: { sw: 'Huduma Zetu', en: 'Our Services' },
    href: '#services'
  },
  {
    key: 'projects',
    label: { sw: 'Miradi Yetu', en: 'Our Projects' },
    href: '#projects'
  },
  {
    key: 'blog',
    label: { sw: 'Blogu', en: 'Blog' },
    href: '#blog'
  },
  {
    key: 'contact',
    label: { sw: 'Wasiliana Nasi', en: 'Contact Us' },
    href: '#contact'
  }
];

export const heroContent = {
  title: {
    sw: 'Kujenga Maisha Bora kwa Afrika',
    en: 'Building Better Lives for Africa'
  },
  subtitle: {
    sw: 'Kunta Africa Group ni shirika linalojishughulisha na ujenzi, suluhisho za usafi, na elimu ya afya kwa maendeleo endelevu ya Afrika.',
    en: 'Kunta Africa Group is dedicated to construction, sanitation solutions, and health education for sustainable African development.'
  },
  cta: {
    sw: 'Angalia Miradi Yetu',
    en: 'View Our Projects'
  }
};

export const services: ServiceItem[] = [
  {
    title: {
      sw: 'Kunta Africa Construction',
      en: 'Kunta Africa Construction'
    },
    description: {
      sw: 'Huduma za ujenzi za kisasa na za ubora wa juu kwa majengo ya makazi, biashara, na miundombinu.',
      en: 'Modern and high-quality construction services for residential, commercial, and infrastructure projects.'
    },
    icon: 'Building',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: {
      sw: 'Kunta Africa Sanitary Solution',
      en: 'Kunta Africa Sanitary Solution'
    },
    description: {
      sw: 'Suluhisho za usafi wa mazingira na vyoo bora vya kisasa kwa jamii na makampuni.',
      en: 'Environmental sanitation solutions and modern quality latrines for communities and businesses.'
    },
    icon: 'Droplets',
    image: 'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: {
      sw: 'Dr. Uchafu',
      en: 'Dr. Uchafu'
    },
    description: {
      sw: 'Mradi wa elimu ya umma kuhusu umuhimu wa usafi wa kibinafsi na mazingira kwa afya bora.',
      en: 'Public education project on the importance of personal and environmental hygiene for better health.'
    },
    icon: 'GraduationCap',
    image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const projects: ProjectItem[] = [
  {
    title: {
      sw: 'Jengo la Ofisi Mikocheni',
      en: 'Mikocheni Office Building'
    },
    description: {
      sw: 'Jengo la ofisi la ghorofa 8 lenye vipengele vya kisasa na teknolojia za hali ya juu.',
      en: '8-story office building with modern features and high-tech amenities.'
    },
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Construction',
    client: { sw: 'Makampuni ya Mikocheni', en: 'Mikocheni Companies' },
    date: '2023'
  },
  {
    title: {
      sw: 'Mradi wa Vyoo Vya Jamii Temeke',
      en: 'Temeke Community Latrine Project'
    },
    description: {
      sw: 'Ujenzi wa vyoo vya jamii vya kisasa vinavyohudumia familia zaidi ya 200.',
      en: 'Construction of modern community latrines serving over 200 families.'
    },
    image: 'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Sanitary',
    client: { sw: 'Halmashauri ya Wilaya Temeke', en: 'Temeke District Council' },
    date: '2023'
  },
  {
    title: {
      sw: 'Kampeni ya Elimu ya Usafi Mwanza',
      en: 'Mwanza Hygiene Education Campaign'
    },
    description: {
      sw: 'Kampeni ya elimu ya usafi iliyofikia watu zaidi ya 5,000 katika wilaya ya Mwanza.',
      en: 'Hygiene education campaign reaching over 5,000 people in Mwanza district.'
    },
    image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Education',
    client: { sw: 'Wizara ya Afya', en: 'Ministry of Health' },
    date: '2023'
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Amina Hassan',
    position: {
      sw: 'Mkurugenzi Mkuu',
      en: 'Chief Executive Officer'
    },
    image: 'https://images.pexels.com/photos/3760265/pexels-photo-3760265.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: {
      sw: 'Daktari Amina ana uzoefu wa miaka 15 katika maendeleo ya jamii na usimamizi wa miradi.',
      en: 'Dr. Amina has 15 years of experience in community development and project management.'
    }
  },
  {
    name: 'Eng. John Mwalimu',
    position: {
      sw: 'Mkuu wa Idara ya Ujenzi',
      en: 'Head of Construction'
    },
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: {
      sw: 'Muhandisi John ana uzoefu wa miaka 20 katika ujenzi na usimamizi wa miradi mikuu.',
      en: 'Engineer John has 20 years of experience in construction and major project management.'
    }
  },
  {
    name: 'Mary Kimani',
    position: {
      sw: 'Mkuu wa Idara ya Usafi',
      en: 'Head of Sanitation'
    },
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: {
      sw: 'Mary ni mtaalamu wa usafi wa mazingira na afya ya jamii kwa miaka 12.',
      en: 'Mary is an environmental sanitation and public health specialist with 12 years of experience.'
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Mheshimiwa Fatma Ally',
    position: {
      sw: 'Mbunge wa Kinondoni',
      en: 'Member of Parliament for Kinondoni'
    },
    company: {
      sw: 'Bunge la Tanzania',
      en: 'Parliament of Tanzania'
    },
    content: {
      sw: 'Kunta Africa Group imekuwa mshirika mzuri katika maendeleo ya jamii zetu. Miradi yao ni ya ubora wa juu na inafikiwa kwa wakati.',
      en: 'Kunta Africa Group has been an excellent partner in our community development. Their projects are high quality and delivered on time.'
    },
    image: 'https://images.pexels.com/photos/3760265/pexels-photo-3760265.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Eng. Peter Mbwana',
    position: {
      sw: 'Mkurugenzi wa Ujenzi',
      en: 'Construction Director'
    },
    company: {
      sw: 'Shirika la Maendeleo',
      en: 'Development Corporation'
    },
    content: {
      sw: 'Tulipokutana na Kunta Africa Group, tulipata mshirika wa kuaminika. Huduma zao za ujenzi ni za hali ya juu sana.',
      en: 'When we met Kunta Africa Group, we found a reliable partner. Their construction services are of very high quality.'
    },
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const blogPosts = [
  {
    title: {
      sw: 'Umuhimu wa Usafi wa Mazingira',
      en: 'The Importance of Environmental Hygiene'
    },
    excerpt: {
      sw: 'Mazingira safi ni msingi wa afya bora ya jamii. Makala hii inajadili jinsi unavyoweza kulinda mazingira yako.',
      en: 'Clean environment is the foundation of good community health. This article discusses how you can protect your environment.'
    },
    date: '2024-01-15',
    author: 'Dr. Uchafu',
    image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: {
      sw: 'Teknolojia Mpya za Ujenzi',
      en: 'New Construction Technologies'
    },
    excerpt: {
      sw: 'Dunia ya ujenzi inaendelea kubadilika. Soma kuhusu teknolojia mpya zinazobadilisha tasnia ya ujenzi.',
      en: 'The construction world continues to evolve. Read about new technologies transforming the construction industry.'
    },
    date: '2024-01-10',
    author: 'Eng. John Mwalimu',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: {
      sw: 'Mafanikio ya Mradi wa Temeke',
      en: 'Success of Temeke Project'
    },
    excerpt: {
      sw: 'Mradi wa vyoo vya jamii Temeke umekamilika kwa mafanikio. Hapa kuna ripoti kamili ya athari zake.',
      en: 'The Temeke community latrine project has been successfully completed. Here is a comprehensive report on its impact.'
    },
    date: '2024-01-05',
    author: 'Mary Kimani',
    image: 'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

// SEO Keywords for Tanzania market
export const seoKeywords = {
  construction: {
    sw: [
      'kampuni za ujenzi Tanzania',
      'wajenzi bora Dar es Salaam',
      'miradi ya barabara Tanzania',
      'ujenzi wa nyumba kisasa Tanzania',
      'makandarasi wa majengo Tanzania',
      'ujenzi wa miundombinu Tanzania'
    ],
    en: [
      'construction companies Tanzania',
      'best builders Dar es Salaam',
      'road projects Tanzania',
      'modern house construction Tanzania',
      'building contractors Tanzania',
      'infrastructure development Tanzania'
    ]
  },
  sanitary: {
    sw: [
      'vyoo bora Tanzania',
      'suluhisho za usafi wa mazingira',
      'usimamizi wa taka Tanzania',
      'vyoo vya kisasa Afrika',
      'afya na usafi Dar es Salaam',
      'ujenzi wa vyoo Tanzania'
    ],
    en: [
      'best latrines Tanzania',
      'sanitation solutions',
      'waste management Tanzania',
      'modern toilets Africa',
      'health and hygiene Dar es Salaam',
      'latrine construction Tanzania'
    ]
  },
  education: {
    sw: [
      'elimu ya usafi Tanzania',
      'kampeni za afya na usafi',
      'jinsi ya kuweka mazingira safi',
      'Dr. Uchafu Tanzania',
      'mafunzo ya usafi jamii'
    ],
    en: [
      'hygiene education Tanzania',
      'health and hygiene campaigns',
      'how to keep environment clean',
      'Dr. Uchafu Tanzania',
      'community hygiene training'
    ]
  },
  booking: {
    sw: [
      'panga uteuzi ujenzi',
      'omba huduma za usafi',
      'booking huduma Tanzania',
      'teua wakati wa mazungumzo'
    ],
    en: [
      'book construction consultation Tanzania',
      'request sanitation services Dar es Salaam',
      'online booking Tanzania',
      'schedule consultation appointment'
    ]
  }
};

export const companyInfo = {
  name: 'Kunta Africa Group',
  tagline: {
    sw: 'Kujenga Maisha Bora kwa Afrika',
    en: 'Building Better Lives for Africa'
  },
  mission: {
    sw: 'Kutoa huduma za ubora wa juu za ujenzi, usafi, na elimu ya afya kwa maendeleo endelevu ya Afrika.',
    en: 'To provide high-quality construction, sanitation, and health education services for sustainable African development.'
  },
  vision: {
    sw: 'Kuwa shirika linalongoza katika maendeleo ya miundombinu na afya ya jamii Afrika.',
    en: 'To be a leading organization in African infrastructure development and community health.'
  },
  values: [
    {
      title: { sw: 'Ubora', en: 'Excellence' },
      description: { sw: 'Tunatoa huduma za hali ya juu daima', en: 'We always deliver high-quality services' }
    },
    {
      title: { sw: 'Uaminifu', en: 'Integrity' },
      description: { sw: 'Tunafanya kazi kwa uwazi na uaminifu', en: 'We work with transparency and integrity' }
    },
    {
      title: { sw: 'Maendeleo', en: 'Development' },
      description: { sw: 'Tunachangia maendeleo ya jamii', en: 'We contribute to community development' }
    },
    {
      title: { sw: 'Uvumilivu', en: 'Sustainability' },
      description: { sw: 'Tunahakikisha mazingira yanabaki salama', en: 'We ensure the environment remains safe' }
    }
  ]
};