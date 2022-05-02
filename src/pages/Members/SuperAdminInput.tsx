import * as React from 'react';
import { Box, Grid, Typography, Divider, TextField, Button, Icon, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';


//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function AddMember() {
    {/*Combo box GENDER*/ }
    const [gender, setGender] = React.useState('');
    const handleChangeGender = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    {/*Combo box ROLES*/ }
    const [role, setRole] = React.useState('');
    const handleChangeRole = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
    };

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}
