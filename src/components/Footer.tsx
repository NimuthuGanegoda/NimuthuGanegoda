export default function Footer() {
  const socials = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/nimuthu-ganegoda' },
    { name: 'GitHub', url: 'https://github.com/NimuthuGanegoda' },
    { name: 'Instagram', url: 'https://instagram.com/nimuthumethsenganegoda' },
    { name: 'X (Twitter)', url: 'https://x.com/NimuthuG' },
    { name: 'Discord', url: 'https://discord.gg/ZdbHjfsvKg' },
    { name: 'Email', url: 'mailto:nimuthuganegoda@gmail.com' },
  ];

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
