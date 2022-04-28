import { Table, TableHead, TableRow, TableCell, TableBody, Box, Grid, Typography, Divider, FormLabel, TextField, Button } from '@mui/material';
import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';


export default function ChangePassword() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'background.paper',
                boxShadow: 2,
                borderRadius: 5,
                my: 2,
                mx: 3,
                px: 5,
                pt: 0,
                pb: 2,
            }}
        >
            <React.Fragment>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={11} sx={{ mt: 4, mb: 0 }}>
                        <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                            Change Password
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={1}>
                        <Button variant="contained" startIcon={<ArrowBackIcon />} sx={{mt: 3, width: 120, bgcolor: '#A72A17', borderRadius: 20}} component={Link} to='/profile'>
                            Back
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <Divider variant="fullWidth" />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="oldpassword"
                            label="Old Password"
                            type="password"
                            id="oldPassword"
                            color='primary'
                        />

                    </Grid>
                    <Grid item xs={9}/>
                    <Grid item xs={3}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="newpassword"
                            label="New Password"
                            type="password"
                            id="newPassword"
                            color='primary'
                        />

                    </Grid>
                    <Grid item xs={9}/>
                    <Grid item xs={3}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmpassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            color='primary'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            sx={{ mt: 3, mb: 2, width: 300, bgcolor: '#A72A17', borderRadius: 20 }}
                        >
                            Update
                        </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        </Box>
    );
}
