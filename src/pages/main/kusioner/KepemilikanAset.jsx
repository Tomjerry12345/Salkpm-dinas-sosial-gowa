import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const KepemilikanAset = ({ onChange }) => {
  return (
    <div className="custom-radio">
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Tabung</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={onChange}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      {/* Batas copy */}
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Lemari ES</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">AC</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Televisi</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Emas</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Komputer/Laptop</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Sepeda</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Motor</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Mobil</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Perahu</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Kapal</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Handphone</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Rumah ditempat lain</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Lahan</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label"> Ternak Yang dimiliki:</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"></RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Kambing</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Kerbau</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Sapi</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Kuda</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Babi</FormLabel>
        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default KepemilikanAset;
