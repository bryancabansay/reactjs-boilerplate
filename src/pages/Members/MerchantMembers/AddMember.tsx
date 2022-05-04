import { Box, Grid, Typography, Divider, TextField, Button, Icon, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function AddMember() {

    {/*Combo box ROLES*/ }
    const [role, setRole] = React.useState('');
    const handleChangeRole = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
    };

    {/*Combo box GENDER*/ }
    const [gender, setGender] = React.useState('');
    const handleChangeGender = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    function createGenderList(
        gender: string,
    ) {
        return { gender };
    }

    const genderList = [
        createGenderList(
            "Male"
        ),
        createGenderList(
            "Female"
        ),
    ];

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
                                Add New Member
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


                        <Grid item xs={12} sm={6} mr={4} sx={{ mb: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel required>Role</InputLabel>
                                <Select
                                    required
                                    id="role"
                                    label="Role"
                                    value={role}
                                    onChange={handleChangeRole}
                                >
                                    <MenuItem value={20}>Merchant Admin</MenuItem>
                                    <MenuItem value={20}>Merchant Staff</MenuItem>
                                </Select>
                            </FormControl>
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
                                     {genderList.map((genderList) => (
                                    <MenuItem value={10}>genderList</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <TextField label="Contact Number" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <TextField label="Email Address" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={3} sx={{ mb: 2 }}>
                            <TextField label="Username" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} />
                        <Grid item xs={12} sm={3} sx={{ mb: 2 }}>
                            <TextField label="Password" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} />
                        <Grid item xs={12} sm={3} sx={{ mb: 2 }}>
                            <TextField label="Confirm Password" variant="outlined" fullWidth required />
                        </Grid>

                    </Grid>
                </React.Fragment>
            </Box>
        </Box>
    );
}
