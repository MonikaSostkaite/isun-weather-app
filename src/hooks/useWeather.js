import axios from 'axios';
import { useState } from 'react';

import { BASE_URL } from '../constants';

export const useWeather = ({ token, city }) => {
    const [error, setError] = useState({
        weather: '',
        cities: '',
    });
    const config = {
        method: 'get',
        headers: {
            Authorization: token,
        },
    };

    const getCityWeather = async () => {
        try {
            const response = await axios({
                ...config,
                url: `${BASE_URL}weathers/${city}`,
            });
            return response?.data;
        } catch (err) {
            setError({
                weather: err,
                cities: '',
            });
            return '';
        }
    };

    const getCities = async () => {
        try {
            const response = await axios({
                ...config,
                url: `${BASE_URL}cities`,
            });
            return response?.data;
        } catch (err) {
            setError({
                weather: '',
                cities: err,
            });
            return [];
        }
    };

    return [error, getCityWeather, getCities];
};
