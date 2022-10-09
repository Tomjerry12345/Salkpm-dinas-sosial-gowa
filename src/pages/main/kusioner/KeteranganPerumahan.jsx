import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  constantDaya,
  constantJenisDinding,
  constantJenisLantai,
  constantSumberAirMinum,
} from "../../../values/Constant";

const KeteranganPerumahan = ({ onChange }) => {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Jenis lantai</InputLabel>
        <Select
          name="jenis_lantai"
          label="Jenis lantai"
          onChange={(e) => onChange(e)}
        >
          {constantJenisLantai.map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        fullWidth
        sx={{
          mt: 4,
        }}
      >
        <InputLabel>Jenis dinding</InputLabel>
        <Select
          name="jenis_dinding"
          label="Jenis dinding"
          onChange={(e) => onChange(e)}
        >
          {constantJenisDinding.map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        fullWidth
        sx={{
          mt: 4,
        }}
      >
        <InputLabel>Sumber air minum</InputLabel>
        <Select
          name="sumber_air_minum"
          label="Sumber air minum"
          onChange={(e) => onChange(e)}
        >
          {constantSumberAirMinum.map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        fullWidth
        sx={{
          mt: 4,
        }}
      >
        <InputLabel>Daya</InputLabel>
        <Select name="daya" label="Daya" onChange={(e) => onChange(e)}>
          {constantDaya.map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default KeteranganPerumahan;
