import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillsPage from '../src/app/skills/page';
import { LanguageProvider } from '../src/contexts/LanguageContext';

jest.mock('next/link', () => ({ children, href }: any) => <a href={href}>{children}</a>);

describe('Skills filter', () => {
  it('filters skills when typing query', () => {
    render(
      <LanguageProvider>
        <SkillsPage />
      </LanguageProvider>
    );
    const input = screen.getByPlaceholderText(/Type to filter/i);
    fireEvent.change(input, { target: { value: 'reactzzz' } });
    // use a non-existent term to trigger empty state
    expect(screen.getByText(/No skills match/)).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '' } });
    expect(screen.queryByText(/No skills match/)).not.toBeInTheDocument();
  });
});
