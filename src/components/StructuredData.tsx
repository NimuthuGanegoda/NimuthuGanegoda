import { cv } from '../data/cv';

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: cv.name,
    jobTitle: cv.title,
    description: cv.summary,
    url: cv.website || 'https://example.com',
    email: `mailto:${cv.email}`,
    knowsAbout: cv.skills.flatMap(s => s.items),
    worksFor: cv.experiences[0]?.company,
    alumniOf: cv.education.map(e => e.institution)
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
