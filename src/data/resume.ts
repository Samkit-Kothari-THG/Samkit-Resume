import {
  Bot,
  Boxes,
  Building2,
  ChartNoAxesCombined,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPinned,
  MessageSquareQuote,
  Rocket,
  Sparkles,
  Users,
  Workflow
} from "lucide-react";
import type { CommandModule, Experience, Metric, Profile, Project, RecommendationTheme, SkillGroup, SocialProof } from "../types/portfolio";

export const profile: Profile = {
  name: "Samkit Kothari",
  role: "Senior Frontend Engineer",
  headline:
    "Building revenue-impacting ecommerce, personalization, AI content, and storefront performance systems at THG.",
  location: "Maharashtra, India",
  email: "kotharisamkeet@gmail.com",
  secondaryEmail: "snkothari15@gmail.com",
  phone: "8669129605",
  linkedin: "https://www.linkedin.com/in/samkit-kothari-84b5131b4",
  existingPortfolio: "https://samkit-kothari.vercel.app/",
  resume: "/samkit-kothari-sse-resume.pdf"
};

export const commandModules: CommandModule[] = [
  { label: "React", detail: "UI systems", color: "#58d7cf" },
  { label: "Astro", detail: "islands", color: "#f2b84b" },
  { label: "Next.js", detail: "commerce apps", color: "#ffffff" },
  { label: "Personalization", detail: "targeted content", color: "#ff6bb5" },
  { label: "AI", detail: "content engine", color: "#8be28c" },
  { label: "Performance", detail: "TTFB / TTI", color: "#f97316" },
  { label: "Analytics", detail: "RUM + GTM", color: "#a78bfa" }
];

export const metrics: Metric[] = [
  { value: "4+", label: "years frontend engineering", icon: Gauge },
  { value: "12+", label: "beauty and luxury sites migrated", icon: Globe2 },
  { value: "2x", label: "personalized campaign ad revenue", icon: ChartNoAxesCombined },
  { value: "80%", label: "content production time reduced", icon: Sparkles },
  { value: "30+", label: "localized Hydrafacial languages", icon: MapPinned }
];

export const socialProof: SocialProof[] = [
  {
    value: "2K",
    label: "LinkedIn followers",
    detail: "A public professional audience connected to my frontend engineering, ecommerce, AI tooling, and career-growth work.",
    Icon: Linkedin
  },
  {
    value: "500+",
    label: "connections",
    detail: "A broad network across engineering, ecommerce, product, and delivery communities.",
    Icon: Users
  },
  {
    value: "6",
    label: "recommendations",
    detail: "Peer and colleague validation around the qualities I try to bring every day: ownership, clarity, and consistent delivery.",
    Icon: MessageSquareQuote
  },
  {
    value: "THG",
    label: "current platform",
    detail: "My current work focuses on commerce storefronts, personalization, analytics, and AI-assisted workflows.",
    Icon: Building2
  }
];

export const recommendationThemes: RecommendationTheme[] = [
  {
    title: "Technical ownership",
    body: "I take frontend work beyond UI delivery: migrations, performance tuning, observability, and production follow-through matter to me."
  },
  {
    title: "Collaborative engineering",
    body: "I work closely with design, data, marketing, and other engineers so platform work becomes visible product impact."
  },
  {
    title: "Commerce impact",
    body: "I connect engineering decisions to business outcomes: revenue, speed, localization, campaign tooling, and content efficiency."
  }
];

export const experiences: Experience[] = [
  {
    company: "THG",
    role: "Senior Software Engineer",
    period: "May 2024 - Present",
    summary:
      "Frontend and platform engineering for multi-tenant ecommerce storefronts, personalization, experimentation, and observability.",
    highlights: [
      "Led React, Astro, Next.js and Tailwind work across multi-tenant storefronts with accessibility, SEO and performance ownership.",
      "Migrated 10+ beauty and luxury commerce sites and improved TTFB, TTI, SEO, and maintainability.",
      "Built dynamic personalized ad/content delivery integrated with GTM, resolving legacy integration issues and doubling campaign ad revenue.",
      "Designed experiment instrumentation, dashboards, RUM, synthetic checks, alerts, runbooks, and sale-event resilience strategy."
    ]
  },
  {
    company: "Coditas Solutions",
    role: "Software Engineer",
    period: "Jul 2022 - May 2024",
    summary:
      "Responsive web applications, reusable component libraries, frontend performance work, and production testing practices.",
    highlights: [
      "Built React and Next.js applications with Tailwind, MUI, Chakra UI, and reusable frontend systems.",
      "Improved cross-browser compatibility and performance through code splitting, lazy loading, and testing coverage.",
      "Contributed to agile delivery, CI/CD practice, and peer code reviews."
    ]
  }
];

