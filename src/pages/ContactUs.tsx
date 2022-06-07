import { Box, Grid, Typography, TextField, SelectChangeEvent, FormControl, InputLabel, MenuItem, Select, Divider, FormHelperText, Button } from '@mui/material';
import * as React from 'react';

//ICONS
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export default function FAQ() {

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
                <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ mt: 4, mb: 0 }}>
                        <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                            Contact Us
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }} >
                        <Divider variant="fullWidth" />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant='body1'>
                            Feel free to email us or drop a call.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 1}} style={{ display: "flex", gap: "1rem" }}>
                        <HomeIcon color='primary'/>
                        <Typography variant='body1' color={'primary'}>
                            A.S. Fortuna Banilad Street, Mandaue City, Cebu 6014
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: "flex", gap: "1rem" }}>
                        <CallIcon color='primary'/>
                        <Typography variant='body1' color={'primary'}>
                            (032) 514-8673
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: "flex", gap: "1rem" }}>
                        <EmailIcon color='primary'/>
                        <Typography variant='body1' color={'primary'}>
                            contact@daltan.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 3}}>
                       <Typography variant='body2'>
                           If you have other concerns to BSP, you may contact this number: <b> (032) 254 0973 </b>
                       </Typography>
                    </Grid>
                    
                </Grid>
            </React.Fragment>
        </Box>
    );
}
