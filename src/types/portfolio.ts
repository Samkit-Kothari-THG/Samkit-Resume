import type { LucideIcon } from "lucide-react";

export type ProjectId = string;

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
  icon: LucideIcon;
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
  Icon: LucideIcon;
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
  Icon: LucideIcon;
  skills: string[];
};
