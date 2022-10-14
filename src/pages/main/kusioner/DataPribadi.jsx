import { TextField } from "@mui/material";

const DataPribadi = ({ nama, nik, onChange, onError, onHelperText }) => {
  return (
    <div>
      <TextField
        fullWidth
        name="nama"
        label="Input Nama"
        type="text"
        variant="outlined"
        required
        onChange={(e) => onChange(e, 0, "input")}
        value={nama}
        error={onError(nama)}
        helperText={onHelperText(nama)}
      />
      <TextField
        fullWidth
        name="nik"
        label="Input NIK"
        type="text"
        variant="outlined"
        required
        onChange={(e) => onChange(e, 1, "input")}
        value={nik}
        error={onError(nik)}
        helperText={onHelperText(nik)}
        sx={{
          mt: 4,
        }}
      />
    </div>
  );
};

export default DataPribadi;
