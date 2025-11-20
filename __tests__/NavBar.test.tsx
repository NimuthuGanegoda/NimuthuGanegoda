import { render, screen } from '@testing-library/react';
import NavBar from '../src/components/NavBar';
import '@testing-library/jest-dom';

jest.mock('next/link', () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

describe('NavBar', () => {
  it('renders navigation links', () => {
    render(<NavBar />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    const links = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact', 'Privacy'];
    links.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
