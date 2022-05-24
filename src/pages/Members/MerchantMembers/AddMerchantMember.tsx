import { Box, Grid, Typography, Divider, TextField, Button, Icon, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, FormControlLabel } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';

//Combobox Data
import { branches, genders, roles, merchants } from '../../../data/ComboBoxData';


export default function AddMember() {
    const navigate = useNavigate();

    {/*Combo box ROLES*/ }
    const [role, setRole] = React.useState<string[]>([]);
    const handleChangeRole = (event: SelectChangeEvent<typeof role>) => {
        const {
            target: { value },
        } = event;
        setRole(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    {/*Combo box GENDER*/ }
    const [gender, setGender] = React.useState<string[]>([]);
    const handleChangeGender = (event: SelectChangeEvent<typeof gender>) => {
        const {
            target: { value },
        } = event;
        setGender(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    {/*Combo box MERCHANT*/ }
    const [merchant, setMerchant] = React.useState<string[]>([]);
    const handleChangeMerchant = (event: SelectChangeEvent<typeof merchant>) => {
        const {
            target: { value },
        } = event;
        setGender(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    {/*Combo box BRANCH*/ }
    const [branch, setBranch] = React.useState<string[]>([]);
    const handleChangeBranch = (event: SelectChangeEvent<typeof branch>) => {
        const {
            target: { value },
        } = event;
        setBranch(
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
                                Add New Member
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


                        <Grid item xs={12} sm={5} mr={4} sx={{ mb: 2 }}>
                            <Typography paddingTop={1} component={InputLabel} required>
                                Role
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    required
                                    id="role"
                                    value={role}
                                    onChange={handleChangeRole}
                                    displayEmpty
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em>Select</em>;
                                        }
                                        return selected.join(', ');
                                    }}
                                >
                                    {roles.map(({ role }) => (
                                        <MenuItem
                                            value={role}
                                        >{role}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} mb={3}>
                            <Typography paddingTop={1} component={InputLabel} required>
                                Merchant
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    required
                                    id="merchant"
                                    value={merchant}
                                    onChange={handleChangeMerchant}
                                    displayEmpty
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em>Select</em>;
                                        }
                                        return selected.join(', ');
                                    }}
                                >
                                    {merchants.map(({ merchant }) => (
                                        <MenuItem
                                            value={merchant}
                                        >{merchant}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} mb={3}>
                            <Typography paddingTop={1} component={InputLabel} required>
                                Branch
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    required
                                    id="branch"
                                    value={branch}
                                    onChange={handleChangeBranch}
                                    displayEmpty
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em>Select</em>;
                                        }
                                        return selected.join(', ');
                                    }}
                                >
                                    {branches.map(({ branch }) => (
                                        <MenuItem
                                            value={branch}
                                        >{branch}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} mt={5} />
                        <Grid item xs={12} sm={3.5} mr={5} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                First Name
                            </Typography>
                            <TextField variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={3.5} mr={5} sx={{ mb: 2 }}>
                            <Typography component={InputLabel}>
                                Middle Name
                            </Typography>
                            <TextField variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={3.5} mr={5} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                Last Name
                            </Typography>
                            <TextField variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={3.5} mr={5} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                Gender
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    required
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
                        <Grid item xs={12} sm={3.5} mr={5} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                Contact Number
                            </Typography>
                            <TextField variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={3.5} mr={5} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                Email Address
                            </Typography>
                            <TextField variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={3.5} mr={3} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                House No./Lot No./Street name
                            </Typography>
                            <TextField variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={2} mr={3} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                Country
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    required
                                    id="country"
                                >
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2} mr={3} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                State/Province
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    required
                                    id="stateProvince"
                                >
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2} mr={3} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                City
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    required
                                    id="city"
                                >
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={1} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                Zip Code
                            </Typography>
                            <TextField variant="outlined" fullWidth required />
                        </Grid>


                        <Grid item xs={12} />
                        <Grid item xs={12} />
                        <Grid item xs={12} sm={3} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                Username
                            </Typography>
                            <TextField variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} />
                        <Grid item xs={12} sm={3} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                Password
                            </Typography>
                            <TextField variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} />
                        <Grid item xs={12} sm={3} sx={{ mb: 2 }}>
                            <Typography component={InputLabel} required>
                                Confirm Password
                            </Typography>
                            <TextField variant="outlined" fullWidth required />
                        </Grid>

                        <Grid item xs={12} />
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I agree to the terms and conditions."
                            />
                        </Grid>                        
                        <Grid item xs={12}>
                            <Button variant="contained" size='large' sx={{width: 350, bgcolor: '#A72A17', borderRadius: 20 }}>
                                Submit
                            </Button>
                        </Grid>

                    </Grid>
                </React.Fragment>
            </Box>
        </Box>
    );
}
