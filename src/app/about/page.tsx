import Section from '../../components/Section';
import Link from 'next/link';

export const metadata = { title: 'About Me' };

const socials = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/nimuthu-ganegoda' },
  { label: 'GitHub', url: 'https://github.com/NimuthuGanegoda' },
  { label: 'X', url: 'https://x.com/NimuthuG' },
  { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/22270128' },
  { label: 'Discord', url: 'https://discord.gg/ZdbHjfsvKg' },
  { label: 'Twitch', url: 'https://www.twitch.tv/nimnosekai' },
  { label: 'Instagram', url: 'https://instagram.com/nimuthumethsenganegoda' }
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <Section title="Hi, I'm Nimuthu">
        <div className="card space-y-4 text-sm leading-relaxed">
          <p><strong>Computer Science Undergraduate (Cybersecurity Major)</strong> @ Edith Cowan University, Sri Lanka.</p>
          <p>Cybersecurity enthusiast & developer passionate about secure mobile apps (Flutter / Android Studio), anime & Japanese music with a goal to study & work in Japan.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Foundation in software development, mobile app security & network protocols.</li>
            <li>Experience with Flutter, Python, Dart, MATLAB, Android Studio.</li>
            <li>Focus on security, performance, UX; debugging & cross-platform troubleshooting.</li>
          </ul>
        </div>
      </Section>
      <Section title="Tech Stack & Tools">
        <div className="card grid md:grid-cols-2 gap-4 text-xs">
          <div>
            <p className="font-semibold mb-1">Languages & Frameworks</p>
            <p>Python, Dart, HTML, MATLAB, Flutter</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Security Tools</p>
            <p>Kali Linux, Wireshark, Nmap, Metasploit, Splunk</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Mobile Dev</p>
            <p>Android Studio, Firebase</p>
          </div>
          <div>
            <p className="font-semibold mb-1">SysAdmin & Infra</p>
            <p>Linux/Windows Admin, iptables, MS SQL, Cisco Packet Tracer</p>
          </div>
          <div className="md:col-span-2">
            <p className="font-semibold mb-1">AI & Automation</p>
            <p>Exploring AI-powered security tooling & automation scripts.</p>
          </div>
        </div>
      </Section>
      <Section title="Education">
        <div className="card text-xs space-y-2">
          <p><strong>Edith Cowan University</strong> – BSc Computer Science (Cybersecurity), 3rd Year</p>
          <p><strong>Edith Cowan College</strong> – Diploma in Computer Science</p>
          <p><strong>Australian College of Business and Technology</strong> – Foundation of Computing</p>
          <p><strong>Lyceum International School</strong> – Cambridge A-Level & O-Level</p>
          <p><strong>ECC Kandy</strong> – Former student</p>
        </div>
      </Section>
      <Section title="Currently Learning">
        <div className="card text-xs space-y-1">
          <p>CompTIA Security+ certification prep</p>
          <p>Advanced Flutter with Dart</p>
          <p>AI in cybersecurity & secure app architecture</p>
          <p>Reusable components & CI/CD pipelines</p>
        </div>
      </Section>
      <Section title="Developer Goals">
        <div className="card text-xs space-y-1">
          <p>Upload first Flutter app repository</p>
          <p>Share security-focused tools & scripts</p>
          <p>Collaborate on impactful open-source projects</p>
          <p>Build internship-ready portfolio with security edge</p>
        </div>
      </Section>
      <Section title="Technical Skills">
        <div className="card text-xs space-y-1">
          <p>Mobile App Security, Debugging & Troubleshooting, Secure Coding, CI/CD, AI Security Tools, Network Protocols, Documentation</p>
        </div>
      </Section>
      <Section title="A Little About Me">
        <div className="card text-xs space-y-1">
          <p>Fan of Vtuber music, Japanese & Korean tracks.</p>
          <p>Watching Solo Leveling & revisiting classics.</p>
          <p>From Sri Lanka → aspiring journey to Japan blending tech & culture.</p>
        </div>
      </Section>
      <Section title="Contact & Socials">
        <div className="card text-xs space-y-3">
          <p>Email: <a href="mailto:nimuthuganegoda@gmail.com" className="underline">nimuthuganegoda@gmail.com</a></p>
          <div className="flex flex-wrap gap-2">
            {socials.map(s => <Link key={s.label} href={s.url} target="_blank" className="px-2 py-1 rounded bg-brand-100 dark:bg-gray-800">{s.label}</Link>)}
          </div>
        </div>
      </Section>
      <Section title="Note">
        <div className="card text-xs">
          <p>This page mirrors README content. For full CV details from the provided PDF, please supply the raw text so it can be integrated structurally into the site data model (education history, achievements, etc.).</p>
        </div>
      </Section>
    </div>
  );
}