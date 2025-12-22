/**
 * Site Configuration
 * Centralized constants for the marketing website
 */

export const siteConfig = {
  name: 'Brima Agency',
  description: 'The everything platform for performing videos with creators',

  // External App URLs
  externalUrls: {
    login: '/auth/sign-in',
    signUp: '/auth/role-select',
    brandSignUp: '/auth/brand-sign-up',
    creatorSignUp: '/auth/creator-sign-up',
    jobApplicationForm: 'https://forms.gle/example'
  },

  // Contact Information
  contact: {
    email: 'hello@brimaagency.com',
    creatorSupportEmail: 'creators@brimaagency.com',
    whatsapp: '+1234567890',
    whatsappLink: 'https://wa.me/1234567890'
  },

  // Social Links
  social: {
    instagram: 'https://instagram.com/brimaagency',
    tiktok: 'https://tiktok.com/@brimaagency',
    linkedin: 'https://linkedin.com/company/brimaagency'
  },

  // Navigation
  navigation: [
    { label: 'For Brands', href: '/for-brands' },
    { label: 'For Creators', href: '/for-creators' },
    { label: 'Case Studies', href: '/cases' },
    { label: 'Career', href: '/career' }
  ],

  // Stats
  stats: {
    activeCreators: 1488,
    brandsWorking: 200,
    brandsUsingPlatform: 120
  },

  // Brand Colors (configurable accent)
  theme: {
    accentColor: '#6366f1' // Indigo-500
  }
};

export const testimonials = [
  {
    quote: 'This platform is a must if you need creator made videos enhanced with ultimate AI-Tools.',
    author: 'Sarah Johnson',
    title: 'Professional Media Buyer',
    company: 'Digital Marketing Co.'
  },
  {
    quote: 'The quality of content and speed of delivery exceeded our expectations. Game changer for our campaigns.',
    author: 'Michael Chen',
    title: 'Marketing Director',
    company: 'Tech Startup Inc.'
  }
];

export const faqsHome = [
  {
    question: 'Who is responsible for creating the content?',
    answer: 'Our network of professional creators produces all content under your brand guidelines, with our team managing the entire process to ensure quality and consistency.'
  },
  {
    question: 'What kind of videos do creators make?',
    answer: 'Product reviews, unboxings, tutorials, testimonials, and more - all customized to your brand needs and optimized for social media platforms.'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Standard delivery is 5-7 business days. Rush delivery is available for urgent projects with premium pricing.'
  },
  {
    question: 'How fast can creators start producing content?',
    answer: 'Once approved, creators can begin within 24-48 hours. We maintain a ready network of vetted creators across multiple niches.'
  }
];

export const faqsBrands = [
  {
    question: 'What makes your platform different?',
    answer: 'We combine AI-powered scripting, a vetted creator network, and managed service to deliver high-performing video content at scale.'
  },
  {
    question: 'How much does it cost?',
    answer: 'Pricing is customized based on your content volume, complexity, and turnaround needs. Contact us for a tailored quote.'
  },
  {
    question: 'Can I use the content everywhere?',
    answer: 'Yes, you receive full commercial rights to all content created for your brand, with no attribution required.'
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Absolutely! We serve businesses of all sizes, from startups to enterprise brands.'
  }
];

export const faqsCreators = [
  {
    question: 'How do I get paid?',
    answer: 'Payments are processed bi-weekly via direct deposit or PayPal. You set your rates and track earnings in the creator dashboard.'
  },
  {
    question: 'Do I need professional equipment?',
    answer: 'A modern smartphone with good camera quality is sufficient for most projects. We provide guidance on lighting and audio.'
  },
  {
    question: 'How flexible is the schedule?',
    answer: 'Completely flexible! You choose which projects to accept and set your own working hours.'
  },
  {
    question: 'What support do you provide?',
    answer: 'Dedicated creator support team, educational resources, and ongoing feedback to help you improve and grow your portfolio.'
  }
];

export const features = [
  {
    number: '01',
    title: '7+ LANGUAGES',
    description: 'Create content in multiple languages with native-speaking creators. Reach global audiences with authentic, localized video content.',
    cta: 'Learn more'
  },
  {
    number: '02',
    title: '100% CUSTOMIZEABLE CREATIONS',
    description: 'Full control over every aspect of your video content. From scripts to final edit, tailor everything to match your brand voice.',
    cta: 'Explore features'
  },
  {
    number: '03',
    title: 'AI SCRIPTER',
    description: 'Advanced AI generates compelling scripts optimized with data from thousands of successful campaigns. Save time while improving performance.',
    cta: 'Try AI tools'
  },
  {
    number: '04',
    title: 'MANAGED SERVICE',
    description: 'End-to-end production management by our expert team. From briefing to delivery, we handle everything so you can focus on results.',
    cta: 'Get started'
  }
];

