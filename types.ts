export enum Language {
  EN = 'EN',
  RU = 'RU'
}

export interface ProjectStats {
  label: string;
  value: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  description: string; // Short summary for card
  role: string;        // Added
  team: string;        // Added
  achievements: string[]; // Added
  tags: string[];
  imageType: 'mobile' | 'system' | 'abstract';
  stats: string[];
  linkText?: string;
}

export interface JobProject {
  title: string;
  role: string;
  tech: string;
  achievements: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  desc?: string;
  projects?: JobProject[];
  achievements?: string[]; // Use this if no specific sub-projects
  active?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface ContentProvider {
  nav: {
    title: string;
    items: string[]; // Metrics, Stack, Projects, Timeline
  };
  hero: {
    status: string;
    name: string; 
    role: string[];
    bio: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  metrics: {
    title: string;
    exp: { val: string; label: string };
    budget: { val: string; label: string };
    integrations: { val: string; label: string }; 
    team: { title: string; label: string };
    scope: { val: string; label: string };
  };
  skills: {
    title: string;
    mgmtTitle: string;
    softTitle: string;
    techTitle: string;
    management: SkillItem[]; 
    soft: string[]; 
    tech: TechCategory[]; 
  };
  projects: {
    title: string;
    closeText: string; // Added for localization
    items: FeaturedProject[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  extra: {
    pet: {
      title: string;
      desc: string;
      btn: string;
    };
    edu: {
      title: string;
      uni: string;
      degree: string;
      period: string;
    };
    hobbies: {
      sports: string;
      martial: string;
    };
  };
  footer: {
    title: { start: string; highlight: string };
    location: string;
    relocate: string;
    copy: string;
  };
}