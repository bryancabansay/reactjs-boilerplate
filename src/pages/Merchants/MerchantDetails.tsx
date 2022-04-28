import { Box, Grid, Typography, Divider, FormLabel, Button, FormControl, Input, TextField, Stack, Link, Icon } from '@mui/material';
import { action } from 'mobx';
import * as React from 'react';

//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AttachFileIcon from '@mui/icons-material/AttachFile';


export default function MerchantDetails() {

    return (

        <React.Fragment>
            <Grid container spacing={2} sx={{style: 'flex'}}>
                <Grid item xs={12} sm={11} sx={{ mt: 4, mb: 0 }}>
                    <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                        Merchant Details
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
                <Grid container xs={4} sx={{ p: 10 }}>
                    <div>
                        <FormControl variant="standard">
                            <Box sx={{ borderRadius: 5, bgcolor: 'background.paper', p: 5, width: 280, height: 280 }}>
                                <img src="src/img/testImage.png" alt="" />
                            </Box>
                        </FormControl>
                    </div>
                </Grid>
                <Grid container xs={8} sx={{p: 5}}>
                    <Stack spacing={5}>
                        <div>
                            <FormControl variant="standard">
                                <Typography fontWeight={'bold'}>
                                    Company Name
                                </Typography>
                                <Typography> Foo Bar </Typography>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl variant="standard">
                                <Typography fontWeight={'bold'}>
                                    Official Documents
                                </Typography>
                                <div style={{ display: "flex"}}>
                                    <Icon> 
                                        <AttachFileIcon/>
                                    </Icon>
                                    <Link>
                                        See Attachment
                                    </Link>
                                </div>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl variant="standard">
                                <Typography fontWeight={'bold'}>
                                    Remarks/Comments
                                </Typography>
                                <TextField
                                    disabled
                                    fullWidth
                                    multiline
                                    value={'-'}
                                    rows={4}
                                    variant="outlined"
                                />
                            </FormControl>
                        </div>
                    </Stack>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
