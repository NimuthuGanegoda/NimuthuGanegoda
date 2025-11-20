import Section from '../components/Section';
import { cv } from '../data/cv';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Section title="Welcome">
        <div className="card">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{cv.name}</h1>
          <p className="text-lg font-medium mb-2">{cv.title}</p>
          <p className="max-w-2xl mb-4 text-sm leading-relaxed">{cv.summary}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-brand-100 dark:bg-gray-800">{cv.location}</span>
            <a href={`mailto:${cv.email}`} className="px-3 py-1 rounded-full bg-brand-100 dark:bg-gray-800">{cv.email}</a>
            {cv.website && <a href={cv.website} target="_blank" rel="noopener" className="px-3 py-1 rounded-full bg-brand-100 dark:bg-gray-800">Website</a>}
          </div>
          <div className="mt-6 flex gap-3">
            <Link href="/experience" className="btn-primary">View Experience</Link>
            <Link href="/projects" className="btn-primary">Projects</Link>
          </div>
        </div>
      </Section>
      <Section title="Key Skills">
        <div className="grid md:grid-cols-3 gap-4">
          {cv.skills.map(group => (
            <div key={group.category} className="card">
              <h3 className="font-semibold mb-2">{group.category}</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                {group.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
