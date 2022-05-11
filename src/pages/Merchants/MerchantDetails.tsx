import { Box, Grid, Typography, Divider, Button, FormControl, TextField, Stack, Link, Icon, FormHelperText, FormLabel, Input, InputLabel, Select, InputAdornment, OutlinedInput, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

//Custom Style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#E5E5E5",
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


//Mock Data
function createData(
    branch: string,
    province: string,
    city: string,
    availableCredits: number,
) {
    return { branch, province, city, availableCredits };
}

const rows = [
    createData(
        'Ayala Center Cebu',
        'Cebu',
        'Cebu City',
        100000),
    createData(
        'Lapu-Lapu City',
        'Cebu',
        'Lapu-Lapu City',
        70000),
    createData(
        'Robinsons Galleria Cebu',
        'Cebu',
        'Cebu City',
        40000),
    createData(
        'Minglanilla',
        'Cebu',
        'Minglanilla',
        850000)
];

export default function MerchantDetails() {
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
                <Grid container spacing={2} sx={{ style: 'flex' }}>
                    <Grid item xs={12} sm={11} sx={{ mt: 4, mb: 0 }}>
                        <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                            Merchant Details
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
                    <Grid item xs={4} sx={{ p: 10, mt: 5 }}>
                        <Grid item container
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <FormControl variant="standard">
                                <Box sx={{ borderRadius: 5, bgcolor: 'background.paper', p: 5, width: 300, height: 300, borderColor: 'black' }}>
                                    <img src="" alt="" />
                                </Box>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container sm={8} sx={{ p: 5 }}>
                        <Grid container sm={6} sx={{ p: 5 }}>
                            <Grid item sm={12}>
                                <Stack spacing={5}>
                                    <Grid item sm={6}>
                                        <Typography component={FormLabel}>
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
                                            placeholder="-"
                                            variant="outlined"
                                        />
                                    </Grid>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={6} sx={{ mt: 4, mr: 5 }}>
                                <Typography component={FormLabel}>
                                    Industry Type
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
                                    placeholder="-"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} />
                            <Grid item xs={12} sm={10} sx={{ mt: 4, mr: 5 }}>
                                <Typography component={FormLabel}>
                                    Available Credits
                                </Typography>
                                <Grid item style={{ display: "flex", gap: "1rem" }}>
                                    <OutlinedInput fullWidth size='small' startAdornment={<InputAdornment position="start">₱</InputAdornment>} />
                                    <Button
                                        variant="contained"
                                        startIcon={<AddIcon />}
                                        color='success'
                                        sx={{ width: 300, borderRadius: 20 }}>
                                        Add Credits
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} sx={{ p: 5 }}>
                            <Grid item>
                                <Typography component={FormLabel}>
                                    Primary Contact Number
                                </Typography>
                                <TextField fullWidth size='small' />
                            </Grid>
                            <Grid item sx={{ mt: 4 }}>
                                <Typography component={FormLabel}>
                                    Primary Email Address
                                </Typography>
                                <TextField fullWidth size='small' />
                            </Grid>
                            <Grid item sx={{ mt: 4 }}>
                                <Typography component={FormLabel}>
                                    Official Documents
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} sx={{ mt: 2, p: 5 }}>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align='center'>Branch</StyledTableCell>
                                            <StyledTableCell align='center'>Province</StyledTableCell>
                                            <StyledTableCell align='center'>City/Municipality</StyledTableCell>
                                            <StyledTableCell align='center'>Available Credits</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.branch}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" align='center'>
                                                    {row.branch}
                                                </TableCell>
                                                <TableCell align='center'>{row.province}</TableCell>
                                                <TableCell align='center'>{row.city}</TableCell>
                                                <TableCell align='center'>{`PHP ${row.availableCredits}`}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        </Box>
    );
}
