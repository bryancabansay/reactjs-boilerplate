import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#fc636b',
      dark: '#990033',
    },

  }
});

export const Registration: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  {/*Combo box GENDER*/ }
  const [gender, setGender] = React.useState('');
  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  {/*Combo box BRANCH*/ }
  const [branch, setBranch] = React.useState('');
  const handleChangeBranch = (event: SelectChangeEvent) => {
    setBranch(event.target.value as string);
  };



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* This is for the TOP bar */}
      <AppBar
        position="absolute"

        elevation={0}
        sx={{
          position: 'relative',
          background: '#A72A17',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            
          </Typography>
        </Toolbar>
      </AppBar>


      <Grid container justifyContent="center">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'background.paper',
            boxShadow: 2,
            borderRadius: 5,
            px: 8,
            pb: 8,
            pt: 6,
            width: 700,
          }}
        >

          <React.Fragment>
            <Avatar sx={{ m: 1, bgcolor: '#A72A17' }}>
              <AssignmentIcon />
            </Avatar>
            <Typography component="h1" variant="h4" sx={{color: '#A72A17', fontWeight: 'bold'}}>
              Registration
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 7 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="middleName"
                    label="Middle Name"
                    name="middleName"
                    autoComplete="middle-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select
                      required
                      name="gender"
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
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="contactNo"
                    label="Contact Number"
                    name="contactNo"
                    autoComplete="contact-number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="House no. / Lot No. / Street Name"
                    name="address"
                    autoComplete="address"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="city"
                    name="city"
                    required
                    fullWidth
                    id="city"
                    label="City"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="zipCode"
                    label="Zip Code"
                    name="zipcode"
                    autoComplete="zip-code"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="state"
                    label="State/Province"
                    name="state"
                    autoComplete="state"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="country"
                    label="Country"
                    name="country"
                    autoComplete="country"
                  />
                </Grid>
                <Grid item xs={7} sx={{ mt: 4, mb: 0 }}>
                  <Typography  component="h1" variant="h5">
                    Login Information
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ mb: 2 }}>
                  <Divider variant="fullWidth" />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Branch</InputLabel>
                    <Select
                      required
                      name="branch"
                      id="branch"
                      label="Branch"
                      value={branch}
                      onChange={handleChangeBranch}
                    >
                      <MenuItem value={10}>Lorem</MenuItem>
                      <MenuItem value={20}>Ipsum</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I agree to the terms and conditions."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size='large'
                sx={{ mt: 3, mb: 2, bgcolor: '#A72A17'}}
              >
                Submit
              </Button>
              
            </Box>
          </React.Fragment>

        </Box>
      </Grid>
    </ThemeProvider>
  );
}