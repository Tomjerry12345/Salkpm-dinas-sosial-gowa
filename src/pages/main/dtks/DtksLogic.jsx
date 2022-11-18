import { useRef } from "react";
import { useEffect } from "react";
import { getLocalItem, setLocalItem } from "../../../values/Utilitas";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { useState } from "react";
import FirebaseConfig from "../../../config/FirebaseConfig";

const DtksLogic = () => {
  const navigate = useNavigate();
  const inputUpload = useRef(null);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [notif, setNotif] = useState({
    open: false,
    message: "",
    variant: "",
  });
  const [inputFilter, setInputFilter] = useState({
    // filter_kecamatan: "",
    // filter_jenis_layanan: "",
    filter_nik_kk: "",
  });
  const { addData, getData, deleteAllData, searching } = FirebaseConfig();

  useEffect(() => {
    // const movePage = getLocalItem("move-page");

    // if (movePage !== "null") {
    //   navigate(movePage);
    // } else {
    //   getAllData();
    //   // test();
    // }
    // setLocalItem("move-page", null);
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const test = async () => {
  //   let testData = ["1", "2", "3"];

  //   const promise = testData.forEach(async (val, i) => {
  //     const all = await true;
  //     return all;
  //   });

  //   const testPro = await Promise.all(promise);
  //   logged(`testPro => ${testPro}`);
  // };

  useEffect(() => {
    const { filter_nik_kk } = inputFilter;
    if (filter_nik_kk.length >= 16) {
      getAllDataFilter("NIK", filter_nik_kk, false);
    } else {
      getAllData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputFilter]);

  const getAllData = async () => {
    const snapshot = await getData("dtks");
    let listData = [];

    snapshot.forEach((doc) => {
      const docData = doc.data();
      listData.push(docData);
    });
    setData(listData);
  };

  const getAllDataFilter = async (key, value, isStopped) => {
    const snapshot = await searching("dtks", key, value);

    // const checkedEmpty = Object.keys(snapshot.).length;

    if (snapshot.empty) {
      if (!isStopped) {
        getAllDataFilter("NOKK", value, true);
      }
    } else {
      let listData = [];
      snapshot.forEach((doc) => {
        const docData = doc.data();
        listData.push(docData);
      });
      setData(listData);
    }
  };

  const onClickUpload = () => {
    inputUpload.current.click();
  };

  const onChangeFilter = (event) => {
    const { name, value } = event.target;

    console.log("length", value.length);

    if (value.length <= 16) {
      setIsError(true);
      setInputFilter({
        ...inputFilter,
        [name]: value,
      });
    } else {
      setIsError(false);
    }
  };

  const onSearch = (e) => {
    if (e.key === "Enter") {
      const { filter_nik_kk } = inputFilter;
      if (filter_nik_kk.length >= 16) {
        setIsError(false);
        getAllDataFilter("NIK", filter_nik_kk, false);
      } else {
        setIsError(true);
        getAllData();
      }
    }
  };

  const onChangeInputUpload = (e) => {
    let selectedFile = e.target.files[0];

    let reader = new FileReader();
    reader.readAsArrayBuffer(selectedFile);
    reader.onload = (e) => {
      convertXlsToJson(e.target.result);
    };
  };

  const convertXlsToJson = async (excellFile) => {
    const workbook = XLSX.read(excellFile, { type: "buffer" });
    const worksheetname = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetname];
    const data1 = XLSX.utils.sheet_to_json(worksheet);

    if (data.length === 0) {
      setNotif({
        open: true,
        variant: "progress",
      });

      data1.forEach(async (val, i) => {
        if (i !== data1.length - 1) {
          console.log("cek");
          await addData("dtks", val);
        } else {
          console.log("berhasil");
          setNotif({
            open: true,
            message: "Data berhasil di tambahkan",
            variant: "success",
          });
        }
      });
    } else {
      // alert("data tidak tersedia");
      await deleteAllData("dtks");
    }

    // const res = await addData("dtks", data1);

    // if (res) {
    //   setNotif({
    //     open: true,
    //     message: "Data berhasil di tambahkan",
    //     variant: "success",
    //   });
    // } else {
    //   setNotif({
    //     open: true,
    //     message: "Data gagal di tambahkan",
    //     variant: "error",
    //   });
    // }

    // setData(data1);
    // setDataAll(data1);
  };

  const resSucces = () => {
    // setLocalItem("move-page", "/main/daftar-pengunjung");
    // navigate("/");
    setNotif({
      open: false,
      message: "",
      variant: "",
    });

    window.location.href = "http://localhost:3000/main";
  };

  return {
    value: {
      inputUpload,
      data,
      notif,
      isError,
      filterNikKK: inputFilter.filter_nik_kk,
    },
    func: {
      onClickUpload,
      onChangeInputUpload,
      resSucces,
      onChangeFilter,
      onSearch,
    },
  };
};

export default DtksLogic;
