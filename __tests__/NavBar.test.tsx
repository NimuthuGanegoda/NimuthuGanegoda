import { render, screen } from '@testing-library/react';
import NavBar from '../src/components/NavBar';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import '@testing-library/jest-dom';

jest.mock('next/link', () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

describe('NavBar', () => {
  it('renders navigation links', () => {
    render(
      <LanguageProvider>
        <NavBar />
      </LanguageProvider>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
    // New links in the redesigned single-page portfolio
    const links = ['About', 'Projects', 'Experience', 'Contact', 'CV'];
    links.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
