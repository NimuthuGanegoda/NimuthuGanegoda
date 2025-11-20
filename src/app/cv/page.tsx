import { cv } from '../../data/cv';

export const metadata = { title: 'Printable CV' };

export default function CVPage() {
  return (
    <div className="prose dark:prose-invert max-w-none print:pt-0">
      <header className="mb-8">
        <h1 className="m-0">{cv.name}</h1>
        <p className="m-0 text-sm">{cv.title} | {cv.location} | {cv.email}</p>
        {cv.website && <p className="m-0 text-sm"><a href={cv.website}>{cv.website}</a></p>}
      </header>
      <section className="mb-6">
        <h2>Summary</h2>
        <p>{cv.summary}</p>
      </section>
      <section className="mb-6">
        <h2>Experience</h2>
        {cv.experiences.map(exp => (
          <div key={exp.company+exp.role} className="mb-4">
            <strong>{exp.role}</strong> – {exp.company} <span className="text-sm">({exp.period})</span>
            <p className="text-sm leading-relaxed mb-1">{exp.summary}</p>
            <ul className="text-sm m-0">
              {exp.achievements.map(a => <li key={a}>{a}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="mb-6">
        <h2>Projects</h2>
        {cv.projects.map(p => (
          <div key={p.name} className="mb-3">
            <strong>{p.name}</strong>{p.link && <> – <a href={p.link}>Repo</a></>}<br />
            <span className="text-sm">{p.description}</span>
          </div>
        ))}
      </section>
      <section className="mb-6">
        <h2>Skills</h2>
        <ul className="columns-2 text-sm">
          {cv.skills.flatMap(s => s.items).map(item => <li key={item}>{item}</li>)}
        </ul>
      </section>
      <section className="mb-6">
        <h2>Education</h2>
        {cv.education.map(ed => (
          <p key={ed.institution+ed.degree} className="text-sm"><strong>{ed.degree}</strong>, {ed.institution} ({ed.period})</p>
        ))}
      </section>
      <section className="mb-6">
        <h2>Certifications</h2>
        <ul className="text-sm">
          {cv.certifications.map(c => <li key={c.name}>{c.name} – {c.issuer} ({c.year})</li>)}
        </ul>
      </section>
      <button onClick={() => window.print()} className="btn-primary print:hidden">Print / Save as PDF</button>
    </div>
  );
}
