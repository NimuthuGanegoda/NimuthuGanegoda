'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'si' | 'ja' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, any>> = {
  en: require('../../messages/en.json'),
  si: require('../../messages/si.json'),
  ja: require('../../messages/ja.json'),
  de: require('../../messages/de.json'),
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Detect browser language on mount
    const browserLang = navigator.language.toLowerCase();
    let detectedLang: Language = 'en';
    
    if (browserLang.startsWith('si')) detectedLang = 'si';
    else if (browserLang.startsWith('ja')) detectedLang = 'ja';
    else if (browserLang.startsWith('de')) detectedLang = 'de';
    
    // Check localStorage for saved preference
    const saved = localStorage.getItem('language') as Language;
    setLanguageState(saved || detectedLang);
  }, []);

  useEffect(() => {
    // Load Google Translate script
    if (typeof window !== 'undefined' && !(window as any).google?.translate) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = function() {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,si,ja,de',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
      };
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Trigger Google Translate
    if (typeof window !== 'undefined' && (window as any).google?.translate) {
      const frame = document.querySelector('.goog-te-menu-frame') as HTMLIFrameElement;
      if (frame) {
        const langMap: Record<Language, string> = { en: 'en', si: 'si', ja: 'ja', de: 'de' };
        const targetLang = langMap[lang];
        
        // Simulate click on language in Google Translate widget
        setTimeout(() => {
          const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
          if (select) {
            select.value = targetLang;
            select.dispatchEvent(new Event('change'));
          }
        }, 100);
      }
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
