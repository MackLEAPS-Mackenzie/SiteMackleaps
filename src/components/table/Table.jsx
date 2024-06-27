import * as React from "react";
import { DataGrid, gridClasses, useGridApiRef } from "@mui/x-data-grid";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import styles from "./Table.module.css";

const autosizeOptions = {
  includeOutliers: true,
};

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#E1001E",
//     },
//     common: {
//       black: "#000",
//     },
//   },
// });

// const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
//   "& .MuiDataGrid-columnHeaders": {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.black,
//   },
// }));

const columns = [
  { field: "id", headerName: "ID", width: 90, type: "string" },
  { field: "title", headerName: "TÍTULO", width: 200, type: "string" },
  { field: "author", headerName: "AUTOR", width: 180, type: "string" },
  {
    field: "date",
    headerName: "DATA",
    width: 180,
    type: "string",
    sortable: false,
  },
  { field: "description", headerName: "DESCRIÇÃO", width: 300, type: "string" },
  {
    field: "editar",
    headerName: "EDITAR",
    width: 100,
    filterable: false,
    sortable: false,
    renderCell: (params) => (
      <Button>
        <img src="./editNew.svg" alt="Editar" className={styles.editButton} />
      </Button>
    ),
  },
];

// const rows = [
//   {
//     id: 1,
//     title: "Lançamento - Livros FCI",
//     author: "Administrador",
//     data: "01/01/2024",
//     status: "Rascunho",
//   },
//   {
//     id: 2,
//     title: "Processo seletivo - Residência",
//     author: "Administrador",
//     data: "02-02-2024",
//     status: "Publicado",
//   },
//   {
//     id: 3,
//     title: "Edital IC",
//     author: "Administrador",
//     data: "03/03/2024",
//     status: "Oculto",
//   },
//   {
//     id: 4,
//     title: "Lançamento - Livros FCI",
//     author: "Administrador",
//     data: "04/04/2024",
//     status: "Rascunho",
//   },
//   {
//     id: 5,
//     title: "Processo seletivo - Residência",
//     author: "Administrador",
//     data: "05/05/2024",
//     status: "Publicado",
//   },
//   {
//     id: 6,
//     title: "Edital IC",
//     author: "Administrador",
//     data: "06/06/2024",
//     status: "Oculto",
//   },
//   {
//     id: 7,
//     title: "Lançamento - Livros FCI",
//     author: "Administrador",
//     data: "07/07/2024",
//     status: "Rascunho",
//   },
//   {
//     id: 8,
//     title: "Processo seletivo - Residência",
//     author: "Administrador",
//     data: "08/08/2024",
//     status: "Publicado",
//   },
//   {
//     id: 9,
//     title: "Edital IC",
//     author: "Administrador",
//     data: "09/09/2024",
//     status: "Oculto",
//   },
// ];

export const DataTable = ({ rows }) => {
  const apiRef = useGridApiRef();
  return (
    //<ThemeProvider theme={theme}>
    <div className={styles.mainTable}>
      {/* <StyledDataGrid
        editMode="row"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      /> */}
      <DataGrid
        editMode="row"
        rows={rows}
        columns={columns}
        getRowHeight={() => "auto"}
        autosizeOptions={autosizeOptions}
        sx={{
          [`& .${gridClasses.cell}`]: {
            py: 0.5,
          },
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
    //</ThemeProvider>
  );
};
