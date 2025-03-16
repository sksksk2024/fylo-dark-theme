import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Make sure this is imported
import App from './../App';

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

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    // Check if the app renders by looking for a unique element in the app
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });

  test('renders Header component', () => {
    render(<App />);
    // Verify that the Header component exists in the document
    expect(screen.getByTestId('header')).toBeInTheDocument(); // Add data-testid="main" in Main component
  });

  test('renders Main component', () => {
    render(<App />);
    // Check that Main component is rendered
    expect(screen.getByTestId('main')).toBeInTheDocument(); // Add data-testid="main" in Main component
  });

  test('renders Today component', () => {
    render(<App />);
    // Check if Footer component renders
    expect(screen.getByTestId('footer')).toBeInTheDocument(); // Add data-testid="footer" in Footer component
  });
});
