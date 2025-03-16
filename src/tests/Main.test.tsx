import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import Main from '../components/Main';

global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
  root = null;
  rootMargin = '';
  thresholds = [];
} as unknown as typeof IntersectionObserver;

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
  test('renders without crashing', () => {
    render(<Main />);
    expect(screen.getByTestId('main')).toBeInTheDocument();
  });

  test('renders images correctly', () => {
    render(<Main />);
    const pers1 = screen.getByAltText('person 1');
    const pers2 = screen.getByAltText('person 1');
    const pers3 = screen.getByAltText('person 1');

    expect(pers1).toBeInTheDocument();
    expect(pers2).toBeInTheDocument();
    expect(pers3).toBeInTheDocument();
  });

  test('renders input field', () => {
    render(<Main />);
    const input = screen.getByPlaceholderText(
      'email@example.com'
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test@example.com' } });

    expect(input.value).toBe('test@example.com');
  });

  test('displays error when an invalid email is entered', () => {
    render(<Main />);

    const emailInput = screen.getByPlaceholderText('email@example.com'); // Ensure the label is defined for the email field
    const submitButton = screen.getByText('Get Started For Free');

    // Type an invalid email
    fireEvent.change(emailInput, { target: { value: 'alex@gmail' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Check if the error message is displayed
    const errorMessage = screen.getByTestId('invalid-email');
    expect(errorMessage).toBeInTheDocument();
  });

  test('does not display error when a valid email is entered', () => {
    render(<Main />);

    const emailInput = screen.getByPlaceholderText('email@example.com');
    const submitButton = screen.getByText('Get Started For Free');

    // Type a valid email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Check that the error message is not displayed
    const errorMessage = screen.queryByText(
      'Please enter a valid email address. Nice try though 😏'
    );
    expect(errorMessage).not.toBeInTheDocument();
  });
});
