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
import { useEffect } from "react";
import { getLocalItem, logged, setLocalItem } from "../../../values/Utilitas";
import { useNavigate } from "react-router-dom";

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

function createData(no, nama, alamat, bantuan, nokk, nik) {
  return { no, nama, alamat, bantuan, nokk, nik };
}

const rows = [
  createData(
    1,
    "Reski Arwah",
    "Tanuntung",
    "KIS",
    "55555555",
    "730205201199002"
  ),
  createData(
    1,
    "Reski Arwah",
    "Tanuntung",
    "KIS",
    "55555555",
    "730205201199002"
  ),
];

const DtksPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const movePage = getLocalItem("move-page");
    logged(`movePage => ${movePage}`);
    if (movePage !== "null") {
      navigate(movePage);
    }
    setLocalItem("move-page", null);
  }, []);

  return (
    <>
      <Typography variant="h5">Cek DTKS</Typography>
      <Stack alignItems="flex-end" sx={{ mb: 4 }}>
        <TextField variant="outlined" label="Input NIK / No. KK" />
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
            {rows.map((row) => (
              <StyledTableRow key={row.no}>
                <StyledTableCell component="th" scope="row">
                  {row.no}
                </StyledTableCell>
                <StyledTableCell align="right">{row.nama}</StyledTableCell>
                <StyledTableCell align="right">{row.alamat}</StyledTableCell>
                <StyledTableCell align="right">{row.bantuan}</StyledTableCell>
                <StyledTableCell align="right">{row.nokk}</StyledTableCell>
                <StyledTableCell align="right">{row.nik}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack alignItems="flex-end" sx={{ mt: 4 }}>
        <Button variant="contained" style={{ color: "white" }}>
          Download Data
        </Button>
      </Stack>
    </>
  );
};

export default DtksPage;
