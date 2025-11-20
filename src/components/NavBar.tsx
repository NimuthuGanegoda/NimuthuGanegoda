"use client";
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' }
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-gray-200/50 dark:border-gray-800/50" role="banner">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12">
        <Link href="/" className="font-medium text-gray-900 dark:text-gray-100 text-xl" aria-label="Home">
          <span className="sr-only">Home</span>
        </Link>
        <nav className="hidden md:flex gap-8" aria-label="Main navigation">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </nav>
        <button aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" className="md:hidden text-gray-900 dark:text-gray-100" onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-200/50 dark:border-gray-800/50 px-6 py-4 bg-white dark:bg-black" role="navigation" aria-label="Mobile navigation">
          <nav className="flex flex-col gap-4">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
