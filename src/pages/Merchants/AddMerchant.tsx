import { Box, Grid, Typography, Divider, FormLabel, Button, FormControl, Input, TextField, Stack, Select, InputLabel, MenuItem, SelectChangeEvent, FormHelperText } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import genders from '../../data/ComboBoxData';


export default function AddMerchant() {
    const navigate = useNavigate();

    {/*Combo box GENDER*/ }
    const [industryType, setindustryType] = React.useState<string[]>([]);
    const handleChangeGender = (event: SelectChangeEvent<typeof industryType>) => {
        const {
            target: { value },
        } = event;
        setindustryType(
            typeof value === 'string' ? value.split(',') : value,
        );
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
                    <Grid item xs={12} sm={11} sx={{ mt: 4, mb: 0 }}>
                        <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                            Add New Merchant
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
                    <Grid item xs={4} sx={{ p: 10 }}>
                        <Grid item container
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <FormControl variant="standard">
                                <Typography component={FormLabel} required align='center'>
                                    Company Logo
                                </Typography>
                                <Box sx={{ borderRadius: 5, bgcolor: 'background.paper', p: 5, width: 300, height: 300, borderColor: 'black' }}>
                                    <img src="" alt="" />
                                </Box>
                            </FormControl>

                            <Input type="file" disableUnderline sx={{ p: 2, width: 250 }} />
                            <FormHelperText>
                                <React.Fragment>
                                    <Typography color='primary'>
                                        <b>Note:</b> Image file should align with the following.
                                        <ul>
                                            <li>Maximum file size is 3 MB.</li>
                                            <li>Dimension should be at least 320 x 320.</li>
                                            <li>File format should be JPEG or PNG.</li>
                                        </ul>
                                    </Typography>
                                </React.Fragment>
                            </FormHelperText>
                        </Grid>
                    </Grid>
                    <Grid container sm={6} sx={{ p: 5 }}>
                        <Grid item sm={12}>
                            <Stack spacing={5}>
                                <Grid item sm={4}>
                                    <Typography component={FormLabel} required>
                                        Company Name
                                    </Typography>
                                    <TextField fullWidth size='small' />
                                </Grid>
                                <Grid item>
                                    <Typography component={FormLabel}>
                                        Company Description
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        placeholder="Enter text here..."
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item sm={4}>
                                    <Typography component={InputLabel} required>
                                        Industry Type
                                    </Typography>
                                    <FormControl fullWidth>
                                        <Select
                                            required
                                            id="industryType"
                                            value={industryType}
                                            onChange={handleChangeGender}
                                            displayEmpty
                                            renderValue={(selected) => {
                                                if (selected.length === 0) {
                                                    return <em>Select</em>;
                                                }
                                                return selected.join(', ');
                                            }}
                                        >

                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ mt: 4, mr: 5 }}>
                            <Typography component={FormLabel} required>
                                Primary Contact Number
                            </Typography>
                            <TextField fullWidth size='small' />
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ mt: 4, mr: 5 }}>
                            <Typography component={FormLabel} required>
                                Primary Email Address
                            </Typography>
                            <TextField fullWidth size='small' />
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ mt: 4, mr: 5 }}>
                            <Typography component={FormLabel} required>
                                Official Documents
                            </Typography>
                            <Input type="file" fullWidth disableUnderline size='small' />
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ mt: 4, mr: 5 }}>
                            <Typography component={FormLabel} required>
                                Initial Credits
                            </Typography>
                            <TextField fullWidth size='small' />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 4 }}>
                            <Typography component={FormLabel}>
                                Remarks/Comments
                            </Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                placeholder="Enter text here..."
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={4} sx={{ p: 10 }}>
                        <Button
                            variant="contained"
                            fullWidth
                            size='large'
                            sx={{ mt: 3, mb: 2, bgcolor: '#A72A17', borderRadius: 20 }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        </Box>
    );
}
