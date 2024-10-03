// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import './SubscribeDialog.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const SubscribeDialog = ({ open, onClose, dialogType, dialogMessage }) => {
  const getIcon = () => {
    if (dialogType === 'success') {
      return <CheckCircleOutlinedIcon id="check-icon" />;
    } else if (dialogType === 'email existed') {
      return <CancelOutlinedIcon id="check-icon" />;
    }
    return <ErrorOutlineOutlinedIcon id="check-icon" />;
  };

  return (
    <div id="dialog-main-container">
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        id="subscribe-dialog-container"
      >
        <div className="inner-container">
          {getIcon()}
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
          <div className="title-content-div">
            <DialogTitle sx={{ m: 0, p: 2 }}>
              {dialogType === 'success'
                ? 'Thank you for your interest in Peer2Play'
                : dialogType === 'email existed'
                ? 'Email Already Exists!'
                : 'Invalid Email Format'}
            </DialogTitle>
            <DialogContent>
              <Typography gutterBottom className="dialog-content">
                {dialogMessage}
              </Typography>
            </DialogContent>
          </div>
          <DialogActions id="btn-container">
            <Button autoFocus onClick={onClose} id="thanks-btn" disableRipple>
              {dialogType === 'success' ? 'Thanks!' : 'Close'}
            </Button>
          </DialogActions>
        </div>
      </BootstrapDialog>
    </div>
  );
};

SubscribeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  dialogType: PropTypes.string.isRequired,
  dialogMessage: PropTypes.string.isRequired,
};

export default SubscribeDialog;
