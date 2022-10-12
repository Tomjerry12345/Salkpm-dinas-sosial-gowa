import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const KepemilikanAset = ({ onChange }) => {
  return (
    <div className="custom-radio">
      <FormControl>
        <FormLabel>Tabung</FormLabel>
        <RadioGroup
          row
          name="Tabung"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      {/* Batas copy */}
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Kulkas</FormLabel>
        <RadioGroup
          row
          name="Kulkas"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Ac</FormLabel>
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
        <FormLabel>Tv</FormLabel>
        <RadioGroup row name="Tv" onChange={(e) => onChange(e, null, "radio")}>
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Emas</FormLabel>
        <RadioGroup
          row
          name="Emas"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Komputer</FormLabel>
        <RadioGroup
          row
          name="Komputer"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Laptop</FormLabel>
        <RadioGroup
          row
          name="Laptop"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Sepeda</FormLabel>
        <RadioGroup
          row
          name="Sepeda"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Motor</FormLabel>
        <RadioGroup
          row
          name="Motor"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Mobil</FormLabel>
        <RadioGroup
          row
          name="Mobil"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Perahu</FormLabel>
        <RadioGroup
          row
          name="Perahu"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Kapal</FormLabel>
        <RadioGroup
          row
          name="Kapal"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Rumah di tempat lain</FormLabel>
        <RadioGroup
          row
          name="Rumah lain"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Lahan di tempat lain</FormLabel>
        <RadioGroup
          row
          name="Lahan lain"
          onChange={(e) => onChange(e, null, "radio")}
        >
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
        <RadioGroup
          row
          name="Kambing"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Sapi</FormLabel>
        <RadioGroup
          row
          name="Sapi"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Kuda</FormLabel>
        <RadioGroup
          row
          name="Kuda"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Babi</FormLabel>
        <RadioGroup
          row
          name="Babi"
          onChange={(e) => onChange(e, null, "radio")}
        >
          <FormControlLabel value="iya" control={<Radio />} label="Iya" />
          <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default KepemilikanAset;
