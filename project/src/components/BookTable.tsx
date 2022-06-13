import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 100 },
    { field: "surname", headerName: "Surname", width: 100 },
    { field: "phone", headerName: "Phone", type: "number", width: 130 },
];

const rows = [
    { id: 1, surname: "Snow", name: "Jon", phone: 35 },
    { id: 2, surname: "Lannister", name: "Cersei", phone: 42 },
    { id: 3, surname: "Lannister", name: "Jaime", phone: 45 },
    { id: 4, surname: "Stark", name: "Arya", phone: 16 },
    { id: 5, surname: "Targaryen", name: "Daenerys", phone: null },
    { id: 6, surname: "Melisandre", name: null, phone: 150 },
    { id: 7, surname: "Clifford", name: "Ferrara", phone: 44 },
    { id: 8, surname: "Frances", name: "Rossini", phone: 36 },
    { id: 9, surname: "Roxie", name: "Harvey", phone: 65 },
];

function BookTable() {
    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    );
}

export default BookTable;
