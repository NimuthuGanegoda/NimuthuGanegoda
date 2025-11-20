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
  demo?: string;
  image?: string; // relative path under public/images/projects
  stack: string[];
  highlights: string[];
  tags?: string[];
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
      description: 'Platform solving problem A with approach B (scalable, modular).',
      link: 'https://github.com/username/project-alpha',
      demo: 'https://example.com/alpha',
      image: '/images/projects/placeholder.svg',
      stack: ['Next.js', 'Tailwind', 'PostgreSQL'],
      highlights: ['Modular design', 'High test coverage', 'Responsive UI'],
      tags: ['web', 'platform', 'scalability']
    },
    {
      name: 'Project Beta',
      description: 'Data processing pipeline optimizing ETL throughput.',
      link: 'https://github.com/username/project-beta',
      demo: 'https://example.com/beta',
      image: '/images/projects/placeholder.svg',
      stack: ['Node.js', 'TypeScript', 'Redis'],
      highlights: ['Streaming ETL', 'Auto-scaling workers', 'Robust monitoring'],
      tags: ['etl', 'backend', 'performance']
    },
    {
      name: 'Project Gamma',
      description: 'Lightweight analytics dashboard with real-time charts.',
      link: 'https://github.com/username/project-gamma',
      demo: 'https://example.com/gamma',
      image: '/images/projects/placeholder.svg',
      stack: ['React', 'WebSockets', 'D3.js'],
      highlights: ['Real-time updates', 'Interactive charts', 'Exportable reports'],
      tags: ['frontend', 'analytics', 'realtime']
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
