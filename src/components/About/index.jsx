import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const AboutButton = styled(Button)(() => ({
  backgroundColor: "transparent !important",
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function About() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AboutButton variant="text" startIcon={<InfoIcon />} onClick={handleClickOpen}>
        About
      </AboutButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          About TeamPot Daily
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom align='justify' variant='h6'>
          The purpose of this application is to carry out a dynamic daily, 
          with a random team member being chosen to moderate. 
          The proposal so is that the teammate who took the longest 
          should be the one to put TeamPot in the next meeting.
          </Typography>
          <Typography gutterBottom>
            <b>Developed by:</b> Jeremias J. E. Jalil
          </Typography>
          <Typography gutterBottom>
            <b> Version:</b>: 0.1
          </Typography>
          <Typography gutterBottom>
            <b>Team</b>: "Contactabilidad - Santander Tecnología"
          </Typography>
          <Typography gutterBottom>
            <a href="https://gitlab.ar.bsch/citas/teampot-daily/teampot-daily" target="_blank" rel="noreferrer">Link GitLab repository</a>
            </Typography>
            <Typography gutterBottom>
            <a href="https://santander-tecno-ar.slack.com/archives/C03KYAJ5AFK" target="_blank" rel="noreferrer">Slack</a>

          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
