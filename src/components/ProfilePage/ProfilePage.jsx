import { useEffect, useState } from 'react';

import Card from '@mui/joy/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AspectRatio from '@mui/joy/AspectRatio';
import Person from '@mui/icons-material/Person';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useAuth } from '../../hooks/useAuth';
import { useWeather } from '../../hooks/useWeather';
import CitiesAutocomplete from '../CitiesAutocomplete/CitiesAutocomplete';

const ProfilePage = () => {
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState('Vilnius');
    const { token } = useAuth();
    const [getCityWeather] = useWeather({ token, city });

    useEffect(() => {
        (async () => {
            const weatherData = await getCityWeather();
            setWeather(weatherData);
        })();
    }, [city]);

    const handleChange = (event, value) => {
        event.preventDefault();
        setCity(value);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
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
                <Card variant="outlined" sx={{ width: 320 }}>
                    <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                        {weather.city}
                    </Typography>
                    <Typography level="body2">{weather.summary}</Typography>

                    <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                        <img
                            src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
                    <Box sx={{ display: 'flex' }}>
                        <div>
                            <Typography level="body3">Temp: {weather.temperature}</Typography>
                            <Typography fontSize="lg" fontWeight="lg">
                                Wind speed: {weather.windSpeed}
                            </Typography>
                        </div>
                    </Box>
                </Card>

                <Box sx={{ display: 'flex', marginTop: 10 }}>
                    <div>
                        <Typography fontSize="lg" fontWeight="lg">
                            Search city to check weather
                        </Typography>
                        <CitiesAutocomplete onChange={handleChange} />
                    </div>
                </Box>
            </Box>
        </Container>
    );
};

export default ProfilePage;
