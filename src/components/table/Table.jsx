import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./Table.module.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//   components: {
//     MuiDataGrid: {
//       styleOverrides: {
//         columnHeaders: {
//           backgroundColor: "#E1001E",
//           color: "#ffffff",
//         },
//       },
//     },
//   },
// });

const columns = [
  { field: "id", headerName: "ID", width: 80, type: "string" },
  { field: "titulo", headerName: "TÍTULO", width: 330, type: "string" },
  { field: "autor", headerName: "AUTOR", width: 180, type: "string" },
  { field: "data", headerName: "DATA", width: 180, type: "string" },
  { field: "status", headerName: "STATUS", width: 120, type: "string" },
  {
    field: "editar",
    headerName: "EDITAR",
    width: 80,
    filterable: false,
    sortable: false,
    renderCell: (params) => (
      <Button>
        <img src="./edit.svg" alt="Editar" className={styles.editButton} />
      </Button>
    ),
  },
];

const rows = [
  {
    id: 1,
    titulo: "Lançamento - Livros FCI",
    autor: "Administrador",
    data: "01/01/2024",
    status: "Rascunho",
  },
  {
    id: 2,
    titulo: "Processo seletivo - Residência",
    autor: "Administrador",
    data: "02-02-2024",
    status: "Publicado",
  },
  {
    id: 3,
    titulo: "Edital IC",
    autor: "Administrador",
    data: "03/03/2024",
    status: "Oculto",
  },
  {
    id: 4,
    titulo: "Lançamento - Livros FCI",
    autor: "Administrador",
    data: "04/04/2024",
    status: "Rascunho",
  },
  {
    id: 5,
    titulo: "Processo seletivo - Residência",
    autor: "Administrador",
    data: "05/05/2024",
    status: "Publicado",
  },
  {
    id: 6,
    titulo: "Edital IC",
    autor: "Administrador",
    data: "06/06/2024",
    status: "Oculto",
  },
  {
    id: 7,
    titulo: "Lançamento - Livros FCI",
    autor: "Administrador",
    data: "07/07/2024",
    status: "Rascunho",
  },
  {
    id: 8,
    titulo: "Processo seletivo - Residência",
    autor: "Administrador",
    data: "08/08/2024",
    status: "Publicado",
  },
  {
    id: 9,
    titulo: "Edital IC",
    autor: "Administrador",
    data: "09/09/2024",
    status: "Oculto",
  },
];

export const DataTable = () => {
  return (
    //<ThemeProvider theme={theme}>
    <div className={styles.mainTable}>
      <DataGrid
        editMode="row"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        //checkboxSelection
      />
    </div>
    //</ThemeProvider>
  );
};
