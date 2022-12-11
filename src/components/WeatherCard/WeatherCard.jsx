import PropTypes from 'prop-types';

import Card from '@mui/joy/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const WeatherCard = ({ weather: { city, summary, temperature, windSpeed, precipitation } }) => (
    <div>
        <Card variant="outlined" sx={{ mt: 5 }}>
            <Typography variant="h4" align="center" sx={{ mb: 0.5, alignContent: 'center' }}>
                {city}
            </Typography>
            <img
                style={{ width: '200px', height: '200px', margin: 'auto' }}
                align="center"
                src={`/media/${summary}.jpg`}
                loading="lazy"
                alt=""
            />
            <Typography variant="h4" align="center" sx={{ alignContent: 'center' }}>
                {temperature}
                {'\u2103'}
            </Typography>
            <Box sx={{ display: 'flex' }}>
                <div>
                    <Typography>Wind speed: {windSpeed}</Typography>
                    <Typography>Precipitation: {precipitation}</Typography>
                </div>
            </Box>
        </Card>
    </div>
);

WeatherCard.propTypes = {
    weather: PropTypes.shape({
        city: PropTypes.string,
        summary: PropTypes.string,
        temperature: PropTypes.number,
        windSpeed: PropTypes.number,
        precipitation: PropTypes.number,
    }).isRequired,
};

export default WeatherCard;
