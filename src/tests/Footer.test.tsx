import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { act } from 'react-dom/test-utils';
import Footer from '../components/Footer';

// Mocking Framer-Motion (to prevent animation issues)
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
      footer: 'footer',
    },
  };
});

// Mocking image imports (to prevent Vite/Webpack import issues)
vi.mock('./../images/logo.svg', () => ({ default: 'mock-logo' }));
vi.mock('./../images/icon-location.svg', () => ({ default: 'mock-location' }));
vi.mock('./../images/icon-phone.svg', () => ({ default: 'mock-phone' }));
vi.mock('./../images/icon-email.svg', () => ({ default: 'mock-email' }));

// Mocking subcomponents (if they are causing issues)
vi.mock('./../components/utils/FooterSection', () => ({
  default: ({ links }: { links: string[] }) => (
    <div data-testid="footer-section">
      {links.map((link: string) => (
        <a key={link} href="#">
          {link}
        </a>
      ))}
    </div>
  ),
}));

vi.mock('./../components/utils/Facebook', () => ({
  default: () => <div data-testid="facebook-icon"></div>,
}));

vi.mock('./../components/utils/Twitter', () => ({
  default: () => <div data-testid="twitter-icon"></div>,
}));

vi.mock('./../components/utils/Insta', () => ({
  default: () => <div data-testid="insta-icon"></div>,
}));

describe('Footer Component', () => {
  test('renders footer navigation links', async () => {
    await act(async () => {
      render(<Footer />);
    });

    const links: string[] = [
      'About Us',
      'Jobs',
      'Press',
      'Blog',
      'Contact Us',
      'Terms',
      'Privacy',
    ];
    links.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  test('renders social media icons', async () => {
    await act(async () => {
      render(<Footer />);
    });

    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(screen.getByTestId('insta-icon')).toBeInTheDocument();
  });

  test('renders contact details', async () => {
    await act(async () => {
      render(<Footer />);
    });

    expect(screen.getByText('+1-543-123-4567')).toBeInTheDocument();
    expect(screen.getByText('example@fylo.com')).toBeInTheDocument();
  });
});
