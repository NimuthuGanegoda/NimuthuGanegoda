import { ReactNode } from 'react';

export default function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
