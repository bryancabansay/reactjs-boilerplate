import { Box, Grid, Typography, Divider, TextField, Button, Icon, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function EditAccountDetails() {

    {/*Combo box GENDER*/ }
    const [gender, setGender] = React.useState('');
    const handleChangeGender = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    return (
        <Box>
            <Box

                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: 'transparent',
                    my: 1,
                    mx: 5,
                    px: 2,
                    pt: 0,
                    pb: 2,
                }}
            >
                <React.Fragment>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={11} sx={{ mt: 4, mb: 0 }}>
                            <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                               Edit Account Details
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Button variant="contained" startIcon={<ArrowBackIcon />} sx={{ mt: 3, width: 120, bgcolor: '#A72A17', borderRadius: 20 }}>
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <Divider variant="fullWidth" />
                        </Grid>

                        <Grid item xs={12} mb={5} />
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <TextField label="First Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <TextField label="Middle Name" variant="outlined" fullWidth />

                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <TextField label="Last Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel required>Gender</InputLabel>
                                <Select
                                    required
                                    id="gender"
                                    label="Gender"
                                    value={gender}
                                    onChange={handleChangeGender}
                                >
                                    <MenuItem value={10}>Male</MenuItem>
                                    <MenuItem value={20}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <TextField label="Contact Number" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <TextField label="Email Address" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}/>
                        <Grid item xs={12}/>
                        <Grid item xs={12}>
                            <Button variant="contained" size='large' sx={{ mt: 10, width: 350, bgcolor: '#A72A17', borderRadius: 20 }}>
                                Update
                            </Button>
                        </Grid>

                    </Grid>
                </React.Fragment>
            </Box>
        </Box>
    );
}
