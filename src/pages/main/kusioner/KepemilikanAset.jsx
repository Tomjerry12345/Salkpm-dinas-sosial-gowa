import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const KepemilikanAset = ({ onChange }) => {
  return (
    <div className="custom-radio">
      <FormControl>
        <FormLabel>Tabung</FormLabel>
        <RadioGroup row name="Tabung" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      {/* Batas copy */}
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Lemari ES</FormLabel>
        <RadioGroup row name="Lemari ES" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>AC</FormLabel>
        <RadioGroup row name="AC" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Hp</FormLabel>
        <RadioGroup row name="Hp" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Bambu</FormLabel>
        <RadioGroup row name="Bambu" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Anyaman bambu</FormLabel>
        <RadioGroup row name="Anyaman bambu" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Air sungai</FormLabel>
        <RadioGroup row name="Air sungai" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>450 watt</FormLabel>
        <RadioGroup row name="450 watt" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Televisi</FormLabel>
        <RadioGroup row name="Televisi" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Emas</FormLabel>
        <RadioGroup row name="Emas" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Komputer</FormLabel>
        <RadioGroup row name="Komputer" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Laptop</FormLabel>
        <RadioGroup row name="Laptop" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Sepeda</FormLabel>
        <RadioGroup row name="Sepeda" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Motor</FormLabel>
        <RadioGroup row name="Motor" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Mobil</FormLabel>
        <RadioGroup row name="Mobil" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Perahu</FormLabel>
        <RadioGroup row name="Perahu" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Kapal</FormLabel>
        <RadioGroup row name="Kapal" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Handphone</FormLabel>
        <RadioGroup row name="Handphone" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Rumah ditempat lain</FormLabel>
        <RadioGroup row name="Rumah ditempat lain" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Lahan</FormLabel>
        <RadioGroup row name="Lahan" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel> Ternak Yang dimiliki:</FormLabel>
        <RadioGroup row name="row-radio-buttons-group"></RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Kambing</FormLabel>
        <RadioGroup row name="Kambing" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Kerbau</FormLabel>
        <RadioGroup row name="Kerbau" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Sapi</FormLabel>
        <RadioGroup row name="Sapi" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Kuda</FormLabel>
        <RadioGroup row name="Kuda" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Babi</FormLabel>
        <RadioGroup row name="Babi" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default KepemilikanAset;
