import { Box, Grid, Typography, Divider, TextField, Button } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';


export default function Profile() {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: 'transparent',
                    my: 1,
                    mx: 3,
                    px: 2,
                    pt: 0,
                    pb: 2,
                }}
            >
                <React.Fragment>
                    <Grid container spacing={1}>
                        <Grid item xs={7} sx={{ mt: 4, mb: 0 }}>
                            <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                                Account
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <Divider variant="fullWidth" />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Username
                            </Typography>
                            <TextField size='small' variant="outlined" disabled />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Role
                            </Typography>
                            <TextField size='small' variant="outlined" disabled />

                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Password
                            </Typography>
                            <TextField size='small' variant="outlined" disabled />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                sx={{ mt: 3, mb: 2, width: 300, bgcolor: '#A72A17', borderRadius: 20 }}
                                component={Link} to='changePassword'
                            >
                                Change Password
                            </Button>
                        </Grid>


                        <Grid item xs={7} sx={{ mt: 4, mb: 0 }}>
                            <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                                Details
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <Divider variant="fullWidth" />
                        </Grid>

                        <Grid item xs={12} sm={2} mr={3}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Full Name
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2} mr={3}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Birthday
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />

                        </Grid>
                        <Grid item xs={12} sm={2} mr={3}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Gender
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} mr={85}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Address
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2} mr={3}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Contact Number
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />

                        </Grid>
                        <Grid item xs={12} sm={2} mr={3}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Email Address
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                sx={{ mt: 3, mb: 2, width: 300, bgcolor: '#A72A17', borderRadius: 20 }}
                            >
                                Edit Details
                            </Button>
                        </Grid>
                    </Grid>
                </React.Fragment>
            </Box>
        </Box>
    );
}
