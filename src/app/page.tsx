import Section from '../components/Section';
import { cv } from '../data/cv';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Apple Style */}
      <section className="hero-section fade-in">
        <div className="max-w-5xl mx-auto text-center px-6">
          {cv.photo && (
            <div className="mb-8 flex justify-center">
              <Image
                src={cv.photo}
                alt={`${cv.name} profile photo`}
                width={180}
                height={180}
                className="rounded-full object-cover ring-4 ring-gray-200 dark:ring-gray-800 shadow-2xl"
                priority
              />
            </div>
          )}
          <h1 className="apple-headline mb-6">{cv.name}</h1>
          <p className="apple-subheadline mb-12">{cv.title}</p>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            {cv.summary}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/cv" className="btn-primary">View CV</Link>
            <Link href="/projects" className="btn-secondary">See Projects</Link>
          </div>
        </div>
      </section>

      {/* Currently Learning */}
      {cv.currentlyLearning && cv.currentlyLearning.length > 0 && (
        <Section title="Currently Learning">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {cv.currentlyLearning.map((item, idx) => (
              <div key={idx} className="card text-center">
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100">{item}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Goals */}
      {cv.goals && cv.goals.length > 0 && (
        <Section title="Developer Goals">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cv.goals.map((goal, idx) => (
              <div key={idx} className="card">
                <div className="text-4xl mb-4">🎯</div>
                <p className="text-base text-gray-700 dark:text-gray-300">{goal}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Skills Grid */}
      <Section title="Technical Skills">
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cv.skills.map(group => (
            <div key={group.category} className="card">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">{group.category}</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {group.items.map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-blue-600 dark:text-blue-400">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
