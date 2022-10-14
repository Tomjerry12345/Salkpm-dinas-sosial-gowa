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
      foto_kondisi_rumah: false,
    },
    tanggal_lahir: "",
    bulan: getMonthNow(),
    tahun: getYearNow(),
  });

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

  const navigate = useNavigate();

  const validator = InputValidator(null, 10);

  const { addData, getData, multipleSearching } = FirebaseConfig();

  useEffect(() => {
    const {
      filter_jenis_layanan,
      filter_nik_kk,
      filter_kecamatan,
      filter_bulan,
      filter_tahun,
    } = inputFilter;

    if (
      filter_tahun !== "" ||
      filter_bulan !== "" ||
      filter_nik_kk !== "" ||
      filter_kecamatan !== "" ||
      filter_jenis_layanan !== ""
    ) {
      getAllDataFilter(
        "tahun",
        filter_tahun,
        "bulan",
        filter_bulan,
        "nik",
        filter_nik_kk,
        "kecamatan",
        filter_kecamatan,
        "jenis_layanan",
        filter_jenis_layanan
      );
    } else {
      getAllData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputFilter]);

  const getAllData = async () => {
    const snapshot = await getData("pengunjung");
    let listData = [];

    snapshot.forEach((doc) => {
      const docData = doc.data();
      const kelengkapanBerkas = docData.kelengkapan_berkas;
      const newKelengkapanBerkas = [];

      for (const i in kelengkapanBerkas) {
        if (kelengkapanBerkas[i] === true) {
          newKelengkapanBerkas.push(i);
        }
      }

      delete docData.kelengkapan_berkas;
      listData.push({
        ...docData,
        kelengkapan_berkas: newKelengkapanBerkas.toString(),
      });
    });
    setData(listData);
  };

  const getAllDataFilter = async (
    key,
    value,
    key1,
    value1,
    key2,
    value2,
    key3,
    value3,
    key4,
    value4
  ) => {
    const snapshot = await multipleSearching(
      "pengunjung",
      key,
      value,
      key1,
      value1,
      key2,
      value2,
      key3,
      value3,
      key4,
      value4
    );

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

  const onChangeFilter = (event) => {
    const { name, value } = event.target;
    logO("name", name);
    setInputFilter({
      ...inputFilter,
      [name]: value,
    });
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

    const valid = validator.checkNotValidAll();

    logS("validator.checkNotValidAll", valid);

    if (valid) {
      setNotif({
        open: true,
        message: "Sedang di proses...",
        variant: "progress",
      });

      const res = await addData("pengunjung", input);

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
    setLocalItem("move-page", "/main/daftar-pengunjung");
    navigate("/");
  };

  const onError = (value) => (click ? validator.checkNotValid(value) : null);

  const onHelperText = (value) =>
    click ? validator.messageNotValid(value) : null;

  const disableButton = () => (click ? !validator.checkNotValidAll() : null);

  const downloadExcell = async (datax, fileName) => {
    datax.forEach((val) => {
      delete val.id;
    });

    logO("datax", datax);

    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const ws = XLSX.utils.json_to_sheet(datax);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excellBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excellBuffer], { type: fileType });
    FileSaver.saveAs(data, "daftar-pengunjung" + fileExtension);
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
      onChangeDate,
      resSucces,
      onChangeFilter,
      downloadExcell,
    },
    value: {
      open,
      input,
      indexKecamatan,
      data,
      notif,
      setNotif,
    },
  };
};

export default DaftarPengunjungLogic;
