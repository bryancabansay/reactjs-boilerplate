import { Box, Grid, Typography, Divider, FormLabel, Button, FormControl, Input, TextField, Stack } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function AddMerchant() {
    const navigate = useNavigate();
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
                    <Grid container xs={4} sx={{ p: 5 }}>
                        <div>
                            <FormControl variant="standard">
                                <Typography component={FormLabel} required align='center'>
                                    Company Logo
                                </Typography>
                                <Box sx={{ borderRadius: 5, bgcolor: 'background.paper', p: 5, width: 280, height: 280 }}>
                                    <img src="testImage.png" alt="" />
                                </Box>
                            </FormControl>
                        </div>
                        <div>
                            <Input type="file" disableUnderline />
                        </div>
                    </Grid>
                    <Grid container xs={8} sx={{ p: 5 }}>
                        <Stack spacing={5}>
                            <div>
                                <FormControl variant="standard">
                                    <Typography component={FormLabel} required>
                                        Company Name
                                    </Typography>
                                    <TextField fullWidth size='small' />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl variant="standard">
                                    <Typography component={FormLabel} required>
                                        Official Documents
                                    </Typography>
                                    <Input type="file" fullWidth disableUnderline size='small' />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl variant="standard">
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
                                </FormControl>
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </React.Fragment>
        </Box>
    );
}
