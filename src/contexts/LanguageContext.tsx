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

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
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
