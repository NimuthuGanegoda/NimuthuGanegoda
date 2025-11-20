'use client';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-20 right-6 z-40">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as any)}
        className="px-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-sm font-medium shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
        aria-label="Select language"
      >
        <option value="en">🇬🇧 English</option>
        <option value="si">🇱🇰 සිංහල</option>
        <option value="ja">🇯🇵 日本語</option>
        <option value="de">🇩🇪 Deutsch</option>
      </select>
    </div>
  );
}
