import { Close } from "@mui/icons-material";
import { Alert, Box, Button, Checkbox, Collapse, Container, FormControl, FormControlLabel, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "./Services";
import { encrypt } from "./Util";

function Login() {
    // user navigate
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    // login status & message
    const [loginStatus, setLoginStatus] = useState(false);
    const [loginMessage, setLoginMessage] = useState("");

    const fncSend = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        userLogin(email, password)
            .then((res) => {
                const user = res.data.user[0];
                const status = user.durum;
                const message = user.mesaj;

                setLoginMessage(message);

                if (status) {
                    if (user.bilgiler) {
                        const stBilgiler = JSON.stringify(user.bilgiler);
                        sessionStorage.setItem("user", encrypt(stBilgiler));
                        if (remember) {
                            localStorage.setItem("user", encrypt(stBilgiler));
                        }
                        navigate("/dashboard");
                    }
                } else {
                    setLoginStatus(true);
                }
            })
            .catch((err) => {
                setLoginStatus(true);
                setLoginMessage(err.message);
            });
    };

    // alert function
    const dismissAlert = () => {
        return (
            <Collapse in={loginStatus}>
                <Alert
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setLoginStatus(false);
                            }}
                        >
                            <Close fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    {loginMessage}
                </Alert>
            </Collapse>
        );
    };

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography variant="h4">User Login</Typography>
                    {dismissAlert()}
                    <Box component="form" onSubmit={fncSend}>
                        <FormControl fullWidth margin="normal">
                            <TextField onChange={(evt) => setEmail(evt.target.value)} type="email" id="email" variant="outlined" label="E-mail" required />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField onChange={(evt) => setPassword(evt.target.value)} type="password" id="password" variant="outlined" label="Password" required />
                        </FormControl>
                        <FormControl>
                            <FormControlLabel control={<Checkbox onChange={() => setRemember(!remember)} defaultChecked={remember} value="remember" color="primary" />} label="Remember Me!"></FormControlLabel>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <Button type="submit" variant="contained" color="primary" size="large">
                                Login
                            </Button>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
            </Grid>
        </Container>
    );
}

export default Login;
