export type ProjectId = string;

export type PortfolioIconName =
  | "bot"
  | "boxes"
  | "building"
  | "chart"
  | "code"
  | "gauge"
  | "globe"
  | "layers"
  | "linkedin"
  | "mail"
  | "map"
  | "quote"
  | "rocket"
  | "sparkles"
  | "users"
  | "workflow";

export type Profile = {
  name: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  secondaryEmail: string;
  phone: string;
  linkedin: string;
  existingPortfolio: string;
  resume: string;
};

export type CommandModule = {
  label: string;
  detail: string;
  color: string;
};

export type Metric = {
  value: string;
  label: string;
  icon: PortfolioIconName;
};

export type SocialProof = {
  value: string;
  label: string;
  detail: string;
  icon: PortfolioIconName;
};

export type RecommendationTheme = {
  title: string;
  body: string;
};

export type Project = {
  id: ProjectId;
  title: string;
  short: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  accent: string;
  icon: PortfolioIconName;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  icon: PortfolioIconName;
  skills: string[];
};
