import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, Grid, styled, TextField } from '@mui/material';

//ICONS
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),

    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogTitle-root': {
        padding: theme.spacing(2),
    },
    '& .MuiPaper-root': {
        width: theme.spacing(50),
        padding: theme.spacing(2),
    },

}));


export default function DeclineUser() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Button variant="contained" onClick={handleClickOpen} startIcon={<DoNotDisturbOnIcon />} fullWidth sx={{ mt: 3, bgcolor: '#A72A17', borderRadius: 20 }}>
                Decline
            </Button>

            <BootstrapDialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: { borderRadius: 10 }
                }}
            >
                <DialogTitle id="modal-title">
                    Decline Verification
                </DialogTitle>
                <Divider variant="middle" />
                <DialogContent sx={{textAlign: 'center'}}>
                    <DialogContentText id="modal-description" >
                        Please state your reason below.
                    </DialogContentText>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Grid container spacing={1}>
                        {/* Action Buttons */}
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color='error'
                                onClick={handleClose}
                                sx={{ borderRadius: 20 }}
                            >
                                Verify
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="text"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </BootstrapDialog>
        </div >
    );
}