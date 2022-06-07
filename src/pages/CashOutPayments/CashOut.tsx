import { Table, TableHead, TableRow, TableCell, TableBody, Box, Grid, Typography, Divider, FormLabel, TextField, Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Accordion, AccordionDetails, AccordionSummary, Stack, AccordionActions, Paper, TableContainer, tableCellClasses, styled, FormControl, MenuItem, Select, IconButton, InputLabel } from '@mui/material';
import { action } from 'mobx';
import * as React from 'react';

//ICONS
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

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
    refNo: number,
    dateAndTime: string,
    mobileNumber: number,
    member: string,
    amount: string,
    merchant: string,
    branch: string,
    status: string,
) {
    return { refNo, dateAndTime, mobileNumber, member, amount, merchant, branch, status};
}

const rows = [
    createData(
        971519684,
        '2022-02-28 | 05:23:10 PM',
        9274681249,
        'Ada Lovelace',
        '100.00',
        'Core Pacific',
        'Ayala Center Cebu',
        ''),
    createData(
        123984573,
        '2022-12-23 | 05:33:20 PM',
        9123652123,
        'Grace Hopper',
        '1,000.00',
        'Regan',
        'Lapu-Lapu City',
        ''),
    createData(
        824567364,
        '2022-08-21 | 09:34:80 PM',
        9567834524,
        'Margaret Hamilton',
        '2,000.00',
        'Core Pacific',
        'Robinsons Galleria Cebu',
        'Declined'),
    createData(
        897290684,
        '2022-03-13 | 11:56:30 PM',
        9572784523,
        'Joan Clarke',
        '500.00',
        'Regan', 'Minglanilla',
        'Approved'),
];


const getStatus = (status: string) => {
    if (status === "Approved") {
        return <CheckIcon color='success'/>
    }
    else if (status === "Declined") {
        return <CloseIcon color='error'/>
    }
    else if (status === " ") {
        return <div></div>
    }
};

export default function CashOut() {
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
                    <Grid item xs={12} sx={{ mt: 4, mb: 0 }}>
                        <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                            Cash Out Payments
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            size='small'
                            placeholder="Search"
                            type="search"
                            id="cashInSearch"
                        />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={2.5} style={{ display: "flex", gap: "1rem", marginRight: 5 }}>
                        <Typography noWrap width={80} paddingTop={1}>
                            Sort by:
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                size='small'
                                name="sortBy"
                                displayEmpty
                                renderValue={(selected) => {
                                      return <em>Select</em>;
                                }}
                            >
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2.5} style={{ display: "flex", gap: "1rem", marginRight: 5 }}>
                        <Typography paddingTop={1}>
                            Merchant:
                        </Typography>
                        <FormControl fullWidth>
                            <Select
                                size='small'
                                name="merchant"
                                displayEmpty
                                renderValue={(selected) => {
                                      return <em>Select</em>;
                                }}
                            >
                            </Select>
                        </FormControl>
                    </Grid>
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
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <Divider variant="fullWidth" />
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", gap: "1rem" }}>
                        <Typography>
                            Total Cash Out Payments:
                        </Typography>
                        <Typography fontWeight={'bold'}>
                            4
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} style={{ display: "flex", gap: "1rem" }}>
                        <Typography>
                            Cash Out Total:
                        </Typography>
                        <Typography fontWeight={'bold'}>
                            PHP 2,000.00
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2.5}/>
                    {/*<Grid item xs={12} sm={2.5} style={{ display: "flex", gap: "1rem" }}>
                        <Typography>
                            Available Credits:
                        </Typography>
                        <Typography fontWeight={'bold'}>
                            PHP 85,000.00
                        </Typography>
                            </Grid>*/}
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align='center'>Ref. No.</StyledTableCell>
                                        <StyledTableCell align='center'>Date and Time</StyledTableCell>
                                        <StyledTableCell align='center'>Mobile Number</StyledTableCell>
                                        <StyledTableCell align='center'>Member</StyledTableCell>
                                        <StyledTableCell align='center'>Amount</StyledTableCell>
                                        <StyledTableCell align='center'>Merchant</StyledTableCell>
                                        <StyledTableCell align='center'>Branch</StyledTableCell>
                                        <StyledTableCell align='center'>Status</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.refNo}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align='center'>
                                                {row.refNo}
                                            </TableCell>
                                            <TableCell align='center'>{row.dateAndTime}</TableCell>
                                            <TableCell align='center'>{row.mobileNumber}</TableCell>
                                            <TableCell align='center'>{row.member}</TableCell>
                                            <TableCell align='center'>{`PHP ${row.amount}`}</TableCell>
                                            <TableCell align='center'>{row.merchant}</TableCell>
                                            <TableCell align='center'>{row.branch}</TableCell>
                                            <TableCell align='center'>
                                                {getStatus(row.status)}
                                            </TableCell>
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
