import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { act } from 'react';
import Main from '../components/Main';

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
      a: 'a',
      span: 'span',
    },
  };
});

// Mocking image imports (to prevent Vite/Webpack import issues)
vi.mock('./../images/illustration-intro.png');
vi.mock('./../images/icon-access-anywhere.svg');
vi.mock('./../images/icon-security.svg');
vi.mock('./../images/icon-collaboration.svg');
vi.mock('./../images/icon-any-file.svg');
vi.mock('./../images/illustration-stay-productive.png');
vi.mock('./../images/icon-arrow.svg');
vi.mock('./../images/bg-quotes.png');
vi.mock('./../images/profile-1.jpg');
vi.mock('./../images/profile-2.jpg');
vi.mock('./../images/profile-3.jpg');

// Mocking subcomponents
vi.mock('./../components/utils/Typewriter', () => ({
  default: ({ text }: { text: string }) => (
    <p data-testid="typewriter">{text}</p>
  ),
}));

describe('Main Component', () => {
  test('renders typewriter text', async () => {
    await act(async () => {
      render(<Main />);
    });

    expect(screen.getByTestId('typewriter')).toHaveTextContent(
      'Welcome to Our Platform'
    );
  });
});