export const caseStudies = [
  {
    id: 1,
    title: 'Tech Product Launch',
    brand: 'TechFlow AI',
    description: 'Created 150+ product demo videos across 5 languages with native creators',
    video: 'assets/videos/video1.mp4',
    results: '3.2M views',
    metric: '12% conversion rate',
    category: 'Product Launch'
  },
  {
    id: 2,
    title: 'Fitness App Campaign',
    brand: 'FitTrack Pro',
    description: 'TikTok & Instagram creator network driving app downloads',
    video: 'assets/videos/video2.mp4',
    results: '2M+ downloads',
    metric: '$0.80 CPI',
    category: 'App Marketing'
  },
  {
    id: 3,
    title: 'E-commerce Content',
    brand: 'StyleHub Fashion',
    description: 'Monthly UGC program with 50+ creators for authentic product showcases',
    video: 'assets/videos/video3.mp4',
    results: '5x ROAS',
    metric: '450K new followers',
    category: 'E-commerce'
  },
  {
    id: 4,
    title: 'Product Unboxing Series',
    brand: 'AudioPro Gear',
    description: 'Professional unboxing and review content optimized for conversions',
    video: 'assets/videos/video4.mp4',
    results: 'Sold out in 48hrs',
    metric: '2.8M views',
    category: 'Product Review'
  },
  {
    id: 5,
    title: 'Brand Storytelling',
    brand: 'EcoLiving Co.',
    description: 'Sustainability-focused creator content building authentic brand connection',
    video: 'assets/videos/video5.mp4',
    results: '10M+ reach',
    metric: '250K engagements',
    category: 'Brand Awareness'
  },
  {
    id: 6,
    title: 'Tutorial Series',
    brand: 'MasterClass Online',
    description: 'Educational content series with expert creators teaching skills',
    video: 'assets/videos/video6.mp4',
    results: '89% completion',
    metric: '500K enrolled',
    category: 'Education'
  }
];

export const jobs = [
  {
    id: 1,
    title: 'Videographer',
    workload: '80-100%',
    languages: ['German'],
    location: 'Zurich, Switzerland (Hybrid)',
    mission: [
      'Capture high-quality video content for client campaigns',
      'Collaborate with creative team on concept development',
      'Edit and post-produce video content',
      'Maintain and optimize video equipment'
    ],
    skillSet: [
      '3+ years professional videography experience',
      'Expert in Adobe Premiere & After Effects',
      'Strong portfolio showcasing diverse video styles',
      'Native German speaker',
      'Understanding of social media video formats'
    ],
    weOffer: [
      'Competitive salary + equipment budget',
      'Latest camera & editing equipment',
      'Creative freedom and diverse projects',
      'Flexible hybrid work model',
      'Professional development opportunities'
    ]
  },
  {
    id: 2,
    title: 'Business Development Intern',
    workload: '80-100%',
    languages: ['German', 'English'],
    location: 'Zurich, Switzerland (Hybrid)',
    mission: [
      'Support sales pipeline development',
      'Research and identify potential brand partners',
      'Assist in preparing client presentations',
      'Coordinate with internal teams on new opportunities'
    ],
    skillSet: [
      'Business or Marketing student (Bachelor/Master)',
      'Excellent communication in German & English',
      'Strong analytical and research skills',
      'Experience with CRM tools (Hubspot/Salesforce)',
      'Self-motivated and eager to learn'
    ],
    weOffer: [
      'Paid internship with learning budget',
      'Direct mentorship from leadership',
      'Real impact on company growth',
      'Flexible schedule around studies',
      'Potential for full-time opportunity'
    ]
  },
  {
    id: 3,
    title: 'Campaign Manager',
    workload: '60-80%',
    languages: ['German', 'English'],
    location: 'Remote (EU timezone)',
    mission: [
      'Manage end-to-end creator campaigns for brands',
      'Coordinate between brands, creators, and internal teams',
      'Monitor campaign performance and optimize',
      'Ensure quality and timely delivery'
    ],
    skillSet: [
      '2+ years in influencer or content marketing',
      'Fluent in German & English',
      'Strong project management skills',
      'Data-driven mindset with analytics experience',
      'Excellent stakeholder communication'
    ],
    weOffer: [
      'Flexible part-time remote work',
      'Competitive hourly rate',
      'Work with top brands',
      'Collaborative team culture',
      'Career growth opportunities'
    ]
  }
];

export const brandLogos = [
  { name: 'Brand Partner 1', alt: 'Client logo 1' },
  { name: 'Brand Partner 2', alt: 'Client logo 2' },
  { name: 'Brand Partner 3', alt: 'Client logo 3' },
  { name: 'Brand Partner 4', alt: 'Client logo 4' },
  { name: 'Brand Partner 5', alt: 'Client logo 5' },
  { name: 'Brand Partner 6', alt: 'Client logo 6' }
];

