import { Box, Grid, Typography, TextField, SelectChangeEvent, FormControl, InputLabel, MenuItem, Select, Divider, FormHelperText, Button } from '@mui/material';
import * as React from 'react';

export default function FAQ() {
    {/*Combo box MERCHANT*/ }
    const [merchant, setMerchant] = React.useState('');
    const handleChangeMerchant = (event: SelectChangeEvent) => {
        setMerchant(event.target.value as string);
    };
    {/*Combo box BRANCH*/ }
    const [branch, setBranch] = React.useState('');
    const handleChangeBranch = (event: SelectChangeEvent) => {
        setBranch(event.target.value as string);
    };
    {/*Combo box CONCERN CATEGORY*/ }
    const [concern, setConcern] = React.useState('');
    const handleChangeConcern = (event: SelectChangeEvent) => {
        setConcern(event.target.value as string);
    };


    return (
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
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ mt: 4, mb: 0 }}>
                        <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                            Contact Us
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }} >
                        <Divider variant="fullWidth" />
                    </Grid>

                    <Grid item xs={12} marginRight={120}>
                        <TextField
                            fullWidth
                            required
                            id="emailAddress"
                            label="Email Address"
                            name="emailAddress"
                        />
                    </Grid>
                    <Grid item xs={12} marginRight={120}>
                        <TextField
                            fullWidth
                            required
                            id="fullName"
                            label="Full Name"
                            name="fullName"
                        />
                    </Grid>
                    <Grid item xs={12} marginRight={120}>
                        <FormControl fullWidth required>
                            <InputLabel>Merchant</InputLabel>
                            <Select
                                id="merchant"
                                label="Merchant"
                                value={merchant}
                                onChange={handleChangeMerchant}
                            >
                                <MenuItem value={10}>Foo</MenuItem>
                                <MenuItem value={20}>Bar</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} marginRight={120}>
                        <FormControl fullWidth required>
                            <InputLabel>Branch</InputLabel>
                            <Select
                                id="branch"
                                label="Branch"
                                value={branch}
                                onChange={handleChangeBranch}
                            >
                                <MenuItem value={10}>Foo</MenuItem>
                                <MenuItem value={20}>Bar</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} marginRight={120}>
                        <FormControl fullWidth required>
                            <InputLabel>Concern Category</InputLabel>
                            <Select
                                id="concernCategory"
                                label="Concern Category"
                                value={concern}
                                onChange={handleChangeConcern}

                            >
                                <MenuItem value={10}>Foo</MenuItem>
                                <MenuItem value={20}>Bar</MenuItem>
                            </Select>
                            <FormHelperText>
                                Please select the closest possible category among the choices.
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} marginRight={120}>
                        <InputLabel required sx={{my: 1, mt: 3}}>
                                Kindly provide all the details that will help us assist you with your concern
                        </InputLabel>
                        <TextField
                            fullWidth
                            multiline
                            required
                            rows={4}
                            placeholder="Write something here..."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            size='medium'
                            sx={{ mt: 3, mb: 2, width: 300, bgcolor: '#A72A17', borderRadius: 20 }}
                        >
                            Submit
                        </Button>
                    </Grid>

                </Grid>
            </React.Fragment>
        </Box>
    );
}
