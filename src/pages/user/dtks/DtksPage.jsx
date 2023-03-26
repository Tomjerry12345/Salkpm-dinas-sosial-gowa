import { Stack } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

import DtksLogic from "./DtksLogic";
import { DataGrid } from "@mui/x-data-grid";
import ModalNotif from "../../../component/modal/ModalNotif";

const columns = [
  { field: "NIK", headerName: "NIK", width: 150 },
  { field: "NOKK", headerName: "NOKK", width: 150 },
  { field: "NAMA", headerName: "NAMA", width: 150 },
  { field: "KECAMATAN", headerName: "KECAMATAN", width: 150 },
  { field: "DESA/KELUARAHAN", headerName: "DESA/KELUARAHAN", width: 150 },
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
            Unggah Excell
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
          label="Masukkan NIK / No. KK"
          onChange={func.onChangeFilter}
          onKeyDown={func.onSearch}
          type="number"
          value={value.filterNikKK}
          error={value.isError}
          helperText={
            value.isError ? "Inputan tidak boleh kurang dari 16 karakter" : null
          }
        />
      </Stack>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={value.data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          getRowId={(row) => row["NIK"]}
        />
      </div>

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
