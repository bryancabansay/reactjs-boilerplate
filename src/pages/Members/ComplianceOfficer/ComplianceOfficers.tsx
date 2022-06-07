import { Table, TableHead, TableRow, TableCell, TableBody, Box, Grid, Typography, Divider, TextField, Button, Paper, TableContainer, tableCellClasses, styled, FormControl, Select, IconButton, Chip } from '@mui/material';
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from 'react-router-dom';

//Icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeactivateMemberAccount from '../../../modals/DeactivateMemberAccount';

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
    idNumber: number,
    username: string,
    member: string,
    status: string,
    dateCreated: string,
    dateInactive: string,
) {
    return { idNumber, username, member, status, dateCreated, dateInactive};
}

const rows = [
    createData(
        59487,
        'alovelace',
        'Ada Lovelace',
        'Active',
        '2022-02-01', ''),
    createData(
        34175,
        'ghopper',
        'Grace Hopper',
        'Active', 
        '2022-02-01', ''),
    createData(
        62439,
        'mhamilton',
        'Margaret Hamilton',
        'Active',
        '2022-02-01', ''),
    createData(
        27965,
        'jclarke',
        'Joan Clarke',
        'Inactive',
        '2022-02-01', '2022-02-06'),

];

const getColor = (status: string) => {
    if (status === "Active") return 'success';
    else return 'error';
};

export default function ComplianceOfficers() {
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
                    <Grid item xs={12} sx={{ mt: 4, mb: 0 }}>
                        <Typography component="h1" variant="h5" color={"#A72A17"} fontWeight='bold'>
                            Compliance Officers
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
                    <Grid item xs={6} />
                    <Grid item xs={3}>
                        <Button 
                        variant="contained" 
                        startIcon={<AddIcon />} 
                        sx={{ borderRadius: 20, width: 280 }} 
                        color='success' 
                        onClick={() => navigate('addComplianceOfficer')}>
                            Add New Compliance Officer
                        </Button>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 1 }}>
                        <Divider variant="fullWidth" />
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", gap: "1rem" }}>
                        <Typography>
                            Total Compliance Officers:
                        </Typography>
                        <Typography fontWeight={'bold'}>
                            4
                        </Typography>
                    </Grid>
                    <Grid item xs={5.4} />
                    <Grid item sm={2.5} style={{ display: "flex", gap: "1rem", marginRight: 5 }}>
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

                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align='center'>ID Number</StyledTableCell>
                                        <StyledTableCell align='center'>Username</StyledTableCell>
                                        <StyledTableCell align='center'>Member</StyledTableCell>
                                        <StyledTableCell align='center'>Status</StyledTableCell>
                                        <StyledTableCell align='center'>Date Created</StyledTableCell>
                                        <StyledTableCell align='center'>Date Inactive</StyledTableCell>
                                        <StyledTableCell align='center'>Actions</StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.idNumber}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align='center'>
                                                {row.idNumber}
                                            </TableCell>
                                            <TableCell align='center'>{row.username}</TableCell>
                                            <TableCell align='center'>{row.member}</TableCell>
                                            <TableCell align='center'>
                                                <Chip size='small' color={getColor(row.status)} label={
                                                    <Typography fontSize={13}>
                                                        {row.status}
                                                    </Typography>
                                                } />
                                            </TableCell>
                                            <TableCell align='center'>{row.dateCreated}</TableCell>
                                            <TableCell align='center'>
                                                <Typography fontSize={14} color={'primary'}>
                                                    {row.dateInactive}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align='center'>
                                                <React.Fragment>
                                                    <IconButton onClick={() => navigate('viewComplianceOfficer')}>
                                                        <VisibilityIcon />
                                                    </IconButton>
                                                    <IconButton color='info' onClick={() => navigate('updateComplianceOfficer')}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton color='error'>
                                                        <DeactivateMemberAccount source='ComplianceOfficer' component={'icon'} />
                                                    </IconButton>
                                                </React.Fragment>
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
