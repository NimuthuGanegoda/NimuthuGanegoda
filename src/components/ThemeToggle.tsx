"use client";
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const pref = window.localStorage.getItem('theme');
    if (pref === 'dark' || (!pref && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle dark theme"
      className="fixed bottom-4 right-4 btn-primary shadow-lg"
      onClick={() => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle('dark', next);
        window.localStorage.setItem('theme', next ? 'dark' : 'light');
      }}
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
