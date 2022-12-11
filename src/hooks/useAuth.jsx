import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from './useLocalStorage';

const baseURL = 'https://weather-api.isun.ch/api/';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useLocalStorage({ keyName: 'token', defaultValue: null });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onLogin = async ({ username, password }) => {
        axios
            .post(
                `${baseURL}authorize`,
                {
                    username,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'text/plain',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': true,
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                }
            )
            .then(({ data }) => {
                setToken(data.token);
                navigate('/dashboard/profile');
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    setError('Account does not exists with such user');
                } else {
                    setError(err?.message);
                }
            });
    };

    const onLogout = () => {
        setToken(null);
        setError(null);
        navigate('/', { replace: true });
    };

    const value = useMemo(
        () => ({
            token,
            error,
            onLogin,
            onLogout,
        }),
        [token, error]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const useAuth = () => useContext(AuthContext);
