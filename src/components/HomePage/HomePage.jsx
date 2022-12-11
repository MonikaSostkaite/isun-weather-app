import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Home from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const HomePage = () => (
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
                <Home />
            </Avatar>
            <Typography component="h1" variant="h5">
                Welcome
            </Typography>
            <img
                style={{ width: '400px', height: '400px', margin: '30px auto' }}
                align="center"
                src="/media/weatherForecast.jpg"
                loading="lazy"
                alt=""
            />
            <Typography variant="h5" align="center" sx={{ alignContent: 'center' }}>
                To see weather forecast please login
            </Typography>
        </Box>
    </Container>
);

export default HomePage;
