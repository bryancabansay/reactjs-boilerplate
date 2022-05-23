import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, Grid, styled } from '@mui/material';

//ICONS
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

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


interface IDeactivateMemberAccount {
    component: string
}


const DeactivateMemberAccount = (props: IDeactivateMemberAccount) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>

            {props.component == 'button' ?
                <Button variant="contained" onClick={handleClickOpen} startIcon={<DoDisturbOnIcon />} fullWidth sx={{ mt: 3, bgcolor: '#A72A17', borderRadius: 20 }}>
                    Deactivate
                </Button> : 
                <DoDisturbOnIcon onClick={handleClickOpen} />
            }

            <BootstrapDialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: { borderRadius: 10 }
                }}
            >
                <DialogTitle id="modal-title">
                    Deactivate Member Account
                </DialogTitle>
                <Divider variant="middle" />
                <DialogContent>
                    <DialogContentText id="modal-description" >
                        Are you sure you wish to proceed with the account deactivation?
                    </DialogContentText>
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
                                Deactivate
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

export default DeactivateMemberAccount;