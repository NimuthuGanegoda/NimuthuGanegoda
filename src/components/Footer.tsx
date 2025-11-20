import { cv } from '../data/cv';

export default function Footer() {
  const socials = cv.socials || [];

  return (
    <footer className="footer flex flex-col items-center gap-4 py-8">
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        {socials.map(s => (
          <a 
            key={s.name}
            href={s.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            {s.name}
          </a>
        ))}
      </div>
      <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Nimuthu Ganegoda. All rights reserved.</p>
    </footer>
  );
}
