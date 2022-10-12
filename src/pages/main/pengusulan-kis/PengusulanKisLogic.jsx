import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseConfig from "../../../config/FirebaseConfig";
import { constantKecamatan } from "../../../values/Constant";
import InputValidator from "../../../values/InputValidator";
import {
  getMonthNow,
  getYearNow,
  logO,
  logS,
  setLocalItem,
} from "../../../values/Utilitas";
import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";

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
    tahun: getYearNow(),
    bulan: getMonthNow(),
  });

  const [inputFilter, setInputFilter] = useState({
    filter_kecamatan: "",
    filter_jenis_layanan: "",
    filter_nik_kk: "",
    filter_bulan: "",
    filter_tahun: "",
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

  const validator = InputValidator(null, 14);

  const { addData, getData, searching, multipleSearching } = FirebaseConfig();

  // useEffect(() => {
  //   getAllData();
  // }, []);

  useEffect(() => {
    const {
      filter_jenis_layanan,
      filter_nik_kk,
      filter_kecamatan,
      filter_bulan,
      filter_tahun,
    } = inputFilter;

    if (filter_kecamatan !== "") {
      getAllDataFilter("kecamatan", filter_kecamatan, "", "");
    } else if (filter_nik_kk !== "") {
      getAllDataFilter("nik", filter_nik_kk, "", "");
    } else if (filter_tahun !== "" && filter_bulan !== "") {
      getAllDataFilter("tahun", parseInt(filter_tahun), "bulan", filter_bulan);
    } else {
      getAllData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputFilter]);

  const getAllData = async () => {
    const snapshot = await getData("pengusulan-kis");
    let listData = [];

    snapshot.forEach((doc) => {
      const docData = doc.data();
      listData.push(docData);
    });
    setData(listData);
  };

  const getAllDataFilter = async (key, value, key1, value1) => {
    let snapshot;

    snapshot = await searching("pengusulan-kis", key, value);

    if (key !== "" && value !== "" && key1 !== "" && value1 !== "") {
      logS("multiple", `${key} => ${key1} => ${value} => ${value1}`);
      snapshot = await multipleSearching(
        "pengusulan-kis",
        key,
        key1,
        value,
        value1
      );
    } else {
      snapshot = await searching("pengusulan-kis", key, value);
    }

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

    if (valid) {
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

  const disableButton = () => (click ? !validator.checkNotValidAll() : null);

  const downloadExcell = async (datax) => {
    datax.forEach((val) => {
      delete val.id;
    });

    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const ws = XLSX.utils.json_to_sheet(datax);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excellBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excellBuffer], { type: fileType });
    FileSaver.saveAs(data, "pengusulan-kis" + fileExtension);
  };

  const onChangeFilter = (event) => {
    const { name, value } = event.target;
    logO("name", name);
    setInputFilter({
      ...inputFilter,
      [name]: value,
    });
  };

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
      downloadExcell,
      onChangeFilter,
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
