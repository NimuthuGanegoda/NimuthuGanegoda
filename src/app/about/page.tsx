'use client';
import Section from '../../components/Section';
import ScrollReveal from '../../components/ScrollReveal';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

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
  const { t } = useLanguage();
  
  return (
    <div className="space-y-12">
      <ScrollReveal>
        <Section title={t('about.title')}>
          <div className="card space-y-4 text-sm leading-relaxed">
            <p><strong>{t('about.intro1')}</strong></p>
            <p>{t('about.intro2')}</p>
            <ul className="list-disc list-inside space-y-1">
              <li>{t('about.bullet1')}</li>
              <li>{t('about.bullet2')}</li>
              <li>{t('about.bullet3')}</li>
            </ul>
          </div>
        </Section>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Section title={t('about.techStack')}>
        <div className="card grid md:grid-cols-2 gap-4 text-xs">
          <div>
            <p className="font-semibold mb-1">{t('about.languages')}</p>
            <p>{t('about.languagesText')}</p>
          </div>
          <div>
            <p className="font-semibold mb-1">{t('about.security')}</p>
            <p>{t('about.securityText')}</p>
          </div>
          <div>
            <p className="font-semibold mb-1">{t('about.mobile')}</p>
            <p>{t('about.mobileText')}</p>
          </div>
          <div>
            <p className="font-semibold mb-1">{t('about.sysadmin')}</p>
            <p>{t('about.sysadminText')}</p>
          </div>
          <div className="md:col-span-2">
            <p className="font-semibold mb-1">{t('about.ai')}</p>
            <p>{t('about.aiText')}</p>
          </div>
        </div>
      </Section>
      </ScrollReveal>
      <ScrollReveal delay={200}>
      <Section title={t('about.education')}>
        <div className="card text-xs space-y-2">
          <p>{t('about.edu1')}</p>
          <p>{t('about.edu2')}</p>
          <p>{t('about.edu3')}</p>
          <p>{t('about.edu4')}</p>
          <p>{t('about.edu5')}</p>
        </div>
      </Section>
      </ScrollReveal>
      <ScrollReveal delay={300}>
      <Section title={t('about.currentlyLearning')}>
        <div className="card text-xs space-y-1">
          <p>{t('about.learning1')}</p>
          <p>{t('about.learning2')}</p>
          <p>{t('about.learning3')}</p>
        </div>
      </Section>
      </ScrollReveal>
      <ScrollReveal delay={400}>
      <Section title={t('about.developerGoals')}>
        <div className="card text-xs space-y-1">
          <p>{t('about.goal1')}</p>
          <p>{t('about.goal2')}</p>
          <p>{t('about.goal3')}</p>
          <p>{t('about.goal4')}</p>
        </div>
      </Section>
      </ScrollReveal>
      <ScrollReveal delay={500}>
      <Section title={t('about.technicalSkills')}>
        <div className="card text-xs space-y-1">
          <p>{t('about.skillsText')}</p>
        </div>
      </Section>
      </ScrollReveal>
      <ScrollReveal delay={600}>
      <Section title={t('about.aboutMe')}>
        <div className="card text-xs space-y-2">
          <p>{t('about.interest1')}</p>
          <p>{t('about.interest2')}</p>
          <p>{t('about.interest3')}</p>
          <p>{t('about.interest4')}</p>
          <p>{t('about.interest5')}</p>
          <p>{t('about.interest6')}</p>
        </div>
      </Section>
      </ScrollReveal>
      <ScrollReveal delay={700}>
      <Section title={t('about.contactSocials')}>
        <div className="card text-xs space-y-3">
          <p>{t('about.email')} <a href="mailto:nimuthuganegoda@gmail.com" className="underline">nimuthuganegoda@gmail.com</a></p>
          <div className="flex flex-wrap gap-2">
            {socials.map(s => <Link key={s.label} href={s.url} target="_blank" className="px-2 py-1 rounded bg-brand-100 dark:bg-gray-800">{s.label}</Link>)}
          </div>
        </div>
      </Section>
      </ScrollReveal>
      <ScrollReveal delay={800}>
      <Section title={t('about.note')}>
        <div className="card text-xs">
          <p>{t('about.noteText')}</p>
        </div>
      </Section>
      </ScrollReveal>
    </div>
  );
}