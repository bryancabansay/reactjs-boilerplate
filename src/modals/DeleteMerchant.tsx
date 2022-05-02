import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, Grid, styled } from '@mui/material';
import { FC } from 'react';
import Merchants from '../pages/Merchants/Merchants';

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

interface DeleteMerchantProps {
    action: boolean;
}


const DeleteMerchant:FC<DeleteMerchantProps> = (props) => {
    const [open, setOpen] = React.useState(false);
    
    if (props.action == true) {
        setOpen(true);        
        console.log("Action passed in DELETE MODAL Merchant");
    }
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <BootstrapDialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: { borderRadius: 10 }
                }}
            >
                <DialogTitle id="modal-title">
                    Delete Merchant
                </DialogTitle>
                <Divider variant="middle" />
                <DialogContent>
                    <DialogContentText id="modal-description" >
                        Do you wish to delete this merchant?
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
                                Delete
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

export default DeleteMerchant;