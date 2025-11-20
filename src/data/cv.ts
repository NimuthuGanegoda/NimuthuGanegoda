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

export interface ReferenceItem {
  name: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
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
  interests?: string[];
  references?: ReferenceItem[];
}

export const cv: CVData = {
  name: 'Nimuthu Ganegoda',
  title: 'Computer Science Undergraduate (Cybersecurity Major)',
  location: 'Sri Lanka',
  email: 'NimuthuGanegoda@gmail.com',
  website: 'https://nimuthuganegoda.github.io/NimuthuGanegoda/',
  photo: 'images/profile.jpg',
  summary: 'Aspiring Cybersecurity Specialist with hands-on experience in penetration testing, vulnerability assessment, and network security analysis. Proficient in Kali Linux, Wireshark, and Metasploit, with a demonstrated ability to identify and mitigate security threats. Currently in 3rd year of Bachelor of Computer Science (Cybersecurity) at Edith Cowan University. Seeking a cybersecurity internship to apply technical skills in protecting digital infrastructure and developing proactive security solutions.',
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
      name: 'Multi-Service Linux Server',
      description: 'A comprehensive home server running multiple network services with remote access capabilities and performance optimizations.',
      stack: ['Linux', 'Tailscale', 'SSH', 'RDP', 'Liquorix Kernel', 'Zram-swap'],
      highlights: [
        'Network printing via CUPS server',
        'File sharing with Samba (SMB)',
        'Network scanning using SANE daemon',
        'AirPlay audio streaming with Shairport-sync',
        'Bluetooth speaker integration',
        'VS Code Server for remote development',
        'Secure remote access via Tailscale VPN, SSH, and RDP',
        'Performance tuning with Liquorix Kernel and Zram-swap'
      ],
      tags: ['linux', 'server', 'networking', 'homelab']
    },
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
    { institution: 'Edith Cowan University, Rajagiriya', degree: 'Bachelor of Computer Science (Cybersecurity) - 3rd Year', period: 'July 2025 – Present' },
    { institution: 'Edith Cowan University, Rajagiriya', degree: 'Bachelor of Computer Science (Cybersecurity) - 2nd Year', period: 'November 2024 – May 2025' },
    { institution: 'Edith Cowan College, Rajagiriya', degree: 'Diploma of Computer Science', period: 'January 2024 – September 2024' },
    { institution: 'Australian College of Business and Technology, Kandy', degree: 'Foundation of Computing', period: 'October 2022 – September 2023' },
    { institution: 'Lyceum International School, Nugegoda & Wattala', degree: 'Cambridge A-Level', period: 'June 2021 – August 2022' },
    { institution: 'Lyceum International School, Gampaha', degree: 'Cambridge O-Level', period: 'September 2011 – June 2021' }
  ],
  skills: [
    { category: 'Languages', items: ['Python', 'Dart', 'HTML', 'MATLAB', 'C++', 'C#', 'Bash'] },
    { category: 'Mobile Development', items: ['Flutter', 'Android Studio', 'Firebase'] },
    { category: 'Security Tools', items: ['Kali Linux', 'Wireshark', 'Nmap', 'Metasploit', 'Splunk'] },
    { category: 'Forensic Tools', items: ['Autopsy', 'FTK Imager', 'SANS Workstation'] },
    { category: 'Infrastructure & Tools', items: ['Linux', 'Git', 'GitHub Actions', 'Azure', 'Docker'] }
  ],
  certifications: [
    { name: 'IT Security Foundations: Network Security', issuer: 'LinkedIn Learning', year: 2024 }
  ],

  goals: [
    'Upload first Flutter app repository',
    'Share security-focused developer tools and scripts',
    'Collaborate on open-source projects with real-world impact',
    'Build portfolio for developer internship with security edge'
  ],
  currentlyLearning: [
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
  ],
  interests: [
    'Traveling and exploring new places',
    'Historical research and studying world history',
    'Gaming: Genshin Impact, Wuthering Waves, Zenless Zone Zero, Honkai Star Rail',
    'Japanese culture and anime',
    'VTuber music and Japanese/Korean music'
  ],
  references: [
    {
      name: 'Dr. Viduranga Waisundara',
      title: 'Lecturer',
      organization: 'Edith Cowan University',
      email: 'viduranga.waisundara@ecu.ecu.lk',
      phone: '+94 (077) 6762290'
    },
    {
      name: 'Mr. Ganaka Nagasinghe',
      title: 'Security Consultant',
      organization: 'Turner Construction International',
      email: 'gnagasinghe@icco.com',
      phone: '+971 (55) 5783160'
    }
  ]
};
