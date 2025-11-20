export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  achievements: string[];
  tech?: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  link?: string;
  stack: string[];
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: number;
}

export interface CVData {
  name: string;
  title: string;
  location: string;
  email: string;
  website?: string;
  summary: string;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  certifications: CertificationItem[];
}

export const cv: CVData = {
  name: 'Nimuthu Ganegoda',
  title: 'Software Engineer',
  location: 'City, Country',
  email: 'email@example.com',
  website: 'https://example.com',
  summary: 'Add a concise professional summary here describing core strengths, domain expertise and career focus.',
  experiences: [
    {
      role: 'Senior Developer',
      company: 'Company Name',
      period: '2023 - Present',
      summary: 'Lead development of scalable web applications and services.',
      achievements: [
        'Designed and implemented feature X improving Y by 30%',
        'Optimized build pipeline reducing deployment time',
        'Mentored junior engineers in TypeScript and architecture'
      ],
      tech: ['TypeScript', 'Next.js', 'Node.js']
    }
  ],
  projects: [
    {
      name: 'Project Alpha',
      description: 'An innovative platform solving problem A with approach B.',
      link: 'https://github.com/username/project-alpha',
      stack: ['Next.js', 'Tailwind', 'PostgreSQL'],
      highlights: ['Modular design', 'High test coverage', 'Responsive UI']
    }
  ],
  education: [
    { institution: 'University Name', degree: 'B.Sc. in Computer Science', period: '2018 - 2022' }
  ],
  skills: [
    { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python'] },
    { category: 'Frameworks', items: ['Next.js', 'React', 'Node.js'] },
    { category: 'Tools', items: ['Git', 'Docker', 'CI/CD'] }
  ],
  certifications: [
    { name: 'Certification Name', issuer: 'Issuer', year: 2024 }
  ]
};
