"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const links = [
  { href: '/', label: 'nav.home' },
  { href: '/about', label: 'nav.about' },
  { href: '/experience', label: 'nav.experience' },
  { href: '/projects', label: 'nav.projects' },
  { href: '/skills', label: 'nav.skills' },
  { href: '/contact', label: 'nav.contact' },
  { href: '/privacy', label: 'nav.privacy' }
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-gray-200/50 dark:border-gray-800/50" role="banner">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12">
        <nav className="hidden md:flex gap-8 flex-1 justify-center" aria-label="Main navigation">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{t(l.label)}</Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="px-2 py-1 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-xs font-medium cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            aria-label="Select language"
          >
            <option value="en">🇬🇧 EN</option>
            <option value="si">🇱🇰 SI</option>
            <option value="ja">🇯🇵 JA</option>
            <option value="de">🇩🇪 DE</option>
          </select>
        </div>
        <button aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" className="md:hidden text-gray-900 dark:text-gray-100" onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-200/50 dark:border-gray-800/50 px-6 py-4 bg-white dark:bg-black" role="navigation" aria-label="Mobile navigation">
          <nav className="flex flex-col gap-4">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setOpen(false)}>{t(l.label)}</Link>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="w-full px-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-sm font-medium cursor-pointer"
                aria-label="Select language"
              >
                <option value="en">🇬🇧 English</option>
                <option value="si">🇱🇰 සිංහල</option>
                <option value="ja">🇯🇵 日本語</option>
                <option value="de">🇩🇪 Deutsch</option>
              </select>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
