import { useState } from "react";
import FirebaseConfig from "../../../config/FirebaseConfig";
import { constantKecamatan } from "../../../values/Constant";
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
    kelengkapan_berkas: {
      kartu_keluarga: false,
      ktp: false,
      kks: false,
      kis: false,
      sktm: false,
      domisili: false,
    },
    tanggal_lahir: "",
  });

  const [click, setClick] = useState(false);

  const [indexKecamatan, setIndexKecamatan] = useState(null);

  const [notif, setNotif] = useState({
    open: false,
    message: "",
    variant: "",
  });

  const validator = InputValidator(input);

  const { addData } = FirebaseConfig();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (event, index, variant) => {
    const { name, value, checked } = event.target;

    if (variant === "input") {
      validator.updateValid(value, index);

      if (name === "kecamatan") {
        let index = constantKecamatan.indexOf(value);
        setIndexKecamatan(index);
      }

      setInput({
        ...input,
        [name]: value,
      });
    } else if (variant === "checkbox") {
      validator.updateValid("true", index);
      setInput({
        ...input,
        kelengkapan_berkas: {
          ...input.kelengkapan_berkas,
          [name]: checked,
        },
      });
    }
  };

  const onChangeDate = (value) => {
    validator.updateValid(value, 10);

    const format = value.format("L");

    setInput({
      ...input,
      tanggal_lahir: format,
    });
  };

  const onTambah = async (e) => {
    setClick(true);

    logged(`input => ${JSON.stringify(input)}`);

    const res = await addData("pengunjung", input);

    logged(`res Tambah => ${res}`);

    if (res) {
      setNotif({
        open: false,
        message: "",
        variant: "",
      });
    } else
      setNotif({
        open: false,
        message: "",
        variant: "",
      });
  };

  const onError = (value) => (click ? validator.checkNotValid(value) : null);

  const onHelperText = (value) =>
    click ? validator.messageNotValid(value) : null;

  const disableButton = () => (click ? validator.checkNotValidAll() : null);

  return {
    func: {
      handleClickOpen,
      handleClose,
      onChange,
      onTambah,
      onError,
      onHelperText,
      disableButton,
      onChangeDate,
    },
    value: {
      open,
      input,
      indexKecamatan,
    },
  };
};

export default DaftarPengunjungLogic;
