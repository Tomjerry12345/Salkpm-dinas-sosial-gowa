import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { logO, logS } from "../../../values/Utilitas";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import "./KusionerPage.scss";

export default function KusionerPage({ open, handleClose }) {
  //   const [open, setOpen] = useState(openDialog);
  const [i, setI] = useState(0);
  const [pertanyaan, setPertanyaan] = useState();
  const [pilihan, setPiliihan] = useState("");
  const [jenisLantai, setJenisLantai] = useState("");
  const [showData, setShowData] = useState({
    nama: "",
    nik: "",
    pilihan: [],
  });

  const [endClasify, setEndClasify] = useState(false);

  const [hasil, setHasil] = useState("");

  useEffect(() => {
    forwardChaining();
    logO("showData", showData);
  }, [i, showData]);

  const forwardChaining = () => {
    if (i === 0) {
      setPertanyaan(
        <TextField
          value={showData.nama}
          autoFocus
          margin="dense"
          label="Input nama"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setShowData({
              ...showData,
              nama: e.target.value,
            });
          }}
        />
      );
    } else if (i === 1) {
      setPertanyaan(
        <TextField
          value={showData.nik}
          autoFocus
          margin="dense"
          label="Input nik"
          fullWidth
          variant="standard"
          onChange={(e) => {
            setShowData({
              ...showData,
              nik: e.target.value,
            });
          }}
        />
      );
    } else if (i === 2) {
      setPertanyaan(
        <FormControl
          fullWidth
          style={{
            width: 200,
            marginTop: 24,
          }}
        >
          <InputLabel>Pilih jenis lantai</InputLabel>
          <Select
            // value={age}
            label="Pilih jenis lantai"
            onChange={handleChange}
          >
            <MenuItem value={"Tegel"}>Tegel</MenuItem>
            <MenuItem value={"Semen"}>Semen</MenuItem>
            <MenuItem value={"Kayu"}>Kayu</MenuItem>
            <MenuItem value={"Bambu"}>Bambu</MenuItem>
          </Select>
        </FormControl>
      );
    } else if (i === 3) {
      setPertanyaan(<Typography>Apakah anda memiliki kulkas?</Typography>);
      //   if (jenisLantai === "Bambu") {
      //     onEndClasify("P0");
      //   } else {
      //     setPertanyaan(<Typography>Apakah anda memiliki kulkas?</Typography>);
      //   }
    } else if (i === 4) {
      if (pilihan === "iya") {
        setPertanyaan(<Typography>Apakah anda memiliki motor?</Typography>);
      } else {
        if (jenisLantai === "Tegel") {
          onEndClasify("P1");
        } else {
          onEndClasify("P0");
        }
      }
    } else if (i === 5) {
      if (pilihan === "iya") {
        setPertanyaan(<Typography>Apakah anda memiliki mobil?</Typography>);
      } else {
        if (jenisLantai === "Bambu") {
          onEndClasify("P0");
        } else {
          onEndClasify("P1");
        }
      }
    } else if (i === 6) {
      if (pilihan === "iya") {
        if (jenisLantai === "Bambu") {
          onEndClasify("P2");
        } else {
          onEndClasify("P3");
        }
      } else {
        if (jenisLantai === "Bambu") {
          onEndClasify("P1");
        } else {
          onEndClasify("P2");
        }
      }
    }
  };

  const onEndClasify = (c) => {
    setEndClasify(true);
    setHasil(c);
  };

  const handleChange = (e) => {
    setJenisLantai(e.target.value);
    setShowData({
      ...showData,
      pilihan: [e.target.value],
    });
  };

  const onTidak = () => {
    setI((prev) => prev + 1);
    setPiliihan("tidak");
  };

  const onIya = () => {
    setI((prev) => prev + 1);
    setPiliihan("iya");
  };

  const onCancel = () => {
    setI(0);
    setEndClasify(false);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} className="custom-dialog">
        {endClasify ? (
          <>
            <DialogTitle>Hasil</DialogTitle>
            <DialogContent>
              <Typography variant="h6">Nama: {showData.nama}</Typography>
              <Typography variant="h6">NIK: {showData.nik}</Typography>
              {/* <Typography variant="h6">Pilihan: {showData.pilihan}</Typography> */}
              <Typography variant="h6">Hasil: {hasil}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={onCancel}>Kembali</Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogTitle>Kusioner</DialogTitle>
            <DialogContent>{pertanyaan}</DialogContent>
            <DialogActions>
              <Button onClick={i > 2 ? onTidak : onCancel}>
                {i > 2 ? "Tidak" : "Cancel"}
              </Button>
              <Button onClick={onIya}>{i > 1 ? "Iya" : "Lanjut"}</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
}
