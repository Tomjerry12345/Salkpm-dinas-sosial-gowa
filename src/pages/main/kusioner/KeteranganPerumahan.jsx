import { TextField } from "@mui/material";

const KeteranganPerumahan = () => {
  return (
    <div>
      <TextField
        name="status_penguasaan_bangunan"
        label="Status Penguasaan Bangunan"
        type="text"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        name="luas_lantai"
        label="luas lantai"
        type="text"
        variant="outlined"
        required
        fullWidth
        sx={{ mt: 4 }}
      />
    </div>
  );
};

export default KeteranganPerumahan;
