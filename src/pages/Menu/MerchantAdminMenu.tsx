import { List, ListItemButton, ListItemIcon, ListItemText, Typography, Collapse, Divider, AppBar, Box, CssBaseline, Drawer, ThemeProvider, Toolbar, createTheme } from '@mui/material';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';

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

const MerchantAdminMenu = () => {

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
                            to='indexProfile/merchantAdminProfile'>
                            <ListItemIcon>
                                <AccountCircleIcon style={{ fontSize: 60 }} color="secondary" />
                            </ListItemIcon>
                            <ListItemText sx={{ml: 1}} secondary={
                                <React.Fragment>
                                    <Typography
                                        variant="body2"
                                        color="secondary"
                                        fontWeight={'bold'}
                                    >
                                        {/* Change this dynamically */}
                                        Core Pacific Admin
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="secondary"
                                    >
                                        {/* Change this dynamically */}
                                        Ayala Center Cebu
                                    </Typography>
                                </React.Fragment>
                            }>
                                <Typography color="secondary" fontSize={15}>
                                    {/* Change this dynamically */}
                                    John Doe
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='cashInMerchantAdmin'>
                            <ListItemIcon>
                                <LocalAtmIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color="secondary">
                                    Cash In Request
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                        <ListItemButton component={Link} to='cashOutMerchantAdmin'>
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
                        <ListItemButton component={Link} to='merchantDetailsMerchantAdmin'>
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
    )
}

export default MerchantAdminMenu;