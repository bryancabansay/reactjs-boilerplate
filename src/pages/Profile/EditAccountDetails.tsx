import { Box, Grid, Typography, Divider, TextField, Button, Icon, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { genders } from '../../data/ComboBoxData';

//ComboBox Data

export default function EditAccountDetails() {
    const navigate = useNavigate();

    const [gender, setGender] = React.useState<string[]>([]);
    const handleChangeGender = (event: SelectChangeEvent<typeof gender>) => {
        const {
            target: { value },
        } = event;
        setGender(
            typeof value === 'string' ? value.split(',') : value,
        );
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
                            <Button
                                variant="contained"
                                startIcon={<ArrowBackIcon />}
                                sx={{ mt: 3, width: 120, bgcolor: '#A72A17', borderRadius: 20 }}
                                onClick={() => navigate(-1)}>
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <Divider variant="fullWidth" />
                        </Grid>

                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                        <Typography component={InputLabel} required>
                                First Name
                            </Typography>
                            <TextField variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                        <Typography component={InputLabel}>
                                Middle Name
                            </Typography>
                            <TextField variant="outlined" fullWidth />

                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                        <Typography component={InputLabel} required>
                                Last Name
                            </Typography>
                            <TextField variant="outlined" fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                Gender
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    id="gender"
                                    value={gender}
                                    onChange={handleChangeGender}
                                    displayEmpty
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em>Select</em>;
                                        }
                                        return selected.join(', ');
                                    }}
                                >
                                    {genders.map(({ gender }) => (
                                        <MenuItem
                                            value={gender}
                                        >{gender}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                        <Typography component={InputLabel} required>
                                Contact Number
                            </Typography>
                            <TextField variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                        <Typography component={InputLabel} required>
                                Email Address
                            </Typography>
                            <TextField variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} />
                        <Grid item xs={12} />
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
