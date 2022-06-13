import { Grid, Typography, Box, FormControl, TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import React, { useState } from "react";
import BookTable from "./components/BookTable";

function Dashboard() {
    // book items
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");

    const fncSubmit = () => {
        console.log(name, surname, phone);
    }

    return (
        <>
            <Grid container style={{ marginTop: 5 }} spacing={5}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant="h4">Address Add</Typography>
                    <Box component="form" onSubmit={fncSubmit}>
                        <FormControl fullWidth margin="normal">
                            <TextField onChange={(evt) => setName(evt.target.value)} type="text" id="name" variant="outlined" label="Name" required />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField onChange={(evt) => setSurname(evt.target.value)} type="text" id="surname" variant="outlined" label="Surname" required />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField onChange={(evt) => setPhone(evt.target.value)} type="text" id="phone" variant="outlined" label="Phone" required />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <Button type="submit" variant="contained" color="primary" size="large">
                                Send
                            </Button>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant="h4">Address List</Typography>
                    <BookTable />
                </Grid>
            </Grid>
        </>
    );
}

export default Dashboard;
