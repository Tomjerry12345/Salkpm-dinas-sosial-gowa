import { Stack } from "@mui/system";
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormGroup, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { constantBulan, constantJenisLayanan, constantKelengkapanBerkas, constantKelurahan, constantTahun } from "../../../values/Constant";
import { constantKecamatan } from "../../../values/Constant";
import "./TambahUser.scss";
import ModalNotif from "../../../component/modal/ModalNotif";
import { DataGrid } from "@mui/x-data-grid";
import DialogConfirm from "../../../component/modal/DialogConfirm";
import TambahUserLogic from "./TambahUserLogic";

const TambahUserPage = () => {
  const { func, value } = TambahUserLogic();
  const { open, variant, message } = value.notif;

  const columns = [
    { field: "username", headerName: "Username", minWidth: 150, flex: 0.5 },
    { field: "password", headerName: "Password", minWidth: 150, flex: 0.5 },
    {
      field: "action",
      headerName: "Aksi",
      align: "center",
      headerAlign: "center",
      editable: false,
      sortable: false,
      filterable: false,
      disableColumnMenu: false,
      minWidth: 200,
      flex: 0.3,
      renderCell: (params) => {
        const id = params.row.id;
        const row = params.row;

        const data = {
          id: row.id,
          username: row.username,
          password: row.password,
        };
        return (
          <Stack direction="row" spacing={2}>
            <Button color="success" variant="outlined" onClick={(e) => func.onUbah(e, data)}>
              Ubah
            </Button>
            <Button color="error" variant="outlined" onClick={(e) => func.onHapus(e, id)}>
              Hapus
            </Button>
          </Stack>
        );
      },
    },
  ];

  return (
    <>
      <Typography variant="h5" sx={{ mb: 4 }}>
        List User
      </Typography>

      <ShowData value={value} columns={columns} />

      <TambahData func={func} value={value} />

      <Stack flexDirection="row" justifyContent="space-between" sx={{ mt: 4 }}>
        {/* <Button variant="contained" style={{ color: "white" }} onClick={() => func.downloadExcell(value.data)}>
          Unduh Data
        </Button> */}
        <Button variant="contained" style={{ color: "white" }} onClick={() => func.handleClickOpen()}>
          Tambah Data
        </Button>
      </Stack>

      {/* modal */}
      <ModalNotif open={open} setOpen={value.setNotif} variant={variant} message={message} onSucces={func.resSucces} />

      <DialogConfirm open={value.confirm.open} message={value.confirm.message} onSucces={func.onSuccesConfirm} onClose={func.onCloseConfirm} />
    </>
  );
};

const ShowData = ({ value, columns }) => (
  <div style={{ height: 400, width: "100%" }}>
    <DataGrid rows={value.data} columns={columns} pageSize={5} rowsPerPageOptions={[5]} getRowId={(row) => row["id"]} />
  </div>
);

const TambahData = ({ func, value }) => {
  const { input, open } = value;
  const { onError, onHelperText, disableButton, onChange, onTambah, handleClose, onUbahDb } = func;
  const { username, password } = input;
  return (
    <Dialog open={open} onClose={handleClose} className="custom-dialog-tambah-data">
      <Stack alignItems="center">
        <DialogTitle>Tambah User</DialogTitle>
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
          <TextField name="username" label="Username" type="text" variant="outlined" onChange={(e) => onChange(e, 0, "input")} required value={username} error={onError(username)} helperText={onHelperText(username)} />

          <TextField name="password" label="Password" type="text" variant="outlined" onChange={(e) => onChange(e, 1, "input")} required value={password} error={onError(password)} helperText={onHelperText(password)} />
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          mt: 2,
        }}
      >
        <Button className="cancel-btn" variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button className="succes-btn" variant="contained" onClick={input.id === undefined ? onTambah : onUbahDb} disabled={disableButton()}>
          {input.id === undefined ? "Tambah" : "Edit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TambahUserPage;
