import './globals.css';
import { Metadata } from 'next';
import NavBar from '../components/NavBar';
import SkipLink from '../components/SkipLink';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import StructuredData from '../components/StructuredData';
import Analytics from '../components/Analytics';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Nimuthu Ganegoda | Portfolio',
    template: '%s | Nimuthu Ganegoda'
  },
  description: 'Official portfolio and CV site for Nimuthu Ganegoda.',
  keywords: ['Nimuthu', 'Ganegoda', 'Software Engineer', 'Portfolio', 'CV'],
  authors: [{ name: 'Nimuthu Ganegoda' }],
  creator: 'Nimuthu Ganegoda',
  // Update to actual deployment URL (GitHub Pages project path)
  metadataBase: new URL('https://nimuthuganegoda.github.io/NimuthuGanegoda'),
  openGraph: {
    title: 'Nimuthu Ganegoda | Portfolio',
    description: 'Professional experience, projects, skills and contact information.',
    type: 'website',
    locale: 'en_US'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`sakura-bg min-h-screen flex flex-col bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100 transition-colors ${inter.variable} font-sans`}>
        <SkipLink />
        <NavBar />
        <main id="main" className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <ThemeToggle />
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
