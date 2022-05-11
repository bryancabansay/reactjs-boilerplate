import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import { AppBar, FormLabel } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';



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



export const ForgotPassword: React.FC = () => {


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
                <AppBar
                    position="absolute"

                    elevation={0}
                    sx={{
                        position: 'relative',
                        background: '#A72A17',
                        borderBottom: (t) => `1px solid ${t.palette.divider}`,
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>

                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    sx={{
                        marginTop: 5,
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
                    <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
                        Forgot Password?
                    </Typography>
                    <Typography component="div" sx={{mt: 2}} textAlign='center'>
                        Enter your email address and we'll send you a link to reset your password.
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }}>
                        <Typography component={FormLabel}>
                            Email address
                        </Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="emailAddress"
                            name="emailAddress"
                            autoComplete="emailAddress"
                            autoFocus
                            placeholder='Your email address'
                        />

                        <Button
                            component={Link}
                            to='/'
                            type="submit"
                            fullWidth
                            startIcon={<SendIcon/>}
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: '#A72A17', borderRadius: 20 }}
                        >
                            Send
                        </Button>                        
                    </Box>
                </Box>
            </Grid>

        </ThemeProvider>
    );
}


