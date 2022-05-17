import * as React from 'react';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";
import { Drawer, AppBar, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

//Icons
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import QuizIcon from '@mui/icons-material/Quiz';
import ContactlessIcon from '@mui/icons-material/Contactless';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import GroupsIcon from '@mui/icons-material/Groups';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


const drawerWidth: number = 290;


const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: '#a72a17',
            contrastText: 'white',
        },
        secondary: {
            main: '#FFFFFF',
        }

    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: "#a72a17",
                }
            }
        }
    }
});


function DashboardContent() {

    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [dropMembers, setdropMembers] = React.useState(false);
    const [dropReport, setdropReport] = React.useState(false);

    const handleListItemClick = (
        event: React.MouseEvent<Element, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" color='primary' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="white"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            DCash
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}>
                    <Toolbar />

                    {/* LIST for the MENU */}
                    <List component="nav" sx={{ p: 1 }}>
                        <ListItemButton
                            component={Link}
                            to='indexProfile'
                            selected={selectedIndex === 0}
                            onClick={(event: React.MouseEvent<Element, MouseEvent>) => handleListItemClick(event, 0)}>
                            <ListItemIcon>
                                <AccountCircleIcon style={{ fontSize: 40 }} color="secondary" />
                            </ListItemIcon>
                            <ListItemText secondary={
                                <React.Fragment>
                                    <Typography
                                        variant="body2"
                                        color="secondary"
                                        fontWeight={'bold'}
                                    >
                                        Daltan Super Admin
                                    </Typography>

                                </React.Fragment>
                            }>
                                <Typography color="secondary">
                                    Profile
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='cashIn'>
                            <ListItemIcon>
                                <LocalAtmIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Cash In Request
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='cashOut'>
                            <ListItemIcon>
                                <ReceiptLongIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText >
                                <Typography color="secondary">
                                    Cash Out Payments
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='payBills'>
                            <ListItemIcon>
                                <FactCheckIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Pay Bills
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='transactionHistory'>
                            <ListItemIcon>
                                <RestorePageIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Transaction History
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='merchants'>
                            <ListItemIcon>
                                <StorefrontIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Merchants
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='merchants'>
                            <ListItemIcon>
                                <PermContactCalendarIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Merchant Details
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='merchantMembers'>
                            <ListItemIcon>
                                <GroupsIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Merchant Members
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton onClick={() => setdropMembers(!dropMembers)}>
                            <ListItemIcon>
                                <PeopleAltIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Members
                                </Typography>
                            </ListItemText>
                            {dropMembers ? <ExpandLess color="secondary" /> : <ExpandMore color="secondary" />}
                        </ListItemButton>
                        <Collapse in={dropMembers} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Daltan Users
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 8 }} component={Link} to='superAdmins'>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Super Admins
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 8 }} component={Link} to='complianceOfficers'>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Compliance Officers
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            User Registration
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 8 }} component={Link} to='users'>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Verified
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 8 }} component={Link} to=''>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Pending Verification
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 8 }} component={Link} to=''>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Declined
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton onClick={() => setdropReport(!dropReport)}>
                            <ListItemIcon>
                                <AssessmentIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Reports
                                </Typography>
                            </ListItemText>
                            {dropReport ? <ExpandLess color="secondary" /> : <ExpandMore color="secondary" />}
                        </ListItemButton>
                        <Collapse in={dropReport} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to='cashInRequestsReport'>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Cash In Requests
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to='cashOutPaymentsReport'>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Cash Out Payments
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to='volumeOfTransactionsReport'>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            Volume of Transactions
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to=''>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            PHP 100k+ Transactions
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} component={Link} to=''>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ fontSize: 30 }} color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: -2 }}>
                                        <Typography variant="body2" color="secondary">
                                            5+ Transactions
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <Divider variant='middle' sx={{ my: 3 }} />

                        <ListItemButton component={Link} to='faq'>
                            <ListItemIcon>
                                <QuizIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    FAQ
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='contactUs'>
                            <ListItemIcon>
                                <ContactlessIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Contact Us
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </List>
                </Drawer>

                {/* MAIN Content Space */}
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Outlet />
                </Box>
            </Box>
        </ThemeProvider >
    );
}

export default function Menu() {
    return <DashboardContent />;
}