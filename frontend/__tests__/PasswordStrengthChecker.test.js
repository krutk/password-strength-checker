import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PasswordStrengthChecker from '../src/components/PasswordStrengthChecker';

describe('PasswordStrengthChecker', () => {
  test('renders PasswordStrengthChecker component', () => {
    render(<PasswordStrengthChecker />);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    expect(passwordInput).toBeInTheDocument();
  });

  test('toggles password visibility', () => {
    render(<PasswordStrengthChecker />);
    const toggleButton = screen.getByRole('button', { name: "" });


    fireEvent.click(toggleButton);

    const passwordInput = screen.getByPlaceholderText(/Password/i);
    expect(passwordInput).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute('type', 'password');
  });

});
