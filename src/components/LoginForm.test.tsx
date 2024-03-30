// Import everything needed for the test
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import { AuthProvider } from '../utils/AuthContext';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('LoginForm Component', () => {
  beforeEach(() => {
    // Reset the mockNavigate before each test
    mockNavigate.mockReset();
  });

  it('renders the login form and handles login', async () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </AuthProvider>,
    );

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: /Log In/i });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, 'password');
    });

    // Click the submit button
    await userEvent.click(submitButton);

    // Wait for the button text to change to "Logging In..."
    await waitFor(() => {
      expect(submitButton.textContent).toBe('Logging In...');
    });

    // Check if useNavigate was called with the expected path
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/clients');
    });
  });
});
