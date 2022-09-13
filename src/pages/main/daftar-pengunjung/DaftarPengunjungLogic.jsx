import { useState } from "react";
import InputValidator from "../../../values/InputValidator";
import { logged } from "../../../values/Utilitas";

const DaftarPengunjungLogic = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    nama_petugas: "",
    nama_pengunjung: "",
    no_kk: "",
    nik: "",
    kelurahan: "",
    kecamatan: "",
    alamat: "",
    no_telpon: "",
    jenis_layanan: "",
    kelengkapan_berkas: "",
    tanggal_lahir: "",
  });

  const validator = InputValidator(input);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (event, index) => {
    const { name, value } = event.target;
    validator.updateValid(value, index);
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onTambah = (e) => {
    e.preventDefault();

    logged(`clicked ${JSON.stringify(input)}`);
  };

  return {
    func: {
      handleClickOpen,
      handleClose,
      onChange,
      onTambah,
      validator,
    },
    value: {
      open,
      input,
    },
  };
};

export default DaftarPengunjungLogic;
