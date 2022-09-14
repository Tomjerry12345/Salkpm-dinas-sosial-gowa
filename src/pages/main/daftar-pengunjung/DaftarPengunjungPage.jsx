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
  FormHelperText,
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
import {
  constantJenisLayanan,
  constantKelengkapanBerkas,
  constantKelurahan,
} from "../../../values/Constant";
import { constantKecamatan } from "../../../values/Constant";
import "./DaftarPengunjung.scss";
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

const DaftarPengunjungPage = () => {
  const { func, value } = DaftarPengunjungLogic();
  const { open, variant, message } = value.notif;

  return (
    <>
      <Typography variant="h5">Daftar Pengunjung</Typography>

      <Stack sx={{ mb: 4, mt: 4 }} direction="horizontal">
        <FormControl sx={{ mr: 2, minWidth: 150 }}>
          <InputLabel id="filter_kecamatan">Kecamatan</InputLabel>
          <Select labelId="filter_kecamatan" label="Kecamatan">
            {constantKecamatan.map((kec) => (
              <MenuItem value={kec}>{kec}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 170 }}>
          <InputLabel id="filter_jenis_layanan">Jenis layanan</InputLabel>
          <Select labelId="filter_jenis_layanan" label="Jenis layanan">
            {constantJenisLayanan.map((value) => (
              <MenuItem value={value}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack alignItems="flex-end" style={{ width: "100vw" }}>
          <TextField variant="outlined" label="Input NIK / No. KK" />
        </Stack>
      </Stack>

      <ShowData value={value} />

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

const ShowData = ({ value }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>No</StyledTableCell>
          <StyledTableCell align="center">Nama</StyledTableCell>
          <StyledTableCell align="center">Alamat</StyledTableCell>
          <StyledTableCell align="center">Jenis layanan</StyledTableCell>
          <StyledTableCell align="center">No.KK</StyledTableCell>
          <StyledTableCell align="center">NIK</StyledTableCell>
          <StyledTableCell align="center">Tanggal Lahir</StyledTableCell>
          <StyledTableCell align="center"></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {value.data &&
          value.data.map((row, i) => (
            <StyledTableRow key={i + 1}>
              <StyledTableCell component="th" scope="row">
                {i + 1}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.nama_pengunjung}
              </StyledTableCell>
              <StyledTableCell align="center">{row.alamat}</StyledTableCell>
              <StyledTableCell align="center">
                {row.jenis_layanan}
              </StyledTableCell>
              <StyledTableCell align="center">{row.no_kk}</StyledTableCell>
              <StyledTableCell align="center">{row.nik}</StyledTableCell>
              <StyledTableCell align="center">
                {row.tanggal_lahir}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="outlined">Detail</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const TambahData = ({ func, value }) => {
  const { input, open, indexKecamatan } = value;
  const {
    onError,
    onHelperText,
    disableButton,
    onChange,
    onTambah,
    handleClose,
    onChangeDate,
  } = func;
  const {
    nama_petugas,
    nama_pengunjung,
    no_kk,
    nik,
    kelurahan,
    kecamatan,
    alamat,
    no_telpon,
    jenis_layanan,
    kelengkapan_berkas,
    tanggal_lahir,
  } = input;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className="custom-dialog-tambah-data"
    >
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
            onChange={(e) => onChange(e, 0, "input")}
            required
            value={nama_petugas}
            error={onError(nama_petugas)}
            helperText={onHelperText(nama_petugas)}
          />

          <TextField
            name="nama_pengunjung"
            label="Nama pengunjung"
            type="text"
            variant="outlined"
            onChange={(e) => onChange(e, 1, "input")}
            required
            value={nama_pengunjung}
            error={onError(nama_pengunjung)}
            helperText={onHelperText(nama_pengunjung)}
          />

          <TextField
            name="no_kk"
            label="No.KK"
            type="number"
            variant="outlined"
            onChange={(e) => onChange(e, 2, "input")}
            required
            value={no_kk}
            error={onError(no_kk)}
            helperText={onHelperText(no_kk)}
          />

          <TextField
            name="nik"
            label="NIK"
            type="number"
            variant="outlined"
            onChange={(e) => onChange(e, 3, "input")}
            required
            value={nik}
            error={onError(nik)}
            helperText={onHelperText(nik)}
          />
          <Stack className="custom-stack-kecamatan-kelurahan">
            <FormControl sx={{ ml: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-label">Kecamatan</InputLabel>
              <Select
                name="kecamatan"
                label="Kecamatan"
                onChange={(e) => onChange(e, 4, "input")}
                required
                value={kecamatan}
                error={onError(kecamatan)}
              >
                {constantKecamatan.map((kec) => (
                  <MenuItem value={kec}>{kec}</MenuItem>
                ))}
              </Select>
              {onHelperText(kecamatan) ? (
                <FormHelperText sx={{ color: "red" }}>
                  Form harus di isi
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl sx={{ mr: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-label">Kelurahan</InputLabel>
              <Select
                name="kelurahan"
                label="Kelurahan"
                onChange={(e) => onChange(e, 5, "input")}
                required
                value={kelurahan}
                error={onError(kelurahan)}
                disabled={indexKecamatan !== null ? false : true}
              >
                {indexKecamatan !== null
                  ? constantKelurahan !== undefined
                    ? constantKelurahan[indexKecamatan].map((kel) => (
                        <MenuItem value={kel}>{kel}</MenuItem>
                      ))
                    : null
                  : null}
              </Select>
              {onHelperText(kelurahan) ? (
                <FormHelperText sx={{ color: "red" }}>
                  Form harus di isi
                </FormHelperText>
              ) : null}
            </FormControl>
          </Stack>

          <TextField
            name="alamat"
            label="Alamat tempat tinggal"
            type="text"
            variant="outlined"
            onChange={(e) => onChange(e, 6, "input")}
            required
            value={alamat}
            error={onError(alamat)}
            helperText={onHelperText(alamat)}
          />

          <TextField
            name="no_telpon"
            label="Nomor Telepon"
            type="number"
            variant="outlined"
            onChange={(e) => onChange(e, 7, "input")}
            required
            value={no_telpon}
            error={onError(no_telpon)}
            helperText={onHelperText(no_telpon)}
          />

          <FormControl className="custom-select" fullWidth>
            <InputLabel>Jenis layanan</InputLabel>
            <Select
              name="jenis_layanan"
              label="Jenis layanan"
              onChange={(e) => onChange(e, 8, "input")}
              required
              value={jenis_layanan}
              error={onError(jenis_layanan)}
            >
              {constantJenisLayanan.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
            {onHelperText(jenis_layanan) ? (
              <FormHelperText sx={{ color: "red" }}>
                Form harus di isi
              </FormHelperText>
            ) : null}
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
            className="custom-stack-kelengkapan-berkas"
            direction="horizontal"
            justifyContent="space-between"
          >
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                {constantKelengkapanBerkas[0].map((value) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={kelengkapan_berkas[value.name]}
                        onChange={(e) => onChange(e, 9, "checkbox")}
                        name={value.name}
                      />
                    }
                    label={value.label}
                  />
                ))}
              </FormGroup>
            </FormControl>

            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                {constantKelengkapanBerkas[1].map((value) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={kelengkapan_berkas[value.name]}
                        onChange={(e) => onChange(e, 9, "checkbox")}
                        name={value.name}
                      />
                    }
                    label={value.label}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Stack>

          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="Tanggal lahir"
              value={tanggal_lahir}
              onChange={onChangeDate}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={onError(tanggal_lahir)}
                  helperText={onHelperText(tanggal_lahir)}
                />
              )}
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
          className="cancel-btn"
          variant="contained"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          className="succes-btn"
          variant="contained"
          onClick={onTambah}
          disabled={disableButton()}
        >
          Tambah
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DaftarPengunjungPage;
