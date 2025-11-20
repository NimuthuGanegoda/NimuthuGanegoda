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
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800" role="banner">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <Link href="/" className="font-semibold text-brand-700 dark:text-brand-400" aria-label="Home">Nimuthu Ganegoda</Link>
        <nav className="hidden md:flex gap-1" aria-label="Main navigation">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </nav>
        <button aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" className="md:hidden nav-link" onClick={() => setOpen(o => !o)}>☰</button>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-200 dark:border-gray-800 px-4 pb-4 flex flex-col gap-2" role="navigation" aria-label="Mobile navigation">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
