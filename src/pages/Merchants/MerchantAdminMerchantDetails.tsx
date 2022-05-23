import { Box, Grid, Typography, Divider, Button, FormControl, TextField, Stack, Link, Icon, FormHelperText, FormLabel, Input, InputLabel, Select, InputAdornment, OutlinedInput, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//Icons
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddCredits from '../../modals/AddCredits';

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

function createFiles(
    name: string,
    type: string,
) {
    return { name, type };
}

const files = [
    createFiles(
        'MSB',
        'xls',
    ),
    createFiles(
        'For_MSB_Customer_Tie-up',
        'doc',
    ),
    createFiles(
        'For_Regular_Individual_customer',
        'doc',
    )
]

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

export default function MerchantAdminMerchantDetails() {
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
                    <Grid item xs={12} sm={10} sx={{ mt: 4, mb: 0 }}>
                        <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                            Merchant Details
                        </Typography>
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
                    <Grid container sm={8} sx={{ p: 1 }}>
                        <Grid container sm={6} sx={{ p: 5 }}>
                            <Grid item sm={12}>
                                <Stack spacing={5}>
                                    <Grid item sm={6}>
                                        <Typography>
                                            Company Name
                                        </Typography>
                                        <TextField fullWidth size='small' />
                                    </Grid>
                                    <Grid item>
                                        <Typography>
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
                                <Typography>
                                    Industry Type
                                </Typography>
                                <TextField fullWidth size='small' />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: 4 }}>
                                <Typography>
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
                                <Typography>
                                    Available Credits
                                </Typography>
                                <TextField fullWidth size='small' />
                            </Grid>
                        </Grid>
                        <Grid item sm={6} sx={{ p: 5 }}>
                            <Grid item>
                                <Typography>
                                    Primary Contact Number
                                </Typography>
                                <TextField fullWidth size='small' />
                            </Grid>
                            <Grid item sx={{ mt: 4 }}>
                                <Typography>
                                    Primary Email Address
                                </Typography>
                                <TextField fullWidth size='small' />
                            </Grid>
                            <Grid item sx={{ mt: 4 }}>
                                <Typography>
                                    Official Documents
                                </Typography>
                                {files.map((file) => (
                                    <ul>
                                        <React.Fragment>
                                            <AttachFileIcon style={{ fontSize: 15 }} />
                                            <Link>
                                                {file.name}.{file.type}
                                            </Link>
                                        </React.Fragment>
                                    </ul>
                                ))}

                            </Grid>
                        </Grid>
                        <Grid item sm={12} sx={{ p: 5 }}>
                            <Typography sx={{ mb: 2, fontWeight: 'bold' }}>
                                Branches
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align='center'>Branch</StyledTableCell>
                                            <StyledTableCell align='center'>Province</StyledTableCell>
                                            <StyledTableCell align='center'>City/Municipality</StyledTableCell>
                                            <StyledTableCell align='center'>Available Credits</StyledTableCell>
                                            <StyledTableCell align='center'>Action</StyledTableCell>
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
                                                <TableCell>
                                                    <AddCredits/>
                                                </TableCell>
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
