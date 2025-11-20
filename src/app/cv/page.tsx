"use client";
import { cv } from '../../data/cv';

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
        {cv.projects.filter(p => p.link).map(p => (
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
      {cv.currentlyLearning && cv.currentlyLearning.length > 0 && (
        <section className="mb-6">
          <h2>Currently Learning</h2>
          <ul className="text-sm">
            {cv.currentlyLearning.map(item => <li key={item}>{item}</li>)}
          </ul>
        </section>
      )}
      {cv.goals && cv.goals.length > 0 && (
        <section className="mb-6">
          <h2>Developer Goals</h2>
          <ul className="text-sm">
            {cv.goals.map(g => <li key={g}>{g}</li>)}
          </ul>
        </section>
      )}
      {cv.socials && cv.socials.length > 0 && (
        <section className="mb-8">
          <h2>Socials</h2>
          <p className="text-sm flex flex-wrap gap-3 m-0">
            {cv.socials.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener" className="underline">
                {s.name}
              </a>
            ))}
          </p>
        </section>
      )}
      {cv.references && cv.references.length > 0 && (
        <section className="mb-8">
          <h2>References</h2>
          {cv.references.map(ref => (
            <div key={ref.email} className="mb-3 text-sm">
              <strong>{ref.name}</strong><br />
              {ref.title}, {ref.organization}<br />
              Email: <a href={`mailto:${ref.email}`}>{ref.email}</a> | Phone: {ref.phone}
            </div>
          ))}
        </section>
      )}
      <button onClick={() => window.print()} className="btn-primary print:hidden">Print / Save as PDF</button>
    </div>
  );
}
