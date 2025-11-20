import Section from '../../components/Section';
import { cv } from '../../data/cv';
import Image from 'next/image';

export default function ExperiencePage() {
  return (
    <Section title="Experience">
      <div className="space-y-6">
        {cv.experiences.map(exp => (
          <div key={exp.company + exp.role} className="card">
            <div className="flex items-start gap-4 mb-4">
              {exp.company === 'Edith Cowan University' && (
                <Image 
                  src="/NimuthuGanegoda/images/ecu-logo.png" 
                  alt="Edith Cowan University Logo"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              )}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{exp.role} – {exp.company}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{exp.period}</p>
              </div>
            </div>
            <p className="text-sm mb-3 leading-relaxed">{exp.summary}</p>
            <ul className="text-sm list-disc list-inside space-y-1 mb-3">
              {exp.achievements.map(a => <li key={a}>{a}</li>)}
            </ul>
            {exp.tech && (
              <div className="flex flex-wrap gap-2 text-xs">
                {exp.tech.map(t => <span key={t} className="px-2 py-1 bg-brand-100 dark:bg-gray-800 rounded-md">{t}</span>)}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
