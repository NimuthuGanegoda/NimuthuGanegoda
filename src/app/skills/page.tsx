"use client";
import Section from '../../components/Section';
import { cv } from '../../data/cv';
import { useState, useMemo } from 'react';

export default function SkillsPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cv.skills;
    return cv.skills
      .map(group => ({
        ...group,
        items: group.items.filter(i => i.toLowerCase().includes(q))
      }))
      .filter(g => g.items.length > 0);
  }, [query]);

  return (
    <Section title="Skills">
      <div className="mb-6 flex flex-col gap-2 max-w-sm">
        <label className="text-xs font-medium" htmlFor="skill-filter">Filter Skills</label>
        <input
          id="skill-filter"
          className="input"
          placeholder="Type to filter (e.g. react)"
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-describedby="skill-filter-help"
        />
        <span id="skill-filter-help" className="text-[10px] text-gray-500 dark:text-gray-400">Filtering is client-side; clear input to reset.</span>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(group => (
          <div key={group.category} className="card" aria-label={`Skill group ${group.category}`}>
            <h3 className="font-semibold mb-2">{group.category}</h3>
            <ul className="text-sm list-disc list-inside space-y-1">
              {group.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm col-span-full">No skills match "{query}".</p>
        )}
      </div>
    </Section>
  );
}
