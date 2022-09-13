import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/system";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { colorPrimary } from "../../../values/Colors";
import PengusulanKisLogic from "./PengusulanKisLogic";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { makeStyles } from "@mui/styles";
import { constantJenisKelamin } from "../../../values/Constant";

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

function createData(no, nama, alamat, bantuan, nokk, nik, tanggal) {
  return { no, nama, alamat, bantuan, nokk, nik, tanggal };
}

const rows = [
  createData(
    1,
    "Reski Arwah",
    "Tanuntung",
    "KIS",
    "55555555",
    "730205201199002",
    "09/07/2022"
  ),
];

const PengusulanKisPage = () => {
  const { func, value } = PengusulanKisLogic();

  // const [value1, setValue] = (React.useState < Date) | (null > null);
  return (
    <>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Pengusulan KIS
      </Typography>
      {/* <Stack alignItems="flex-end" sx={{ mb: 4 }}>
        <TextField variant="outlined" label="Input NIK / No. KK" />
      </Stack> */}

      <ShowData />

      <TambahData open={value.open} handleClose={func.handleClose} />

      <Stack alignItems="flex-end" sx={{ mt: 4 }}>
        <Button
          variant="contained"
          style={{ color: "white" }}
          onClick={func.handleClickOpen}
        >
          Tambah Data
        </Button>
      </Stack>
    </>
  );
};

const ShowData = () => (
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
          <StyledTableCell align="right">Tanggal</StyledTableCell>
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
            <StyledTableCell align="right">{row.tanggal}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const tambahDataStyle = makeStyles({
  rootModalBtn: {
    border: 0,
    borderRadius: 4,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    width: 100,
  },
  cancelStyle: {
    background: "linear-gradient(45deg, #FE2131 30%, #FE2131 90%)",
  },
  tambahStyle: {
    background: "linear-gradient(45deg, #44FF33 30%, #44FF33 90%)",
  },
  selectStyle: {
    marginLeft: 8,
    minWidth: 550,
  },
  stackRoot: {
    minWidth: 564,
  },
});

const TambahData = ({ open, handleClose }) => {
  const classes = tambahDataStyle();
  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack alignItems="center">
        <DialogTitle>Tambah Data</DialogTitle>
      </Stack>
      <DialogContent
        sx={{
          overflowX: "hidden",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "550px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="noKK" label="No.KK" type="email" variant="outlined" />
          <TextField id="nik" label="NIK" type="email" variant="outlined" />
          <TextField
            id="name"
            label="Nama lengkap"
            type="email"
            variant="outlined"
          />
          <FormControl className={classes.selectStyle}>
            <InputLabel id="demo-simple-select-label">PISAT</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="PISAT"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="tempat-lahir"
            label="Tempat lahir"
            type="email"
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Tanggal lahir"
              // value={value1}
              onChange={(newValue) => {
                // setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <FormControl className={classes.selectStyle}>
            <InputLabel id="demo-simple-select-label">Jenis Kelamin</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Jenis Kelamin"
              // onChange={handleChange}
            >
              {constantJenisKelamin.map((data) => (
                <MenuItem value={data}>{data}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.selectStyle} sx={{ mt: 1 }}>
            <InputLabel id="demo-simple-select-label">Status Kawin</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Status Kawin"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="name"
            label="Alamat tempat tinggal"
            type="email"
            variant="outlined"
          />
          <Stack
            direction="horizontal"
            justifyContent="space-between"
            className={classes.stackRoot}
          >
            <TextField id="name" label="RW" type="email" variant="outlined" />
            <TextField
              id="name"
              label="RT   "
              type="email"
              variant="outlined"
            />
          </Stack>
          <TextField
            id="name"
            label="Kode pos"
            type="email"
            variant="outlined"
          />
          <Stack
            direction="horizontal"
            justifyContent="space-between"
            className={classes.stackRoot}
          >
            <TextField
              id="name"
              label="Kelurahan"
              type="text"
              variant="outlined"
            />
            <TextField
              id="name"
              label="Kecamatan"
              type="text"
              variant="outlined"
            />
          </Stack>
          <TextField
            id="name"
            label="Nomor Telepon"
            type="text"
            variant="outlined"
          />
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={handleClose}
          className={`${classes.rootModalBtn}  ${classes.cancelStyle}`}
        >
          Cancel
        </Button>
        <Button
          onClick={handleClose}
          className={`${classes.rootModalBtn}  ${classes.tambahStyle}`}
        >
          Tambah
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PengusulanKisPage;
