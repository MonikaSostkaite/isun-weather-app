/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from '../../hooks/useAuth';

const baseURL = 'https://weather-api.isun.ch/api/';

const CitiesAutocomplete = ({ onChange }) => {
    const { token } = useAuth();
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const config = {
                method: 'get',
                url: `${baseURL}cities`,
                headers: {
                    Authorization: token,
                },
            };
            axios(config)
                .then((response) => {
                    if (active) {
                        setOptions([...response.data]);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            id="cities-autocomplete"
            sx={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            onChange={onChange}
            isOptionEqualToValue={(option, value) => option === value}
            getOptionLabel={(option) => option}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Cities"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
};

CitiesAutocomplete.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default CitiesAutocomplete;
