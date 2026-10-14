export interface Education {
  degree: string;
  institution: string;
  year: string;
  gpa: string;
  details: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  scope: string;
  level?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  status?: string;
  link?: string;
  scholarLink: string;
  category: 'First Author' | 'Co-First Author' | 'Co-Author' | 'Book Chapter';
  summary?: string;
}

export interface Patent {
  title: string;
  status: 'Filed' | 'Granted';
  link?: string;
}

export interface Project {
  title: string;
  period: string;
  description: string[];
  link?: string;
}

export interface Recognition {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  role: string;
  summary: string;
  researchFocus: string;
  portfolio: {
    papers: string;
    citations: string;
    filings: string;
    grants: string;
    updated: string;
    patentUrl: string;
  };
  avatarUrl: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    scholar: string;
    website: string;
  };
  education: Education[];
  experience: Experience[];
  publications: Publication[];
  patents: Patent[];
  projects: Project[];
  recognition: Recognition[];
  skills: SkillCategory[];
  academicActivities: string[];
  reviewing: { role: string; organization: string; period: string }[];
}
