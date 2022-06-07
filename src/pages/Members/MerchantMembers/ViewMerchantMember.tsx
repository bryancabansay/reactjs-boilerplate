import { Box, Grid, Typography, Divider, TextField, Button, Icon } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import DeactivateMemberAccount from '../../../modals/DeactivateMemberAccount';

export default function ViewMemberDetails() {
    const navigate = useNavigate();
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
                        <Grid item xs={12} sm={9.5} sx={{ mt: 4, mb: 0 }}>
                            <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                                Member Details
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={1.5}>
                            <DeactivateMemberAccount source='ComplianceOfficer' component={'button'} />
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Button 
                            variant="outlined" 
                            startIcon={<ArrowBackIcon />} 
                            sx={{ mt: 3, width: 120, borderRadius: 20 }}
                            onClick={() => navigate(-1)}>
                                Back
                            </Button>
                        </Grid>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <Divider variant="fullWidth" />
                        </Grid>
                        <Grid item xs={2}>
                            <AccountCircleIcon style={{ fontSize: 200 }} color="action" />
                        </Grid>
                        <Grid item xs={10} marginTop={2}>
                            <Grid container spacing={2}>
                                <Grid item sm={12}>
                                    <Typography variant='body1' fontWeight={"bold"}>
                                        Role:
                                    </Typography>
                                    <Typography variant='body2'>
                                        Merchant Staff
                                    </Typography>
                                </Grid>

                                <Grid item sm={12}>
                                    <Typography variant='body1' fontWeight={"bold"}>
                                        Merchant:
                                    </Typography>
                                    <Typography variant='body2'>
                                        Core Pacific
                                    </Typography>
                                </Grid>

                                <Grid item sm={12}>
                                    <Typography variant='body1' fontWeight={"bold"}>
                                        Branch:
                                    </Typography>
                                    <Typography variant='body2'>
                                        Ayala Center Cebu
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>


                        <Grid item xs={7} sx={{ mt: 4, mb: 0 }}>
                            <Typography component="h1" variant="h6" color={"#A72A17"} fontWeight='medium'>
                                Personal Information
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ mb: 3 }}>
                            <Divider variant="fullWidth" />
                        </Grid>

                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Last Name
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                First Name
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />

                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Middle Name
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Gender
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Contact Number
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Email Address
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>                        
                        <Grid item xs={12} sm={12} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Address
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />

                        </Grid>
                        <Grid item xs={12} sm={3} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Username
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>

                    </Grid>
                </React.Fragment>
            </Box>
        </Box>
    );
}
