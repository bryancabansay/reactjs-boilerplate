import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { bgcolor } from '@mui/system';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";



//For editing default colors
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: '#00000',
            light: '#fc636b',
            dark: '#990033',
        },
    },
});



export const SignIn: React.FC = () => {


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };


    return (
        <ThemeProvider theme={theme}>
            <Grid container justifyContent="center">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: 'background.paper',
                        boxShadow: 2,
                        borderRadius: 5,
                        px: 1,
                        p: 8,
                        width: 500,
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#A72A17' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
                        Welcome
                    </Typography>
                    <Typography component="div">
                        Please login to
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            helperText="Incorrect username."
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            color='primary'
                        />

                        <Button
                            component={Link}
                            to='/Menu'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: '#A72A17', borderRadius: 20 }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to={''}>
                                    <Typography variant="body2">
                                        Forgot password?
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <nav>
                                    <Link to={"./Registration"}>
                                        <Typography variant="body2">
                                            {"Sign Up"}
                                        </Typography>
                                    </Link>
                                </nav>

                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>

        </ThemeProvider>
    );
}


