import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Main from '../components/Main';
import { vi } from 'vitest';

// Mocking the Typewriter component
vi.mock('../components/utils/Typewriter', () => ({
  __esModule: true,
  default: ({ text, className }: { text: string; className: string }) => (
    <div className={className}>{text}</div>
  ),
}));

describe('Main Component', () => {
  beforeEach(() => {
    render(<Main />);
  });

  it('renders the main title', () => {
    const heading = screen.getByText(
      /All your files in one secure location, accessible anywhere./i
    );
    expect(heading).toBeInTheDocument();
  });

  it('renders the email input form and handles invalid email', async () => {
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByText(/Get Started/i);

    // Simulate user typing an invalid email
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    // Check for error message
    const errorMessage = await screen.findByText(
      'Please enter a valid email address. Nice try though 😏'
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('handles form submission with valid email', async () => {
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByText(/Get Started/i);

    // Simulate user typing a valid email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    // Wait for email submission to happen and check the console log or submit action
    await waitFor(() => {
      // You can mock a console.log here to test or other side effects
      expect(console.log).toHaveBeenCalledWith('Form submitted with:', {
        email: 'test@example.com',
      });
    });
  });

  it('animates image on render', async () => {
    const imageElement = screen.getByAltText('illustration-intro');
    expect(imageElement).toBeInTheDocument();

    // Check if the image starts with "hidden" and transitions to "visible"
    expect(imageElement).toHaveStyle('opacity: 0');
    await waitFor(() => {
      expect(imageElement).toHaveStyle('opacity: 1');
    });
  });

  it('checks for correct button hover animation', async () => {
    const button = screen.getByText(/Get Started/i);
    expect(button).toBeInTheDocument();

    // Check the button initial state (hidden)
    expect(button).toHaveStyle(
      'background-position: 0% 50%; background-size: 200% 100%;'
    );

    // Hover over the button to trigger the animation
    fireEvent.mouseEnter(button);

    // Check if the background-position changes after hover
    await waitFor(() => {
      expect(button).toHaveStyle('background-position: -50% 50%');
    });
  });

  it('renders multiple perks and ensures they are visible', () => {
    const perks = [
      'Access your files, anywhere',
      'Security you can trust',
      'Real-time collaboration',
      'Store any type of file',
    ];

    perks.forEach((perk) => {
      expect(screen.getByText(perk)).toBeInTheDocument();
    });
  });
});
