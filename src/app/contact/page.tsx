"use client";
import Section from '../../components/Section';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();
    if (!name || !email || !message) {
      setStatus(t('contact.fillAllFields'));
      setLoading(false);
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
          setStatus(t('contact.formspreeError'));
          setLoading(false);
          return;
        }
        setStatus(t('contact.messageSentFormspree'));
        form.reset();
        setLoading(false);
      } catch {
        setStatus(t('contact.networkErrorFormspree'));
        setLoading(false);
      }
      return;
    } else if (isStatic) {
      setStatus(t('contact.staticDisabled'));
      form.reset();
      setLoading(false);
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
        setStatus(typeof json.error === 'string' ? json.error : t('contact.validationError'));
        setLoading(false);
        return;
      }
      setStatus(t('contact.messageSent'));
      form.reset();
      setLoading(false);
    } catch (err) {
      setStatus(t('contact.networkError'));
      setLoading(false);
    }
  }

  return (
    <Section title={t('contact.title')}>
      <div className="card max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">{t('contact.name')}</label>
            <input id="name" name="name" className="input" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">{t('contact.email')}</label>
            <input id="email" name="email" type="email" className="input" required />
          </div>
            <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">{t('contact.message')}</label>
            <textarea id="message" name="message" rows={5} className="input" required />
          </div>
          <button className="btn-primary" type="submit" disabled={loading}>{loading ? t('contact.sending') : t('contact.send')}</button>
          {status && <p className="text-xs mt-2" aria-live="polite">{status}</p>}
          <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">{t('contact.staticNote')}</p>
        </form>
      </div>
    </Section>
  );
}
