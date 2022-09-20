import { useRef } from "react";
import { useEffect } from "react";
import { getLocalItem, logged, setLocalItem } from "../../../values/Utilitas";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { useState } from "react";

const DtksLogic = () => {
  const navigate = useNavigate();
  const inputUpload = useRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const movePage = getLocalItem("move-page");
    logged(`movePage => ${movePage}`);
    if (movePage !== "null") {
      navigate(movePage);
    }
    setLocalItem("move-page", null);
  }, []);

  const onClickUpload = () => {
    inputUpload.current.click();
  };

  const onChangeInputUpload = (e) => {
    let selectedFile = e.target.files[0];

    logged(`selectedFile =>${selectedFile.type}`);

    let reader = new FileReader();
    reader.readAsArrayBuffer(selectedFile);
    reader.onload = (e) => {
      convertXlsToJson(e.target.result);
    };
  };

  const convertXlsToJson = (excellFile) => {
    const workbook = XLSX.read(excellFile, { type: "buffer" });
    const worksheetname = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetname];
    const data1 = XLSX.utils.sheet_to_json(worksheet);

    logged(`data => ${JSON.stringify(data1[0]["NAMA"])}`);

    setData(data1);
  };

  return {
    value: {
      inputUpload,
      data,
    },
    func: {
      onClickUpload,
      onChangeInputUpload,
    },
  };
};

export default DtksLogic;
