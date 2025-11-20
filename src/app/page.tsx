import Section from '../components/Section';
import { cv } from '../data/cv';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <Section title="Welcome">
        <div className="card">
          {cv.photo && (
            <div className="mb-6 flex items-center gap-4">
              <Image
                src={cv.photo}
                alt={`${cv.name} profile photo`}
                width={128}
                height={128}
                className="rounded-full object-cover ring-2 ring-brand-200 dark:ring-brand-800"
                priority
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold m-0">{cv.name}</h1>
                <p className="text-lg font-medium m-0">{cv.title}</p>
              </div>
            </div>
          )}
          {!cv.photo && (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{cv.name}</h1>
              <p className="text-lg font-medium mb-4">{cv.title}</p>
            </>
          )}
          <p className="max-w-2xl mb-4 text-sm leading-relaxed">{cv.summary}</p>
          <div className="flex flex-wrap gap-3 text-sm mb-4">
            <span className="px-3 py-1 rounded-full bg-brand-100 dark:bg-gray-800">{cv.location}</span>
            <a href={`mailto:${cv.email}`} className="px-3 py-1 rounded-full bg-brand-100 dark:bg-gray-800">{cv.email}</a>
            {cv.website && <a href={cv.website} target="_blank" rel="noopener" className="px-3 py-1 rounded-full bg-brand-100 dark:bg-gray-800">Website</a>}
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="text-xs font-semibold mb-1 uppercase tracking-wide">Focus</p>
              <p className="text-xs leading-relaxed">Mobile App Security, Network Protocols, Secure Coding Practices.</p>
            </div>
            <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="text-xs font-semibold mb-1 uppercase tracking-wide">Strengths</p>
              <p className="text-xs leading-relaxed">Flutter, Python, Debugging & Troubleshooting.</p>
            </div>
            <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <p className="text-xs font-semibold mb-1 uppercase tracking-wide">Learning</p>
              <p className="text-xs leading-relaxed">{cv.currentlyLearning?.slice(0, 2).join(' • ')}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cv" className="btn-primary">View CV</Link>
          </div>
          {cv.goals && (
            <div className="mt-8 text-xs">
              <p className="font-semibold mb-1">Goals:</p>
              <ul className="list-disc list-inside space-y-1">
                {cv.goals.slice(0, 3).map(g => <li key={g}>{g}</li>)}
              </ul>
            </div>
          )}
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
