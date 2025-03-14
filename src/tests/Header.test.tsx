import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { vi } from 'vitest'; // instead of jest -> vi AND requireActual -> importActual
import Header from '../components/Header';

// Mocking Framer-Motion (preventing animation issues)
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual<typeof import('framer-motion')>(
    'framer-motion'
  );
  return {
    ...actual,
    motion: {
      ...actual.motion,
      div: 'div',
      img: 'img',
      header: 'header',
    },
  };
});

describe('Header Component', () => {
  test('renders logo correctly', () => {
    render(<Header />);

    // Ensure logo is in the doc
    const logo = screen.getByAltText('Fylo');
    expect(logo).toBeInTheDocument();
  });

  test('renders nav links', () => {
    render(<Header />);

    const featuresLink = screen.getByText('Features');
    const teamLink = screen.getByText('Team');
    const signInLink = screen.getByText('Sign In');

    expect(featuresLink).toBeInTheDocument();
    expect(teamLink).toBeInTheDocument();
    expect(signInLink).toBeInTheDocument();
  });

  test('applies hover effect on nav links', async () => {
    render(<Header />);
    const user = userEvent.setup();

    const featuresLink = screen.getByText('Features');

    await user.hover(featuresLink);

    expect(featuresLink).toHaveClass('hover:underline hover:text-cyan-500');
  });
});
