import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import { Close, Logout } from "@mui/icons-material";

export default function LogoutAlert(item: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const navigate = useNavigate();

    const fncLogout = () => {
        sessionStorage.removeItem("user");
        localStorage.removeItem("user");
        navigate("/");
    };
    const handleClose = () => {
        item.setOpen(false);
    };

    return (
        <div>
            <Dialog open={item.open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">Are you sure logout?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">Are you sure logout, detail.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} startIcon={<Close />}>
                        Cancel
                    </Button>
                    <Button onClick={fncLogout} autoFocus startIcon={<Logout />}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
