import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseConfig from "../../../config/FirebaseConfig";
import { constantKecamatan } from "../../../values/Constant";
import InputValidator from "../../../values/InputValidator";
import { getMonthNow, getYearNow, log, logO, logS, setLocalItem } from "../../../values/Utilitas";
import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";

const TambahUserLogic = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [isError, setIsError] = useState(false);

  const [data, setData] = useState([]);

  const [click, setClick] = useState(false);

  const [indexKecamatan, setIndexKecamatan] = useState(null);

  const [inputFilter, setInputFilter] = useState({
    filter_kecamatan: "",
    filter_jenis_layanan: "",
    filter_nik_kk: "",
    filter_bulan: "",
    filter_tahun: "",
  });

  const [notif, setNotif] = useState({
    open: false,
    message: "",
    variant: "",
  });

  const [confirm, setConfirm] = useState({
    open: false,
    message: "",
    variant: "",
  });

  const [id, setId] = useState("");

  const navigate = useNavigate();

  const validator = InputValidator(null, 2);

  const { addData, getData, multipleSearching, deleteSpecifict, updateDataDoc } = FirebaseConfig();

  // useEffect(() => {
  //   getAllData();
  // }, []);

  useEffect(() => {
    getAllData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllData = async () => {
    const snapshot = await getData("user");
    let listData = [];

    snapshot.forEach((doc) => {
      const docData = doc.data();
      listData.push(docData);
    });
    setData(listData);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (input.id !== undefined) {
      setInput({
        username: "",
        password: "",
      });
    }
    setOpen(false);
  };

  const onChange = (event, index, variant) => {
    const { name, value } = event.target;

    validator.updateValid(value, index, name);

    setInput({
      ...input,
      [name]: value,
    });

    // if (variant === "input") {
    //   validator.updateValid(value, index, name);

    //   if (name === "kecamatan") {
    //     let index = constantKecamatan.indexOf(value);
    //     setIndexKecamatan(index);
    //   }

    //   if (name === "no_kk" || name === "nik") {
    //     if (value.length <= 16) {
    //       setInput({
    //         ...input,
    //         [name]: value,
    //       });
    //     }
    //   } else {

    //   }
    // } else if (variant === "checkbox") {
    //   validator.updateValid("true", index);
    //   setInput({
    //     ...input,
    //     kelengkapan_berkas: {
    //       ...input.kelengkapan_berkas,
    //       [name]: checked,
    //     },
    //   });
    // }
  };

  const onTambah = async (e) => {
    setClick(true);

    const valid = validator.checkNotValidAll();

    logS("validator.checkNotValidAll", valid);

    if (valid) {
      setNotif({
        open: true,
        message: "Sedang di proses...",
        variant: "progress",
      });

      const res = await addData("user", input);

      if (res) {
        setNotif({
          open: true,
          message: "Data berhasil di tambahkan",
          variant: "success",
        });
      } else
        setNotif({
          open: true,
          message: "Data gagal di tambahkan",
          variant: "error",
        });
    }
  };

  const resSucces = () => {
    navigate(0);
  };

  const onError = (value, key) => (click ? validator.checkNotValid(value, key) : null);

  const onHelperText = (value, key) => (click ? validator.messageNotValid(value, key) : null);

  const disableButton = () => (click ? !validator.checkNotValidAll() : null);

  const onUbah = (e, data) => {
    e.stopPropagation(); // don't select this row after clicking
    setInput(data);
    setOpen(true);
  };

  const onUbahDb = () => {
    // alert("ubah");

    console.log("input", input);

    validator.setTofalseValue(input);

    setClick(true);

    const valid = validator.checkNotValidAll();

    if (valid) {
      setOpen(false);
      onOpenConfirm("Apakah anda yakin ingin mengubah data ini?", "edit");
    }
  };

  const onHapus = (e, id) => {
    e.stopPropagation(); // don't select this row after clicking
    setId(id);
    onOpenConfirm("Apakah anda yakin ingin menghapus?", "delete");
  };

  const onOpenConfirm = (message, variant) => {
    setConfirm({
      open: true,
      message: message,
      variant: variant,
    });
  };

  const onSuccesConfirm = async () => {
    let message;
    if (confirm.variant === "edit") {
      await updateDataDoc("user", input.id, input);
      message = "Data berhasil di ubah";
      handleClose();
    } else {
      await deleteSpecifict("user", id);
      message = "Data berhasil di hapus";
      onCloseConfirm();
    }

    setNotif({
      open: true,
      message: message,
      variant: "success",
    });
  };

  const onCloseConfirm = () => {
    setConfirm({
      open: false,
      message: "",
    });
  };

  return {
    func: {
      handleClickOpen,
      handleClose,
      onChange,
      onTambah,
      onError,
      onHelperText,
      disableButton,

      resSucces,

      onUbah,
      onHapus,
      onSuccesConfirm,
      onCloseConfirm,
      onUbahDb,
    },
    value: {
      open,
      input,
      indexKecamatan,
      data,
      notif,
      setNotif,
      filterNik: inputFilter.filter_nik_kk,
      isError,
      confirm,
    },
  };
};

export default TambahUserLogic;
