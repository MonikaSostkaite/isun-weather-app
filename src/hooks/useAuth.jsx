import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from './useLocalStorage';

const baseURL = 'https://weather-api.isun.ch/api/';

axios.create({
    baseURL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
    },
});

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useLocalStorage({ keyName: 'token', defaultValue: null });
    const navigate = useNavigate();

    const login = async ({ username, password }) => {
        axios
            .post(`${baseURL}authorize`, {
                username,
                password,
            })
            .then(({ data }) => {
                setToken(data.token);
                navigate('/dashboard/profile');
            })
            .catch((error) => {
                console.log('error', error, error.message);
            });
    };

    const logout = () => {
        setToken(null);
        navigate('/', { replace: true });
    };

    const value = useMemo(
        () => ({
            token,
            login,
            logout,
        }),
        [token]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export const useAuth = () => useContext(AuthContext);
