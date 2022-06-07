import { Box, Grid, Typography, Divider, Button, FormControl, TextField, Stack, Link, Icon, FormHelperText, FormLabel, Input, InputLabel, Select, InputAdornment, OutlinedInput, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses, Chip } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//Icons
import CloudDownload from '@mui/icons-material/CloudDownload';

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
    dateAndTime: string,
    referenceNumber: number,
    type: string,
    member: string,
    amount: string,
) {
    return { dateAndTime, referenceNumber, type, member, amount};
}

const rows = [
    createData(
        '2022-02-28 | 05:23:10 PM',
        938506936,
        'Cash In',
        'Ada Lovelace',
        '100.00'),
    createData(
        '2022-12-23 | 05:33:20 PM',
        306739458,
        'Send Money',
        'Grace Hopper',
        '1,000.00'),
    createData(
        '2022-08-21 | 09:34:80 PM',
        194739794,
        'Cash In',
        'Margaret Hamilton',
        '2,000.00'),
    createData(
        '2022-03-13 | 11:56:30 PM',
        672938572,
        'Pay Bills',
        'Joan Clarke',
        '500.00'),
];

export default function VolumeOfTransactionsReport() {
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
                            Volume of Transactions Report
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <Divider variant="fullWidth" />
                    </Grid>
                    <Grid item sm={12}>
                        <Box 
                            sx={{alignItem: 'center', bgcolor: '#EBEBEB', p: 4, borderRadius: 5}}
                            style={{display: 'flex', gap: '1rem'}}>

                            <Grid item xs={2.5} style={{ display: "flex", gap: "1rem" }}>
                                <Typography paddingTop={1}>
                                    Duration:
                                </Typography>
                                <FormControl fullWidth>
                                    <Select
                                        size='small'
                                        name="duration"
                                        displayEmpty
                                        renderValue={(selected) => {
                                            return <em>Select</em>;
                                        }}
                                    >
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3.5} style={{ display: "flex", gap: "1rem" }}>
                                <Typography noWrap width={200} paddingTop={1}>
                                    Transaction Type:
                                </Typography>
                                <FormControl fullWidth>
                                    <Select
                                        size='small'
                                        name="duration"
                                        displayEmpty
                                        renderValue={(selected) => {
                                            return <em>Select</em>;
                                        }}
                                    >
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={1}/>
                            <Grid item xs={2}>
                                <Button
                                    variant='contained' 
                                    startIcon={<CloudDownload/>} 
                                    color='info'
                                    sx={{ width: 200, borderRadius: 20 }}>
                                    export
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={12} sx={{mt: 5}}>
                        <Typography color={'primary'} fontWeight='bold' fontSize={18}>
                            Preview:              
                        </Typography>
                    </Grid>
                    <Grid item sm={12} sx={{p: 5 }}>
                    <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align='center'>Date and Time</StyledTableCell>
                                        <StyledTableCell align='center'>Reference Number</StyledTableCell>
                                        <StyledTableCell align='center'>Type</StyledTableCell>
                                        <StyledTableCell align='center'>Member</StyledTableCell>
                                        <StyledTableCell align='center'>Amount</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.referenceNumber}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align='center'>
                                                {row.dateAndTime}
                                            </TableCell>
                                            <TableCell align='center'>{row.referenceNumber}</TableCell>
                                            <TableCell align='center'>{row.type}</TableCell>
                                            <TableCell align='center'>{row.member}</TableCell>
                                            <TableCell align='center'>{`PHP ${row.amount}`}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </React.Fragment>
        </Box>
    );
}
