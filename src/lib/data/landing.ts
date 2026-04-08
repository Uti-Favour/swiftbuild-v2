export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
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
    icon: "users",
    image: "https://placehold.co/600x700/D0D8E0/152A20?text=Eligibility+1",
    heading: "Eligibility Criteria",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 2,
    icon: "clipboard",
    image: "https://placehold.co/600x700/E0D8D0/152A20?text=Eligibility+2",
    heading: "Selection Process",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae."
  },
  {
    id: 3,
    icon: "star",
    image: "https://placehold.co/600x700/D0E0D8/152A20?text=Eligibility+3",
    heading: "Program Benefits",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
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

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "What services does SwiftBuild offer?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
  },
  {
    id: "faq-2",
    question: "How long does it take to build a website?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
  },
  {
    id: "faq-3",
    question: "Do you offer ongoing maintenance?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
  },
  {
    id: "faq-4",
    question: "What is your pricing structure?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
  }
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "Founders Lab", href: "#" },
    { label: "Growth Lab", href: "#" },
    { label: "Partners", href: "#" },
  ],
  contact: [
    { label: "info@startupbridge.ng", href: "mailto:info@startupbridge.ng" }
  ]
} as const;
