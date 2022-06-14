import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { IBook } from "../models/IBook";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "name", headerName: "Name", width: 100 },
    { field: "surname", headerName: "Surname", width: 100 },
    { field: "phone", headerName: "Phone", type: "number", width: 130 },
];

function BookTable(item: { books: IBook[]; setIds: React.Dispatch<React.SetStateAction<GridRowId[]>> }) {
    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid rows={item.books} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection onSelectionModelChange={(items) => item.setIds(items)} />
        </div>
    );
}

export default BookTable;
