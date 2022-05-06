import { Box, Grid, Typography, Divider, TextField, Button, Icon } from '@mui/material';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function UserDetails() {
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
                        <Grid item xs={12} sm={11} sx={{ mt: 4, mb: 0 }}>
                            <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                                User Details
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
                        <Grid item xs={2}>
                            <AccountCircleIcon style={{ fontSize: 200 }} color="action" />
                        </Grid>
                        <Grid item xs={10} marginTop={5}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Status:
                            </Typography>
                            <Typography variant='body2'>
                                Verified
                            </Typography>
                        </Grid>


                        <Grid item xs={7} sx={{ mt: 4, mb: 0 }}>
                            <Typography component="h1" variant="h6" color={"#A72A17"} fontWeight='medium'>
                                Personal Information
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <Divider variant="fullWidth" />
                        </Grid>

                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Last Name
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                First Name
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth/>

                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Middle Name
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Suffix
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Gender
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Date of Birth
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />

                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Registered Mobile Number
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Email Address
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Place of Birth
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Nationality
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />

                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Nature of Work/Business
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Name of Employer
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Source of Funds
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                TIN/SSS/GSIS Number
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />

                        </Grid>
                        <Grid item xs={12} sm={2.5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Contact Number
                            </Typography>
                            <TextField size='small' variant="standard" disabled fullWidth />
                        </Grid>

                        {/* SUPPORTED DOCUMENTS */}
                        <Grid item xs={7} sx={{ mt: 4, mb: 0 }}>
                            <Typography component="h1" variant="h6" color={"#A72A17"} fontWeight='medium'>
                                Supported Documents
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <Divider variant="fullWidth" />
                        </Grid>
                        <Grid item xs={12} sm={5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Valid Government issued identification (ID)
                            </Typography>

                            <div style={{ display: "flex" }}>
                                <TextField size='small' variant="standard" sx={{width: 'auto', mr: 5}} disabled/>
                                <Icon>
                                    <AttachFileIcon />
                                </Icon>
                                <Link to=''>
                                    See Attachment
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5} mr={4} sx={{ mb: 2 }}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Valid DTI Registration (if applicable)
                            </Typography>
                            <div style={{ display: "flex" }}>
                                <TextField size='small' variant="standard" sx={{width: 'auto', mr: 5}} disabled/>
                                <Icon>
                                    <AttachFileIcon />
                                </Icon>
                                <Link to=''>
                                    See Attachment
                                </Link>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={5} mr={4}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                Valid Mayor's Business Permit
                            </Typography>
                            <div style={{ display: "flex" }}>
                                <TextField size='small' variant="standard" sx={{width: 'auto', mr: 5}} disabled/>
                                <Icon>
                                    <AttachFileIcon />
                                </Icon>
                                <Link to=''>
                                    See Attachment
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5} mr={4}>
                            <Typography variant='body1' fontWeight={"bold"}>
                                BSP & AMLC Certificate of Registration (if applicable)
                            </Typography>
                            <div style={{ display: "flex" }}>
                                <TextField size='small' variant="standard" sx={{width: 'auto', mr: 5}} disabled/>
                                <Icon>
                                    <AttachFileIcon />
                                </Icon>
                                <Link to=''>
                                    See Attachment
                                </Link>
                            </div>

                        </Grid>

                    </Grid>
                </React.Fragment>
            </Box>
        </Box>
    );
}
