/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';

const CitiesAutocomplete = ({ onChange, options }) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '300px', mt: 8 }}>
        <Typography sx={{ flex: '0 0 100%' }} fontSize="lg" fontWeight="lg">
            Search city to check weather
        </Typography>
        <Autocomplete
            disablePortal
            id="cities-autocomplete"
            options={options}
            sx={{ flex: '0 0 100%', mt: 1 }}
            renderInput={(params) => <TextField {...params} label="City" />}
            onChange={onChange}
        />
    </Box>
);

CitiesAutocomplete.propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CitiesAutocomplete;
