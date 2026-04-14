export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
] as const;

export const STATS = [
  {
    id: "projects",
    value: "200+",
    label: "Projects Completed",
    icon: "briefcase",
  },
  {
    id: "clients",
    value: "50+",
    label: "Happy Clients",
    icon: "users",
  },
  {
    id: "experience",
    value: "10+",
    label: "Years Experience",
    icon: "award",
  },
  {
    id: "support",
    value: "24/7",
    label: "Customer Support",
    icon: "headphones",
  },
] as const;


export const ELIGIBILITY_SLIDES = [
  {
    id: 1,
    icon: "sparkles",
    image: "/images/austacute-case-sturdy.webp",
    heading: "Austacute",
    description: "Designed and built a full-stack spa and e-commerce platform with online booking, a product shop, and a membership portal — transforming a walk-in-only business into a 24/7 digital revenue engine that tripled revenue within 4 months of launch."
  },
  {
    id: 2,
    icon: "truck",
    image: "/images/fast-delivery-case-sturdy.webp",
    heading: "FastDeliver",
    description: "Built a real-time logistics dashboard with live driver tracking, automated route optimisation, and customer delivery notifications — cutting dispatch-to-door cycle time by 40% and reducing missed deliveries by over half."
  },
  {
    id: 3,
    icon: "building",
    image: "/images/dominion-pearl-case-sturdy.webp",
    heading: "Dominion Pearl",
    description: "Implemented an end-to-end AI automation system covering lead qualification, personalised follow-up sequences, and smart property matching — freeing the sales team to focus on closing deals instead of manual client follow-ups."
  }
];


export const CASE_STUDIES = [
  {
    id: 1,
    image: "https://placehold.co/500x600/1E293B/FFFFFF?text=Case+Study+1",
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 2,
    image: "https://placehold.co/500x600/334155/FFFFFF?text=Case+Study+2",
    problem: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    solution: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    id: 3,
    image: "https://placehold.co/500x600/475569/FFFFFF?text=Case+Study+3",
    problem: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    solution: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
  }
];

export const PRICING_COMPARISON = {
  traditional: {
    title: "Traditional Agencies",
    price: "₦5,000,000+",
    features: [
      { text: "Slow development cycles (6+ months)" },
      { text: "Hidden fees and scope creep" },
      { text: "Outdated, clunky tech stacks" },
      { text: "Poor communication and ghosting" },
      { text: "No focus on revenue or conversion" }
    ]
  },
  swiftbuild: {
    title: "SwiftBuild",
    price: "Starting at ₦1,500,000",
    features: [
      { text: "Rapid deployment (2-4 weeks)" },
      { text: "Transparent, milestone-based pricing" },
      { text: "Modern, highly scalable architecture" },
      { text: "Dedicated PM and guaranteed updates" },
      { text: "Built strictly to maximize your revenue" }
    ]
  }
};

export const TESTIMONIALS = [
  {
    id: 1,
    content: "SwiftBuild completely transformed our booking flow. We went from manual spreadsheets to a fully automated pipeline that tripled our revenue. Best tech investment we've ever made.",
    author: "Sarah O.",
    role: "Founder",
    company: "Austacute"
  },
  {
    id: 2,
    content: "They didn't just build a logistics dashboard—they fundamentally understood our core operational bottlenecks and built a custom SaaS that cut delivery friction in half.",
    author: "David E.",
    role: "Operations Lead",
    company: "FastDeliver"
  },
  {
    id: 3,
    content: "We wasted months with standard agencies until SwiftBuild stepped in. Their AI automation system handles our entire lead qualification pipeline seamlessly.",
    author: "Grace M.",
    role: "Director of Sales",
    company: "Dominion Pearl"
  },
  {
    id: 4,
    content: "The level of engineering precision SwiftBuild brings to the table is unmatched. They built our entire e-commerce infrastructure with scalability that handles our peak traffic effortlessly.",
    author: "Michael T.",
    role: "CTO",
    company: "ShopSmart"
  },
  {
    id: 5,
    content: "Finally, an agency that speaks 'business' as well as they speak 'code'. Our conversion rates stayed low until we redesigned our user journey with their team.",
    author: "Amina J.",
    role: "Product Manager",
    company: "GrowthFlow"
  },
  {
    id: 6,
    content: "Working with SwiftBuild was a breath of fresh air. They delivered ahead of schedule and the code quality is top-tier. Our internal team was blown away.",
    author: "John D.",
    role: "Engineering Manager",
    company: "NextGen"
  }
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "What services does SwiftBuild offer?",
    answer: "We specialize in three core areas: automating repetitive business tasks with AI, building robust and scalable custom software tailored to your operations, and developing high-converting websites and e-commerce platforms designed to drive revenue."
  },
  {
    id: "faq-2",
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. A standard landing page or simple website can take 2-4 weeks, while custom SaaS platforms or complex AI automations may take 2-4 months. We provide a detailed roadmap before kicking off any work."
  },
  {
    id: "faq-3",
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes. Launching your product is just the beginning. We offer dedicated maintenance, technical support, and continuous optimization packages to ensure your software remains secure, scales effectively, and adapts to new business needs."
  },
  {
    id: "faq-4",
    question: "How does your pricing structure work?",
    answer: "We prioritize value over rigid hourly billing. We offer clear, milestone-based pricing tailored to your specific project requirements, ensuring transparency from day one without any hidden fees."
  }
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "Our Services", href: "#services" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Contact Us", href: "#contact" },
  ],
  contact: [
    { label: "hello@swiftbuild.com", href: "mailto:hello@swiftbuild.com" }
  ]
} as const;
