import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { colorPrimary } from "../../../values/Colors";

import DtksLogic from "./DtksLogic";
import { DataGrid } from "@mui/x-data-grid";
import ModalNotif from "../../../component/modal/ModalNotif";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: colorPrimary,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const columns = [
  { field: "NIK", headerName: "NIK", width: 150 },
  { field: "NOKK", headerName: "NOKK", width: 150 },
  { field: "NAMA", headerName: "NAMA", width: 150 },
  { field: "KECAMATAN", headerName: "KECAMATAN", width: 150 },
  { field: "DESA/KELUARAHAN", headerName: "DESA/KELUARAHAN", width: 150 },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DtksPage = () => {
  const { value, func } = DtksLogic();
  const { open, variant, message } = value.notif;
  return (
    <>
      <Typography variant="h5">Cek DTKS</Typography>
      <Stack
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4, mt: 4 }}
      >
        <Stack display="flex" direction="column" alignItems="center">
          <Button variant="outlined" onClick={func.onClickUpload}>
            Upload Excell
          </Button>
          <input
            type="file"
            ref={value.inputUpload}
            style={{ display: "none" }}
            onChange={func.onChangeInputUpload}
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          />
          {false ? (
            <Typography color="error" sx={{ mt: 1 }}>
              File tidak support
            </Typography>
          ) : null}
        </Stack>

        <TextField
          name="filter_nik_kk"
          variant="outlined"
          label="Input NIK / No. KK"
          onChange={func.onChangeFilter}
          onKeyDown={func.onSearch}
        />
      </Stack>

      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table" si>
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell align="right">Nama</StyledTableCell>
              <StyledTableCell align="right">Alamat</StyledTableCell>
              <StyledTableCell align="right">Bantuan</StyledTableCell>
              <StyledTableCell align="right">No.KK</StyledTableCell>
              <StyledTableCell align="right">NIK</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {value.data.map((row) => (
              <StyledTableRow key={row.no}>
                <StyledTableCell component="th" scope="row">
                  {row.no}
                </StyledTableCell>
                <StyledTableCell align="right">{row["NAMA"]}</StyledTableCell>
                <StyledTableCell align="right">{row.alamat}</StyledTableCell>
                <StyledTableCell align="right">{row.bantuan}</StyledTableCell>
                <StyledTableCell align="right">{row.nokk}</StyledTableCell>
                <StyledTableCell align="right">{row.nik}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={value.data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowId={(row) => row["NIK"]}
        />
      </div>
      <Stack alignItems="flex-end" sx={{ mt: 4 }}>
        <Button variant="contained" style={{ color: "white" }}>
          Download Data
        </Button>
      </Stack>

      {/* modal */}
      <ModalNotif
        open={open}
        setOpen={value.setNotif}
        variant={variant}
        message={message}
        onSucces={func.resSucces}
      />
    </>
  );
};

export default DtksPage;
