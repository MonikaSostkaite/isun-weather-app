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
                Home page
            </Typography>
        </Box>
    </Container>
);

export default HomePage;
