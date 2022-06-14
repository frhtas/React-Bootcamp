import { Grid, Typography, Box, FormControl, TextField, Button } from "@mui/material";
import { GridRowId } from "@mui/x-data-grid";
import React, { FormEventHandler, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { isTemplateTail } from "typescript";
import { IBookAction } from "./appRedux/reducers/BookReducer";
import { StateType } from "./appRedux/ReduxStore";
import { EBook } from "./appRedux/types/EBook";
import BookTable from "./components/BookTable";
import { IBook } from "./models/IBook";

function Dashboard() {
    // selected row id state
    const [ids, setIds] = useState<GridRowId[]>([]);

    // useRef => JSX elementlerine hakim olmak için kullanılır...
    const nameRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        nameRef.current!.focus();
    }, []);

    // use Redux
    // Reducer içerisindeki state değerine erişim sağlar...
    const bookState = useSelector((state: StateType) => state.BookReducer);

    // Reducer içerisindeki action tetiklenmesini sağlar...
    const dispatch = useDispatch();

    // book items
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");

    const fncSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const book: IBook = {
            name: name,
            surname: surname,
            phone: phone,
        };
        const sendItem: IBookAction = {
            type: EBook.BOOK_SAVE,
            payload: book,
        };
        dispatch(sendItem);
    };

    const fncDelete = () => {
        ids.forEach((item) => {
            const id = parseInt("" + item);
            const book: IBook = {
                id: id,
                name: "",
                surname: "",
                phone: "",
            };
            const sendItem: IBookAction = {
                type: EBook.BOOK_DELETE,
                payload: book,
            };
            dispatch(sendItem);
        });
    };

    return (
        <>
            <Helmet>
                <title>Book Control</title>
                <meta name="description" content="Book Page" />
            </Helmet>
            <Grid container style={{ marginTop: 5 }} spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant="h4">Address Add</Typography>
                    <Box component="form" onSubmit={fncSubmit}>
                        <FormControl fullWidth margin="normal">
                            <TextField inputRef={nameRef} onChange={(evt) => setName(evt.target.value)} type="text" id="name" variant="outlined" label="Name" required />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField onChange={(evt) => setSurname(evt.target.value)} type="text" id="surname" variant="outlined" label="Surname" required />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField onChange={(evt) => setPhone(evt.target.value)} type="text" id="phone" variant="outlined" label="Phone" required />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <Button type="submit" variant="contained" color="primary" size="large">
                                Save
                            </Button>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid container>
                        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                            <Typography variant="h4">Address List</Typography>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                            {ids.length > 0 ? (
                                <Button variant="contained" color="error" onClick={fncDelete}>
                                    Delete
                                </Button>
                            ) : null}
                        </Grid>
                    </Grid>
                    <BookTable books={bookState} setIds={setIds} />
                </Grid>
            </Grid>
            {JSON.stringify(ids)}
        </>
    );
}

export default Dashboard;
