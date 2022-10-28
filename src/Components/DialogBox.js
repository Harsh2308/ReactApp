import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
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
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DialogBox(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        View Profile
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Complete Profile
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>Username: {props.item.username}</Typography>
          <Typography gutterBottom>Email: {props.item.email}</Typography>
          <Typography gutterBottom>Phone Number: {props.item.phone}</Typography>
          <Typography gutterBottom>Website: {props.item.website}</Typography>
          <Typography gutterBottom>Address </Typography>
          <Typography gutterBottom>
            Street: {props.item.address.street}
          </Typography>
          <Typography gutterBottom>City: {props.item.address.city}</Typography>
          <Typography gutterBottom>
            Zipcode: {props.item.address.zipcode}
          </Typography>
          <Typography gutterBottom>Company Details</Typography>
          <Typography gutterBottom>
            Company Name: {props.item.company.name}
          </Typography>
          <Typography gutterBottom>
            CatchPhrase: {props.item.company.catchPhrase}
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
