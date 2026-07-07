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

export interface LanguageItem {
  name: string;
  proficiency: string;
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
  photo?: string;
  summary: string;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  certifications: CertificationItem[];
  goals?: string[];
  currentlyLearning?: string[];
  languages?: LanguageItem[];
  socials?: { name: string; url: string }[];
  interests?: string[];
  references?: ReferenceItem[];
}

export const cv: CVData = {
  name: 'Nimuthu Ganegoda',
  title: 'Final Year BSc Computer Science (Cybersecurity) | Aspiring Cybersecurity Analyst',
  location: 'Nittambuwa, Sri Lanka',
  email: 'NimuthuGanegoda@gmail.com',
  website: 'https://nimuthuganegoda.github.io/NimuthuGanegoda/',
  photo: 'images/profile.jpg',
  summary: 'I am a final-year Bachelor of Computer Science undergraduate majoring in Cybersecurity at Edith Cowan University (Sri Lanka campus), with a strong interest in digital security, threat analysis, and ethical hacking. My academic and personal pursuits reflect a deep commitment to understanding the evolving landscape of cyber threats and digital risk management. I am currently applying my knowledge in real-world contexts through an internship at MillenniumIT ESP as a Managed Security Services Engineer, focusing on network security, vulnerability assessment, and secure system design. I plan to pursue postgraduate studies in cybersecurity, with long-term aspirations to contribute to international security environments — particularly in Japan, a nation I admire for its technology leadership and innovation.',
  experiences: [
    {
      role: 'Managed Security Services Engineer',
      company: 'MillenniumIT ESP',
      period: 'April 2026 – Present',
      summary: 'Internship role in a Security Operations Center (SOC) environment, monitoring and protecting enterprise security infrastructure.',
      achievements: [
        'Monitoring and analyzing security events in a 24/7 SOC environment',
        'Triaging and escalating security incidents to ensure timely response',
        'Supporting threat detection and vulnerability assessments for enterprise clients',
        'Collaborating with senior analysts to improve security monitoring procedures'
      ],
      tech: ['SIEM', 'Threat Detection', 'Incident Response', 'SOC Operations', 'Network Security']
    },
    {
      role: 'Database Manager',
      company: 'BusGo (Online Bus Travelling Management)',
      period: 'February 2026 – Present',
      summary: 'Leading database design and management for a comprehensive bus transit ecosystem.',
      achievements: [
        'Designed and implemented scalable PostgreSQL schema using Supabase',
        'Ensured data integrity and optimized query performance for real-time tracking',
        'Collaborated with backend and mobile teams for seamless API integration'
      ],
      tech: ['PostgreSQL', 'Supabase', 'Database Design', 'Data Integrity']
    }
  ],
  projects: [
    {
      name: 'BusGo: Online Bus Travelling Management',
      description: 'A comprehensive suite of applications for modern bus management and passenger tracking in Sri Lanka.',
      link: 'https://github.com/NimuthuGanegoda/BusGo',
      stack: ['Node.js', 'Express', 'Supabase', 'Flutter', 'React', 'Python'],
      highlights: [
        'Real-time bus tracking and trip management',
        'Dedicated mobile apps for passengers and drivers',
        'AI-powered ETA estimation and emergency triage',
        'Admin dashboard for system-wide oversight'
      ],
      tags: ['transit', 'mobile', 'ai', 'fullstack']
    },
    {
      name: 'ZeroAir (Aether)',
      description: 'An open Apple AirDrop implementation supporting Windows to iPhone/Android cross-platform file transfers.',
      link: 'https://github.com/NimuthuGanegoda/ZeroAir',
      stack: ['Python', 'Networking', 'Quick Share', 'AirDrop Protocol'],
      highlights: [
        'Implemented background service for continuous file transfers',
        'Enabled cross-platform discovery mimicking standard AirDrop peers',
        'Integrated Google Quick Share interoperability for Android support'
      ],
      tags: ['security', 'network', 'research']
    },
    {
      name: 'Rosetta-Browser',
      description: 'A browser data migration tool designed to bridge the gap between different browser engines (Blink, Gecko, WebKit).',
      link: 'https://github.com/NimuthuGanegoda/Rosetta-Browser',
      stack: ['Python', 'Browser Engines', 'Data Migration'],
      highlights: [
        'Cross-Engine Translation (Chromium to Firefox)',
        'Extension Rosetta for finding equivalent extensions across stores',
        'Forensic Continuity for migrating active browsing sessions',
        'Secure handling of OS-level encryption (DPAPI/Libsecret)'
      ],
      tags: ['web', 'browser', 'python']
    },
    {
      name: 'PilotHub',
      description: 'A unified AI Integration Tool providing a single interface to interact with multiple AI providers (ChatGPT, DeepSeek, Grok).',
      link: 'https://github.com/NimuthuGanegoda/PilotHub',
      stack: ['Python', 'AI', 'API Integration'],
      highlights: [
        'Unified interface for OpenAI, DeepSeek, and xAI',
        'Streamlined API key management and routing',
        'Extensible architecture for adding new AI providers'
      ],
      tags: ['tools', 'ai', 'automation']
    },
    {
      name: 'Sane-Windows',
      description: 'A port of SANE (Scanner Access Now Easy) core and WIA backend for Windows.',
      link: 'https://github.com/NimuthuGanegoda/Sane-Windows',
      stack: ['C', 'MinGW-w64', 'Windows Image Acquisition (WIA)'],
      highlights: [
        'Enables SANE applications to access Windows scanners',
        'Includes wiasane driver acting as a SANE frontend',
        'Supports cross-compilation from Linux using MinGW'
      ],
      tags: ['windows', 'driver', 'c']
    },
    {
      name: 'World History Archive',
      description: 'A Next.js web application for cataloging and visualizing historical kingdoms, monarchs, and archaeological sites.',
      link: 'https://github.com/NimuthuGanegoda/WorldHistoryArchive',
      stack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      highlights: [
        'Interactive map and timeline visualization',
        'Robust JSON schema for structured historical data',
        'Performance and accessibility focused design'
      ],
      tags: ['web', 'react', 'history', 'frontend']
    },
    {
      name: 'Multi-Service Linux Server',
      description: 'A comprehensive home server running multiple network services with remote access capabilities and performance optimizations.',
      stack: ['Linux', 'Tailscale', 'SSH', 'RDP', 'Liquorix Kernel', 'Zram-swap'],
      highlights: [
        'Network printing via CUPS server',
        'File sharing with Samba (SMB)',
        'Network scanning using SANE daemon',
        'Secure remote access via Tailscale VPN, SSH, and RDP'
      ],
      tags: ['linux', 'server', 'networking', 'homelab']
    }
  ],
  education: [
    { institution: 'Edith Cowan University, Rajagiriya', degree: 'Bachelor of Computer Science (Cybersecurity) - Final Year', period: '2024 – 2026' },
    { institution: 'Edith Cowan College, Rajagiriya', degree: 'Diploma of Computer Science', period: '2024 – 2024' },
    { institution: 'Australian College of Business and Technology, Kandy', degree: 'Foundation of Computing', period: '2022 – 2023' },
    { institution: 'Lyceum International School, Nugegoda & Wattala', degree: 'Cambridge A-Level Computer Science', period: '2021 – 2022' },
    { institution: 'Lyceum International School, Gampaha', degree: 'Cambridge O-Level Science', period: '2011 – 2021' }
  ],
  skills: [
    { category: 'Languages', items: ['Python', 'Dart', 'HTML', 'MATLAB', 'C++', 'C#', 'Bash'] },
    { category: 'Mobile Development', items: ['Flutter', 'Android Studio', 'Firebase'] },
    { category: 'Security Tools', items: ['Kali Linux', 'Wireshark', 'Nmap', 'Metasploit', 'Splunk', 'SIEM'] },
    { category: 'Forensic Tools', items: ['Autopsy', 'FTK Imager', 'SANS Workstation'] },
    { category: 'Infrastructure & Tools', items: ['Linux', 'Git', 'GitHub Actions', 'Azure', 'Docker'] }
  ],
  certifications: [
    { name: 'Advent of Cyber 2025', issuer: 'TryHackMe', year: 2025 },
    { name: 'IT Security Foundations: Network Security', issuer: 'LinkedIn Learning', year: 2025 }
  ],
  goals: [
    'Deepen expertise in SOC operations and incident response',
    'Contribute to open-source security tools and frameworks',
    'Pursue postgraduate studies in cybersecurity',
    'Build a career in international security environments, targeting Japan'
  ],
  currentlyLearning: [
    'SOC operations and SIEM tools in an enterprise environment',
    'Advanced threat detection and incident response workflows',
    'Vulnerability assessment and penetration testing methodologies',
    'Japanese language and culture for future aspirations in Japan'
  ],
  languages: [
    { name: 'English', proficiency: 'Native or bilingual proficiency' },
    { name: 'Sinhala', proficiency: 'Elementary proficiency' },
    { name: 'Japanese', proficiency: 'Limited working proficiency' },
    { name: 'Korean', proficiency: 'Elementary proficiency' },
    { name: 'German', proficiency: 'Elementary proficiency' }
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
    'Information Security and threat analysis',
    'Network infrastructure protection and cyber policy',
    'Traveling and exploring new cultures and places',
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
