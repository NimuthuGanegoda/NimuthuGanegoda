import Section from '../../components/Section';
import { cv } from '../../data/cv';
import Link from 'next/link';
import Image from 'next/image';
import githubRepos from '../../data/github_repos.json';

export default function ProjectsPage() {
  // Filter out Flutter (not my work) and NimuthuGanegoda profile repo (this website)
  const filteredRepos = githubRepos.filter(repo => 
    repo.name !== 'flutter' && 
    repo.name !== 'NimuthuGanegoda'
  );

  return (
    <>
      <Section title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {cv.projects.map(p => (
            <div key={p.name} className="card flex flex-col">
              {p.image && (
                <div className="mb-3 aspect-video w-full bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden flex items-center justify-center">
                  <Image
                    src={p.image}
                    alt={`${p.name} preview`}
                    width={640}
                    height={360}
                    className="object-contain p-4"
                    priority
                  />
                </div>
              )}
              <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
              <p className="text-sm leading-relaxed mb-3">{p.description}</p>
              <ul className="text-xs list-disc list-inside space-y-1 mb-3">
                {p.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
              <div className="flex flex-wrap gap-2 text-xs mb-3">
                {p.stack.map(s => <span key={s} className="px-2 py-1 bg-brand-100 dark:bg-gray-800 rounded-md">{s}</span>)}
                {p.tags?.map(t => <span key={t} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded-md">#{t}</span>)}
              </div>
              <div className="mt-auto flex flex-wrap gap-3">
                {p.link && <Link href={p.link} target="_blank" rel="noopener" className="btn-primary text-center">Source</Link>}
                {p.demo && <Link href={p.demo} target="_blank" rel="noopener" className="btn-secondary text-center">Live Demo</Link>}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="All GitHub Repos">
        <div className="grid md:grid-cols-2 gap-6">
          {filteredRepos.map(r => (
            <div key={r.name} className="card flex flex-col">
              <h3 className="font-semibold text-lg mb-1">{r.name}</h3>
              <p className="text-sm leading-relaxed mb-3">{r.description}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-3">
                {r.language && <span className="px-2 py-1 bg-brand-100 dark:bg-gray-800 rounded-md">{r.language}</span>}
                {r.topics?.map(t => <span key={t} className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded-md">#{t}</span>)}
              </div>
              <div className="mt-auto flex gap-3">
                <Link href={r.url} target="_blank" rel="noopener" className="btn-primary">Repo</Link>
                {r.homepage && <Link href={r.homepage} target="_blank" rel="noopener" className="btn-secondary">Live</Link>}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
