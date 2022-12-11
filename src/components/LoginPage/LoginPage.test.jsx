import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import LoginPage from './LoginPage';
import { AuthContext } from '../../hooks/useAuth';

test('render login form, fill required fields and submit', () => {
    const login = jest.fn();
    const token = 'test';

    const value = {
        token,
        login,
        logout: jest.fn(),
    };

    render(
        <AuthContext.Provider value={value}>
            <LoginPage />
        </AuthContext.Provider>
    );

    const usernameInput = screen.getByLabelText('Username *');
    const passwordInput = screen.getByLabelText('Password *');
    const logInButton = screen.getByTestId('logIn');
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(usernameInput).toHaveValue('');
    userEvent.type(usernameInput, 'isun');

    expect(usernameInput).toHaveValue('isun');
    userEvent.tab();

    userEvent.type(passwordInput, 'passwrod');
    userEvent.tab();

    userEvent.click(logInButton);
    expect(login).toHaveBeenCalledWith({
        username: 'isun',
        password: 'passwrod',
    });
});
