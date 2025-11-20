import Section from '../../components/Section';

export default function PrivacyPage() {
  return (
    <Section title="Privacy Policy">
      <div className="card space-y-4 text-sm leading-relaxed">
        <p><strong>Intro:</strong> This placeholder privacy policy describes how user data is handled on the site. Replace with your real policy before launch.</p>
        <p><strong>Contact Form:</strong> Messages submitted are not persisted now. If you add a backend or third-party form service, update this section.</p>
        <p><strong>Analytics:</strong> No analytics tools integrated. If adding Google Analytics or similar, disclose collection details.</p>
        <p><strong>Cookies:</strong> Site currently sets no cookies except potential theme preference in localStorage (not a cookie).</p>
      </div>
    </Section>
  );
}
