import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import LoginPage from './LoginPage';
import { AuthContext } from '../../hooks/useAuth';

const USERNAME_LABEL = 'Username *';
const PASSWORD_LABEL = 'Password *';
const LOGIN_BUTTON = 'logIn';
const USERNAME = 'isun';
const PASSWORD = 'passwrod';

describe('LoginPage', () => {
    const onLogin = jest.fn();
    const token = 'test';

    const value = {
        token,
        onLogin,
        onLogout: jest.fn(),
    };

    test('render login form and check if username, password and login button exists', () => {
        render(
            <AuthContext.Provider value={value}>
                <LoginPage />
            </AuthContext.Provider>
        );

        const usernameInput = screen.getByLabelText(USERNAME_LABEL);
        const passwordInput = screen.getByLabelText(PASSWORD_LABEL);
        const logInButton = screen.getByTestId(LOGIN_BUTTON);

        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(logInButton).toBeInTheDocument();
    });

    test('render login form, fill required fields and submit', () => {
        render(
            <AuthContext.Provider value={value}>
                <LoginPage />
            </AuthContext.Provider>
        );

        const usernameInput = screen.getByLabelText(USERNAME_LABEL);
        const passwordInput = screen.getByLabelText(PASSWORD_LABEL);
        const logInButton = screen.getByTestId(LOGIN_BUTTON);

        expect(usernameInput).toHaveValue('');
        userEvent.type(usernameInput, USERNAME);
        expect(usernameInput).toHaveValue(USERNAME);

        expect(passwordInput).toHaveValue('');
        userEvent.type(passwordInput, PASSWORD);
        expect(passwordInput).toHaveValue(PASSWORD);

        userEvent.click(logInButton);
        expect(onLogin).toHaveBeenCalledWith({
            username: USERNAME,
            password: PASSWORD,
        });
    });
});
