import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/system";
import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { colorPrimary } from "../../../values/Colors";
import DaftarPengunjungLogic from "./DaftarPengunjungLogic";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { constantKelengkapanBerkas, dataDummy } from "../../../values/Constant";
import { constantKecamatan } from "../../../values/Constant";

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

const DaftarPengunjungPage = () => {
  const { func, value } = DaftarPengunjungLogic();

  return (
    <>
      <Typography variant="h5">Daftar Pengunjung</Typography>

      <Stack sx={{ mb: 4, mt: 4 }} direction="horizontal">
        <FormControl sx={{ mr: 2, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-label">Kecamatan</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Kecamatan"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 170 }}>
          <InputLabel id="demo-simple-select-label">Jenis layanan</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Jenis layanan"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Stack alignItems="flex-end" style={{ width: "100vw" }}>
          <TextField variant="outlined" label="Input NIK / No. KK" />
        </Stack>
      </Stack>

      <ShowData />

      <TambahData func={func} value={value} />

      <Stack alignItems="flex-end" sx={{ mt: 4 }}>
        <Button
          variant="contained"
          style={{ color: "white" }}
          onClick={() => func.handleClickOpen()}
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
        {dataDummy.map((row) => (
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
  formControlStyle: {
    margin: "16px 32px",
  },
});

const TambahData = ({ func, value }) => {
  const classes = tambahDataStyle();
  const { checkNotValid, messageNotValid } = func.validator;
  const { nama_petugas } = value.input;
  return (
    <Dialog open={value.open} onClose={func.handleClose}>
      <Stack alignItems="center">
        <DialogTitle>Tambah Data</DialogTitle>
      </Stack>

      <DialogContent
        sx={{
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "550px" },
          }}
        >
          <TextField
            name="nama_petugas"
            label="Nama Petugas"
            type="text"
            variant="outlined"
            onChange={(e) => func.onChange(e, 0)}
            required
            value={nama_petugas}
            error={checkNotValid(nama_petugas)}
            helperText={messageNotValid(nama_petugas)}
          />

          <TextField
            id="namaPengunjung"
            label="Nama pengunjung"
            type="text"
            variant="outlined"
          />

          <TextField id="noKK" label="No.KK" type="email" variant="outlined" />

          <TextField id="nik" label="NIK" type="text" variant="outlined" />

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
            label="Alamat tempat tinggal"
            type="text"
            variant="outlined"
          />

          <TextField
            id="name"
            label="Nomor Telepon"
            type="text"
            variant="outlined"
          />

          <FormControl className={classes.selectStyle}>
            <InputLabel id="demo-simple-select-label">Jenis layanan</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Jenis layanan"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <Typography
            sx={{
              mt: 3,
              ml: 2,
              fontWeight: 600,
            }}
          >
            Kelengkapan berkas
          </Typography>

          <Stack
            direction="horizontal"
            justifyContent="space-between"
            className={classes.stackRoot}
          >
            <FormControl
              className={classes.formControlStyle}
              component="fieldset"
              variant="standard"
            >
              {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
              <FormGroup>
                {constantKelengkapanBerkas[0].map((label) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={gilad}
                        // onChange={handleChange}
                        name="gilad"
                      />
                    }
                    label={label}
                  />
                ))}
              </FormGroup>
              {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>

            <FormControl
              className={classes.formControlStyle}
              component="fieldset"
              variant="standard"
            >
              {/* <FormLabel component="legend" hidden>
                test
              </FormLabel> */}
              <FormGroup>
                {constantKelengkapanBerkas[1].map((label) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={gilad}
                        // onChange={handleChange}
                        name="gilad"
                      />
                    }
                    label={label}
                  />
                ))}
              </FormGroup>
              {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
          </Stack>

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
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={func.handleClose}
          className={`${classes.rootModalBtn}  ${classes.cancelStyle}`}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={func.onTambah}
          className={`${classes.rootModalBtn}  ${classes.tambahStyle}`}
        >
          Tambah
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DaftarPengunjungPage;
