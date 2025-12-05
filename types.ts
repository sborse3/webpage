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
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status?: string;
  link?: string;
  category: 'First Author' | 'Co-Author' | 'Book Chapter';
}

export interface Patent {
  title: string;
  status: 'Filed' | 'Granted';
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
  avatarUrl: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    scholar: string;
  };
  education: Education[];
  experience: Experience[];
  publications: Publication[];
  patents: Patent[];
  projects: Project[];
  recognition: Recognition[];
  skills: SkillCategory[];
  academicActivities: string[];
}
