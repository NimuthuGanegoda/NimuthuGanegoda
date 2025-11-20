"use client";
import Section from '../../components/Section';
import { useState } from 'react';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();
    if (!name || !email || !message) {
      setStatus('Please fill all fields.');
      return;
    }
    // Disable API usage when running on GitHub Pages (static export with no server)
    const isStatic = typeof window !== 'undefined' && window.location.hostname.endsWith('github.io');
    // If static and Formspree id provided, submit to Formspree instead of API route
    if (isStatic && FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ name, email, message })
        });
        if (!res.ok) {
          setStatus('Formspree submission failed.');
          return;
        }
        setStatus('Message sent (Formspree).');
        form.reset();
      } catch {
        setStatus('Network error contacting Formspree.');
      }
      return;
    } else if (isStatic) {
      setStatus('Static version: server submission disabled. Add NEXT_PUBLIC_FORMSPREE_ID to enable.');
      form.reset();
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus(typeof json.error === 'string' ? json.error : 'Validation failed.');
        return;
      }
      setStatus('Message sent successfully (logged server-side).');
      form.reset();
    } catch (err) {
      setStatus('Network error. Try again later.');
    }
  }

  return (
    <Section title="Contact">
      <div className="card max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input id="name" name="name" className="input" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" className="input" required />
          </div>
            <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} className="input" required />
          </div>
          <button className="btn-primary" type="submit">Send</button>
          {status && <p className="text-xs mt-2" aria-live="polite">{status}</p>}
          <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Static build: set NEXT_PUBLIC_FORMSPREE_ID for external submission.</p>
        </form>
      </div>
    </Section>
  );
}
