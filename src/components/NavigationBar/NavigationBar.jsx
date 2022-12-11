import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useAuth } from '../../hooks/useAuth';

const NavigationBar = ({ pages }) => {
    const navigate = useNavigate();
    const { token, onLogout } = useAuth();

    const handlePageLinkClick = (path) => {
        if (path) {
            navigate(path);
        }
    };

    return (
        <MuiAppBar position="static">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Isun
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages?.map((page) => (
                            <Button
                                key={page.label}
                                onClick={() => handlePageLinkClick(page.path)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.label}
                            </Button>
                        ))}
                        {!!token && (
                            <Button
                                key="logout"
                                onClick={onLogout}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Logout
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </MuiAppBar>
    );
};

NavigationBar.propTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            path: PropTypes.string,
        })
    ).isRequired,
};

export default NavigationBar;
