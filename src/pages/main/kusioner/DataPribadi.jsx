import { TextField } from "@mui/material";

const DataPribadi = () => {
  return (
    <div>
      <TextField
        name="input_nama"
        label="Input Nama"
        type="text"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        name="Input NIK"
        label="Input NIK"
        type="text"
        variant="outlined"
        required
        fullWidth
        sx={{
          mt: 4,
        }}
      />
    </div>
  );
};

export default DataPribadi;
