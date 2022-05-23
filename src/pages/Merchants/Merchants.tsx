import { Table, TableHead, TableRow, TableCell, TableBody, Box, Grid, Typography, Divider, FormLabel, TextField, Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Accordion, AccordionDetails, AccordionSummary, Stack, AccordionActions, Paper, TableContainer, tableCellClasses, styled, FormControl, MenuItem, Select, IconButton } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//Icons
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { FC, useState } from 'react';
import DeleteMerchant from '../../modals/DeleteMerchant';

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
    companyId: number,
    companyName: string,
) {
    return { companyId, companyName};
}

const rows = [
    createData(
        53715,
        'Core Pacific'),
    createData(
        91037,
        'Regan'),

];


const Merchants:FC<any> = () => {
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
                            Merchants
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
                    <Grid item xs={7} />
                    <Grid item xs={'auto'}>
                        <Button 
                        variant="contained" 
                        startIcon={<AddIcon />} 
                        sx={{ borderRadius: 20 }} 
                        color='success'
                        onClick={() => navigate('addMerchant')}>
                            Add New Merchant
                        </Button>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <Divider variant="fullWidth" />
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", gap: "1rem", alignItems: 'center' }}>
                        <Typography>
                            Total Merchants:
                        </Typography>
                        <Typography fontWeight={'bold'}>
                            2
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align='center'>Company ID</StyledTableCell>
                                        <StyledTableCell align='center'>Company Name</StyledTableCell>
                                        <StyledTableCell align='center'>Actions</StyledTableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.companyName}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align='center'>
                                                {row.companyId}
                                            </TableCell>
                                            <TableCell align='center'>{row.companyName}</TableCell>
                                            <TableCell align='center'>
                                                <React.Fragment>
                                                    <IconButton onClick={() => navigate('viewMerchant')}>
                                                        <VisibilityIcon />
                                                    </IconButton>
                                                    <IconButton color='info' onClick={() => navigate('editMerchant')}>
                                                        <EditIcon />
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

export default Merchants;