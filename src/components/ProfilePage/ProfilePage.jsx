import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Person from '@mui/icons-material/Person';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useAuth } from '../../hooks/useAuth';
import { DEFAULT_CITY } from '../../constants';
import { useWeather } from '../../hooks/useWeather';
import WeatherCard from '../WeatherCard/WeatherCard';
import CitiesAutocomplete from '../CitiesAutocomplete/CitiesAutocomplete';

const ProfilePage = () => {
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState(DEFAULT_CITY);
    const [cities, setCities] = useState([]);
    const { token } = useAuth();
    const [error, getCityWeather, getCities] = useWeather({ token, city });

    useEffect(() => {
        (async () => {
            const loadedCities = await getCities();
            setCities(loadedCities);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const weatherData = await getCityWeather();
            setWeather(weatherData);
        })();
    }, [city]);

    const handleChange = (event, value) => {
        event.preventDefault();
        if (value) {
            setCity(value);
        } else {
            setCity(DEFAULT_CITY);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    mt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <Person />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Profile Page
                </Typography>
                {!error.weather ? (
                    <div>
                        <WeatherCard weather={weather} />
                        <CitiesAutocomplete onChange={handleChange} options={cities} />
                    </div>
                ) : (
                    <div>Error loading weather data</div>
                )}
            </Box>
        </Container>
    );
};

export default ProfilePage;