export const projects: Project[] = [
  {
    id: "storefront",
    title: "Ecommerce Multi-tenant Storefront",
    short: "A scalable storefront platform for multiple beauty brands.",
    problem: "Each tenant needed distinct themes, content rules, analytics, SEO behavior, and fast storefront delivery without duplicating code.",
    solution:
      "Created a configurable storefront layer with Astro.js, edge deployment, tenant-driven theming, dynamic content, and centralized management.",
    impact: "Improved site speed, reduced latency, and made brand launches easier to maintain.",
    tech: ["Astro.js", "React", "Next.js", "Tailwind CSS", "Edge rendering", "Analytics"],
    accent: "#58d7cf",
    Icon: Layers3
  },
  {
    id: "hydrafacial",
    title: "Hydrafacial",
    short: "Store locator, loyalty, forms, and global privacy localization.",
    problem: "Users needed to find nearby stores, complete dynamic forms, and access localized policy content across many markets.",
    solution:
      "Built a map-based locator with geolocation and filters, dynamic API-driven forms, loyalty flows, and localized privacy sections.",
    impact: "Delivered 29+ localized languages and a more complete self-service customer journey.",
    tech: ["React", "Geolocation", "Dynamic forms", "Localization", "API validation"],
    accent: "#f2b84b",
    Icon: MapPinned
  },
  {
    id: "personify",
    title: "Personify",
    short: "Workflow builder and campaign orchestration for personalization.",
    problem: "Marketing teams needed to build journeys, segment audiences, and track campaign performance across channels.",
    solution:
      "Created drag-and-drop workflow builder components, CSV/query segmentation tools, email template widgets, and analytics dashboards.",
    impact: "Helped productize real-time personalization, recommendations, and targeted offers across tenant sites.",
    tech: ["React", "Workflow UI", "CSV uploads", "Segmentation", "Analytics dashboards"],
    accent: "#ff6bb5",
    Icon: Workflow
  },
  {
    id: "vibelabs",
    title: "VibeLabs AI Content Engine",
    short: "Winner, THG India AI Hackathon 2025.",
    problem: "Ecommerce teams needed faster product copy, email campaigns, edited product visuals, and advertisement content.",
    solution:
      "Built an AI-powered engine using LLMs for SEO product copy, personalized campaign content, prompt improvement, product image editing, and video generation.",
    impact: "Reduced content production time by 80% while improving content relevance and creative velocity.",
    tech: ["LLMs", "Prompt engineering", "NLP", "Image pipeline", "Video generation"],
    accent: "#8be28c",
    Icon: Bot
  }
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    Icon: Code2,
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    label: "Frameworks & UI",
    Icon: Boxes,
    skills: [
      "React.js",
      "Astro.js",
      "Next.js",
      "Redux",
      "Recoil",
      "Tailwind CSS",
      "SCSS",
      "MUI",
      "Chakra UI",
      "Jest",
      "React Testing Library"
    ]
  },
  {
    label: "Backend & Platforms",
    Icon: Rocket,
    skills: ["Strapi", "Firebase", "REST APIs", "Git", "GitHub", "GitLab", "GTM", "JIRA"]
  },
  {
    label: "AI Tooling",
    Icon: Sparkles,
    skills: ["ChatGPT", "Claude", "Gemini", "Grok", "GitHub Copilot", "Claude Code CLI", "Codex CLI"]
  },
  {
    label: "Contact Channels",
    Icon: Mail,
    skills: ["LinkedIn", "Email", "Resume PDF", "Existing portfolio"]
  }
];
