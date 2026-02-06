// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders evmNebula title', () => {
    render(<App />);
    const titleElement = screen.getByText(/evmNebula/i);
    expect(titleElement).toBeInTheDocument();
});
