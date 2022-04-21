import { Table, TableHead, TableRow, TableCell, TableBody, Box, Grid, Typography, Divider, FormLabel, TextField, Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Accordion, AccordionDetails, AccordionSummary, Stack, AccordionActions } from '@mui/material';
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { fontSize } from '@mui/system';


export default function FAQ() {
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
                            Frequently Asked
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <Divider variant="fullWidth" />
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <Accordion sx={{ p: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography fontWeight={'bold'} variant='inherit'>Q: How can I create a DCash Merchant Account?</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ mb: 2 }}>
                                <Typography variant='body1' sx={{ ml: 3 }} alignItems="baseline">
                                    <Grid container spacing={2}>
                                        <Grid item xs={0.3}>
                                            <ArrowRightIcon sx={{ pb: 1, fontSize: 30 }} />
                                        </Grid>
                                        <Grid item xs={11}>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ex itaque quo animi qui? Culpa aliquid soluta at praesentium distinctio fugiat inventore! Iure ullam placeat enim atque, voluptatibus itaque neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut placeat in dolorum qui vitae natus. In officia saepe nisi unde adipisci labore voluptatum ratione necessitatibus veritatis, fugiat recusandae consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos repellat cupiditate distinctio assumenda cumque nostrum minima ea porro! Labore ipsam nisi voluptatem libero, tenetur commodi qui assumenda molestiae quas.
                                        </Grid>
                                    </Grid>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ p: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography fontWeight={'bold'} variant='inherit'>Q: How do I process cash in request?</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ mb: 2 }}>
                                <Typography variant='body1' sx={{ ml: 3 }} alignItems="baseline">
                                    <Grid container spacing={2}>
                                        <Grid item xs={0.3}>
                                            <ArrowRightIcon sx={{ pb: 1, fontSize: 30 }} />
                                        </Grid>
                                        <Grid item xs={11}>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ex itaque quo animi qui? Culpa aliquid soluta at praesentium distinctio fugiat inventore! Iure ullam placeat enim atque, voluptatibus itaque neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut placeat in dolorum qui vitae natus. In officia saepe nisi unde adipisci labore voluptatum ratione necessitatibus veritatis, fugiat recusandae consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos repellat cupiditate distinctio assumenda cumque nostrum minima ea porro! Labore ipsam nisi voluptatem libero, tenetur commodi qui assumenda molestiae quas.
                                        </Grid>
                                    </Grid>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ p: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography fontWeight={'bold'} variant='inherit'> Q: How do I process cash out request?</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ mb: 2 }}>
                                <Typography variant='body1' sx={{ ml: 3 }} alignItems="baseline">
                                    <Grid container spacing={2}>
                                        <Grid item xs={0.3}>
                                            <ArrowRightIcon sx={{ pb: 1, fontSize: 30 }} />
                                        </Grid>
                                        <Grid item xs={11}>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ex itaque quo animi qui? Culpa aliquid soluta at praesentium distinctio fugiat inventore! Iure ullam placeat enim atque, voluptatibus itaque neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut placeat in dolorum qui vitae natus. In officia saepe nisi unde adipisci labore voluptatum ratione necessitatibus veritatis, fugiat recusandae consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos repellat cupiditate distinctio assumenda cumque nostrum minima ea porro! Labore ipsam nisi voluptatem libero, tenetur commodi qui assumenda molestiae quas.
                                        </Grid>
                                    </Grid>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ p: 1 }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography fontWeight={'bold'} variant='inherit'>Q: How do I void a transactions?</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ mb: 2 }}>
                                <Typography variant='body1' sx={{ ml: 3 }} alignItems="baseline">
                                    <Grid container spacing={2}>
                                        <Grid item xs={0.3}>
                                            <ArrowRightIcon sx={{ pb: 1, fontSize: 30 }} />
                                        </Grid>
                                        <Grid item xs={11}>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ex itaque quo animi qui? Culpa aliquid soluta at praesentium distinctio fugiat inventore! Iure ullam placeat enim atque, voluptatibus itaque neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut placeat in dolorum qui vitae natus. In officia saepe nisi unde adipisci labore voluptatum ratione necessitatibus veritatis, fugiat recusandae consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos repellat cupiditate distinctio assumenda cumque nostrum minima ea porro! Labore ipsam nisi voluptatem libero, tenetur commodi qui assumenda molestiae quas.
                                        </Grid>
                                    </Grid>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                </Grid>
            </React.Fragment>
        </Box>
    );
}
