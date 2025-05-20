import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/MotionWrapper', () => {
  return (Component) => Component;
});


test('renders portfolio heading', () => {
  render(<App />);
  const heading = screen.getByText(/Hi, I'm Ashutosh Jare 👋/i);
  expect(heading).toBeInTheDocument();
});

