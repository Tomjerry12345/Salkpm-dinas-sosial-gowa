import { InputAdornment } from "@mui/material";
import { constantBulan } from "./Constant";

export const setIconInput = (icons, position) => {
  return {
    startAdornment: (
      <InputAdornment position={position}>{icons}</InputAdornment>
    ),
  };
};

export const setLocalItem = (key, value) => localStorage.setItem(key, value);

export const getLocalItem = (key) => localStorage.getItem(key);

export const log = (message) => console.log(message);

export const logO = (tag, value) => console.log(tag, value);

export const logS = (tag, value) => console.log(`${tag} => ${value}`);

export const getMonthNow = () => {
  const d = new Date();
  logO("d", d.getMonth());
  return constantBulan[d.getMonth()];
};

export const getYearNow = () => {
  const d = new Date();
  return d.getFullYear();
};
