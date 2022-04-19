import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import QuizIcon from '@mui/icons-material/Quiz';
import ContactlessIcon from '@mui/icons-material/Contactless';


import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to='table'>
      <ListItemIcon>
        <LocalAtmIcon />
      </ListItemIcon>
      <ListItemText primary="Cash In Request" />
    </ListItemButton>
    <ListItemButton component={Link} to='extra'>
      <ListItemIcon>
        <ReceiptLongIcon />
      </ListItemIcon>
      <ListItemText primary="Cash Out Reqeust" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <RestorePageIcon />
      </ListItemIcon>
      <ListItemText primary="Transaction History" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <StorefrontIcon />
      </ListItemIcon>
      <ListItemText primary="Merchants" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleAltIcon />
      </ListItemIcon>
      <ListItemText primary="Members" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <QuizIcon />
      </ListItemIcon>
      <ListItemText primary="FAQ" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ContactlessIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItemButton>
  </React.Fragment>
);
