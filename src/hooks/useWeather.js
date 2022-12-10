import axios from 'axios';

const baseURL = 'https://weather-api.isun.ch/api/';

export const useWeather = ({ token, city }) => {
    const config = {
        method: 'get',
        url: `${baseURL}weathers/${city}`,
        headers: {
            Authorization: token,
        },
    };

    const getCityWeather = async () => {
        try {
            const response = await axios(config);
            return response?.data;
        } catch {
            return '';
        }
    };

    return [getCityWeather];
};
