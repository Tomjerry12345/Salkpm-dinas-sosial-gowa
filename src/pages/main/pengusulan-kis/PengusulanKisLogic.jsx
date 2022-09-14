import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseConfig from "../../../config/FirebaseConfig";
import { constantKecamatan } from "../../../values/Constant";
import InputValidator from "../../../values/InputValidator";
import { logged, setLocalItem } from "../../../values/Utilitas";

const PengusulanKisLogic = () => {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState({
    no_kk: "",
    nik: "",
    nama_lengkap: "",
    pisat: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    status_kawin: "",
    alamat: "",
    rw: "",
    rt: "",
    kode_pos: "",
    kecamatan: "",
    kelurahan: "",
    no_telpon: "",
  });

  const [data, setData] = useState([]);

  const [click, setClick] = useState(false);

  const [indexKecamatan, setIndexKecamatan] = useState(null);

  const [notif, setNotif] = useState({
    open: false,
    message: "",
    variant: "",
  });

  const navigate = useNavigate();

  const validator = InputValidator(input);

  const { addData, getData } = FirebaseConfig();

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const snapshot = await getData("pengusulan-kis");
    let listData = [];

    snapshot.forEach((doc) => {
      const docData = doc.data();
      listData.push(docData);
      logged(`data => ${JSON.stringify(docData)}`);
    });
    setData(listData);
  };

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
    validator.updateValid(value, 5);

    const format = value.format("L");

    setInput({
      ...input,
      tanggal_lahir: format,
    });
  };

  const onTambah = async (e) => {
    setClick(true);
    const valid = validator.checkNotValidAll();
    logged(`validator.checkNotValidAll => ${valid}`);

    if (!valid) {
      // alert("false");
      setNotif({
        open: true,
        message: "Sedang di proses...",
        variant: "progress",
      });
      const res = await addData("pengusulan-kis", input);

      if (res) {
        setNotif({
          open: true,
          message: "Data berhasil di tambahkan",
          variant: "success",
        });
      } else {
        setNotif({
          open: true,
          message: "Data gagal di tambahkan",
          variant: "error",
        });
      }
    }
  };

  const resSucces = () => {
    setLocalItem("move-page", "/main/pengusulan-kis");
    navigate("/");
  };

  const onError = (value) => (click ? validator.checkNotValid(value) : null);

  const onHelperText = (value) =>
    click ? validator.messageNotValid(value) : null;

  const disableButton = () => (click ? validator.checkNotValidAll() : null);

  return {
    func: {
      handleClickOpen,
      handleClose,
      onError,
      onHelperText,
      disableButton,
      onChange,
      onChangeDate,
      onTambah,
      resSucces,
    },
    value: {
      open,
      input,
      indexKecamatan,
      notif,
      data,
    },
  };
};

export default PengusulanKisLogic;
