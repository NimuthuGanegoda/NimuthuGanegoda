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
  photo?: string; // path under /public
  summary: string;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  certifications: CertificationItem[];
  goals?: string[];
  currentlyLearning?: string[];
  socials?: { name: string; url: string }[];
}

export const cv: CVData = {
  name: 'Nimuthu Ganegoda',
  title: 'Computer Science Undergraduate (Cybersecurity Major)',
  location: 'Sri Lanka',
  email: 'NimuthuGanegoda@gmail.com',
  website: 'https://nimuthuganegoda.github.io/NimuthuGanegoda/',
  photo: 'images/profile.jpg',
  summary: 'Computer Science Undergraduate (Cybersecurity Major) at Edith Cowan University. Cybersecurity Enthusiast, Developer, and Tech Explorer. Passionate about building secure mobile apps with Flutter & Android Studio. Strong foundation in software development, mobile app security, and network protocols.',
  experiences: [
    {
      role: 'Computer Science Student',
      company: 'Edith Cowan University',
      period: 'Present',
      summary: 'Pursuing BSc in Computer Science (Cybersecurity).',
      achievements: [
        'Developing secure mobile apps with Flutter & Android Studio',
        'Exploring AI-powered security tools and automation scripts',
        'Building reusable components and CI/CD pipelines'
      ],
      tech: ['Python', 'Dart', 'Flutter', 'Cybersecurity']
    }
  ],
  projects: [
    {
      name: 'GitHub Portfolio',
      description: 'A collection of my open source projects and contributions.',
      link: 'https://github.com/NimuthuGanegoda',
      demo: 'https://nimuthuganegoda.github.io/NimuthuGanegoda/',
      image: '/images/projects/placeholder.svg',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      highlights: ['Portfolio Website', 'Automated Repo Fetching', 'CI/CD Deployment'],
      tags: ['portfolio', 'web', 'react']
    }
  ],
  education: [
    { institution: 'Edith Cowan University, Rajagiriya', degree: 'BSc in Computer Science (Cybersecurity)', period: '3rd Year' },
    { institution: 'Edith Cowan College, Rajagiriya', degree: 'Diploma in Computer Science', period: 'Completed' },
    { institution: 'Australian College of Business and Technology, Kandy', degree: 'Foundation of Computing', period: 'Completed' },
    { institution: 'Lyceum International School', degree: 'Cambridge A-Level & O-Level', period: 'Completed' }
  ],
  skills: [
    { category: 'Languages', items: ['Python', 'Dart', 'HTML', 'MATLAB', 'C++', 'C#', 'Bash'] },
    { category: 'Mobile Development', items: ['Flutter', 'Android Studio', 'Firebase'] },
    { category: 'Security Tools', items: ['Kali Linux', 'Wireshark', 'Nmap', 'Metasploit', 'Splunk', 'Autopsy', 'FTK Imager', 'SANS Workstation'] },
    { category: 'Infrastructure & Tools', items: ['Linux', 'Git', 'GitHub Actions', 'Azure', 'Docker'] }
  ],
  certifications: [
    { name: 'CompTIA Security+ (Preparation)', issuer: 'CompTIA', year: 2024 }
  ],
  goals: [
    'Upload first Flutter app repository',
    'Share security-focused developer tools and scripts',
    'Collaborate on open-source projects with real-world impact',
    'Build portfolio for developer internship with security edge'
  ],
  currentlyLearning: [
    'CompTIA Security+ certification prep',
    'Advanced Flutter development with Dart',
    'AI in cybersecurity and secure app architecture',
    'Building reusable components and CI/CD pipelines'
  ],
  socials: [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/nimuthu-ganegoda' },
    { name: 'GitHub', url: 'https://github.com/NimuthuGanegoda' },
    { name: 'Instagram', url: 'https://instagram.com/nimuthumethsenganegoda' },
    { name: 'X', url: 'https://x.com/NimuthuG' },
    { name: 'Discord', url: 'https://discord.gg/ZdbHjfsvKg' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com/users/22270128' },
    { name: 'Reddit', url: 'https://reddit.com/user/Efficient_Sir_4576' },
    { name: 'Twitch', url: 'https://www.twitch.tv/nimnosekai' },
    { name: 'Email', url: 'mailto:nimuthuganegoda@gmail.com' }
  ]
};
