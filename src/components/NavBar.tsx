'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Command } from 'lucide-react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.projects'), href: '/#projects' },
    { name: t('nav.experience'), href: '/#experience' },
    { name: t('nav.contact'), href: '/#contact' },
    { name: 'CV', href: '/cv' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
            <Command className="w-6 h-6 text-black" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase hidden sm:block">
            {t('profile.name').split(' ')[0]}<span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-6 flex items-center gap-4 border-l border-white/10 pl-6">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/5 p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold uppercase tracking-tighter hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-white/5">
            <LanguageSelector />
          </div>
        </nav>
      )}
    </header>
  );
}
