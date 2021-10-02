import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sean Whitehurst', () => {
  render(<App />);
  const name = screen.getByText(/sean/i);
  expect(name).toBeInTheDocument();
});
