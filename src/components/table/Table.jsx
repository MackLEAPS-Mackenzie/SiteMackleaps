import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./Table.module.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E1001E",
    },
    common: {
      black: "#000",
    },
  },
});

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
  },
}));

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
    <ThemeProvider theme={theme}>
      <div className={styles.mainTable}>
        <StyledDataGrid
          editMode="row"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </ThemeProvider>
  );
};
