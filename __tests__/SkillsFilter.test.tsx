import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillsPage from '../src/app/skills/page';

jest.mock('next/link', () => ({ children, href }: any) => <a href={href}>{children}</a>);

describe('Skills filter', () => {
  it('filters skills when typing query', () => {
    render(<SkillsPage />);
    const input = screen.getByPlaceholderText(/Type to filter/i);
    fireEvent.change(input, { target: { value: 'react' } });
    // react not in placeholder data -> expect no groups or message
    expect(screen.getByText(/No skills match/)).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '' } });
    expect(screen.queryByText(/No skills match/)).not.toBeInTheDocument();
  });
});
