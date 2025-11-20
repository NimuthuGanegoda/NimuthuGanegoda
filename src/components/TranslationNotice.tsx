'use client';
import { useLanguage } from '../contexts/LanguageContext';

export default function TranslationNotice() {
  const { language } = useLanguage();

  if (language === 'en') return null;

  const messages = {
    si: 'ස්වයංක්‍රීය පරිවර්තනය සක්‍රිය කර ඇත. සම්පූර්ණ අන්තර්ගතය පරිවර්තනය කිරීමට ඔබේbrowser පරිවර්තන විශේෂාංගය භාවිතා කරන්න.',
    ja: '自動翻訳が有効になっています。完全なコンテンツを翻訳するには、ブラウザの翻訳機能を使用してください。',
    de: 'Automatische Übersetzung aktiviert. Verwenden Sie die Übersetzungsfunktion Ihres Browsers für vollständige Inhalte.'
  };

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
      <p className="text-sm text-blue-800 dark:text-blue-200">
        ℹ️ {messages[language as keyof typeof messages]}
      </p>
    </div>
  );
}
