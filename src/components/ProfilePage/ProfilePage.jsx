import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Person from '@mui/icons-material/Person';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ProfilePage = () => (
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
        </Box>
    </Container>
);

export default ProfilePage;
