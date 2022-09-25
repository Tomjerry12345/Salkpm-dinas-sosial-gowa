import { useRef } from "react";
import { useEffect } from "react";
import { getLocalItem, logged, setLocalItem } from "../../../values/Utilitas";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { useState } from "react";
import FirebaseConfig from "../../../config/FirebaseConfig";

const DtksLogic = () => {
  const navigate = useNavigate();
  const inputUpload = useRef(null);
  const [data, setData] = useState([]);
  const [dataAll, setDataAll] = useState([]);
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
  const { addData, getData, deleteAllData } = FirebaseConfig();

  useEffect(() => {
    const movePage = getLocalItem("move-page");
    logged(`movePage => ${movePage}`);
    if (movePage !== "null") {
      navigate(movePage);
    }
    setLocalItem("move-page", null);
  }, []);

  // useEffect(() => {
  //   const { filter_nik_kk } = inputFilter;
  //   // if (filter_jenis_layanan !== "") {
  //   //   getAllDataFilter("jenis_layanan", filter_jenis_layanan);
  //   // } else if (filter_kecamatan !== "") {
  //   //   getAllDataFilter("kecamatan", filter_kecamatan);
  //   // } else if (filter_nik_kk !== "") {
  //   //   getAllDataFilter("nik", filter_nik_kk);
  //   // } else {
  //   // getAllData();
  //   // }
  //   // deleteAllData("dtks");

  // }, []);

  const getAllData = async () => {
    const snapshot = await getData("dtks");
    let listData = [];

    snapshot.forEach((doc) => {
      const docData = doc.data();
      listData.push(docData);
      logged(`data => ${JSON.stringify(docData)}`);
    });
    setData(listData);
  };

  // const getAllDataFilter = async (key, value) => {
  //   // const snapshot = await searching("pengunjung", key, value);
  //   // let listData = [];
  //   // snapshot.forEach((doc) => {
  //   //   const docData = doc.data();
  //   //   listData.push(docData);
  //   //   logged(`data => ${JSON.stringify(docData)}`);
  //   // });
  //   // setData(listData);
  //   data.forEach((val) => {
  //     logged(`val => ${JSON.stringify(val)}`);
  //   });
  // };

  const onClickUpload = () => {
    inputUpload.current.click();
  };

  const onChangeFilter = (event) => {
    const { name, value } = event.target;
    setInputFilter({
      ...inputFilter,
      [name]: value,
    });
  };

  const onSearch = (e) => {
    if (e.key === "Enter") {
      const { filter_nik_kk } = inputFilter;
      if (filter_nik_kk !== "") {
        logged(`filter_nik_kk ${filter_nik_kk}`);
        const list = [];
        dataAll.forEach((val) => {
          if (val["NIK"] === filter_nik_kk || val["NOKK"] === filter_nik_kk) {
            list.push(val);
          }
          // logged(`val => ${JSON.stringify(val["NIK"])}`);
        });
        setData(list);
      } else {
        setData(dataAll);
      }
    }
  };

  const onChangeInputUpload = (e) => {
    setNotif({
      open: true,
      message: "Sedang di proses...",
      variant: "progress",
    });

    let selectedFile = e.target.files[0];

    logged(`selectedFile =>${selectedFile.type}`);

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

    logged(`data => ${JSON.stringify(data1[0]["NAMA"])}`);

    // data1.forEach(async (val, i) => {
    //   if (i <= 1000) {
    //     await addData("dtks", val);
    //   }
    // });

    setNotif({
      open: true,
      message: "Data berhasil di tambahkan",
      variant: "success",
    });

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

    setData(data1);
    setDataAll(data1);
  };

  const resSucces = () => {
    // setLocalItem("move-page", "/main/daftar-pengunjung");
    // navigate("/");
    setNotif({
      open: false,
      message: "",
      variant: "",
    });
  };

  return {
    value: {
      inputUpload,
      data,
      notif,
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
