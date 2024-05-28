import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to SwiftCoach heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to SwiftCoach/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders Set Up Profile link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Set Up Profile/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders View Training Plan link', () => {
  render(<App />);
  const linkElement = screen.getByText(/View Training Plan/i);
  expect(linkElement).toBeInTheDocument();
});
