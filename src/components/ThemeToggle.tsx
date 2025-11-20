"use client";
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read current theme state from DOM (already set by blocking script)
    setDark(document.documentElement.classList.contains('dark'));
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
