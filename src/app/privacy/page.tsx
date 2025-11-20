"use client";
import Section from '../../components/Section';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PrivacyPage() {
  const { t } = useLanguage();
  return (
    <Section title={t('privacy.title')}>
      <div className="card space-y-4 text-sm leading-relaxed">
        <p><strong>{t('privacy.intro')}</strong> {t('privacy.introText')}</p>
        <p><strong>{t('privacy.contactForm')}</strong> {t('privacy.contactFormText')}</p>
        <p><strong>{t('privacy.analytics')}</strong> {t('privacy.analyticsText')}</p>
        <p><strong>{t('privacy.cookies')}</strong> {t('privacy.cookiesText')}</p>
      </div>
    </Section>
  );
}
