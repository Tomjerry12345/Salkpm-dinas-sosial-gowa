import { logS } from "../values/Utilitas";
import ResultP0 from "./ResultP0";
import ResultP1 from "./ResultP1";
import ResultP2 from "./ResultP2";
import ResultP3 from "./ResultP3";

const testing = ["Tabung", "Hp", "Sepeda", "Kambing", "Babi", "Bambu", "Anyaman bambu", "Air sungai", "450 watt"];
const testing1 = ["Tv", "Kulkas", "Kayu", "Papan", "Sumur pribadi", "900 watt"];
const testing2 = ["Tv", "Kulkas", "Sepeda", "Kambing", "Babi", "Bambu", "Anyaman bambu", "450 watt"];

const ForwardChaining = () => {
  const clasify = () => {
    let result = "";
    const p0 = ResultP0();
    const p1 = ResultP1();
    const p2 = ResultP2();
    const p3 = ResultP3();
    testing2.forEach((val) => {
      if (p0.result(val)) {
        result = "P0";
      } else if (p1.result(val)) {
        result = "P1";
      } else if (p2.result(val)) {
        result = "P1";
      } else if (p3.result(val)) {
        result = "P1";
      } else {
        result = "false";
      }
    });
    logS("result", result);
  };

  return {
    clasify,
  };
};

export default ForwardChaining;
