import * as React from "react";
import { DataGrid, gridClasses, useGridApiRef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import styles from "./TableProjects.module.css";

const autosizeOptions = {
  includeOutliers: true,
};

const columns = [
  { field: "id", headerName: "ID", width: 90, type: "string" },
  { field: "title", headerName: "TÍTULO", width: 200, type: "string" },
  { field: "status", headerName: "STATUS", width: 180, type: "string" },
  {
    field: "date",
    headerName: "DATA",
    width: 180,
    type: "string",
    sortable: false,
  },
  {
    field: "description",
    headerName: "DESCRIÇÃO",
    width: 300,
    type: "string",
  },
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

export const TableProjects = ({ rows }) => {
  const apiRef = useGridApiRef();
  return (
    <div className={styles.mainTable}>
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
  );
};
