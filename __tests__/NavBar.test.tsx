import { render, screen } from '@testing-library/react';
import NavBar from '../src/components/NavBar';
import '@testing-library/jest-dom';

jest.mock('next/link', () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

describe('NavBar', () => {
  it('renders site title and links', () => {
    render(<NavBar />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Nimuthu Ganegoda' })).toBeInTheDocument();
    const links = ['Home', 'Experience', 'Projects', 'Skills', 'Contact', 'Privacy'];
    links.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
