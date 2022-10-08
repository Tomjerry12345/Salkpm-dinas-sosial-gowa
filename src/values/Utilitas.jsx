import { InputAdornment } from "@mui/material";

export const setIconInput = (icons, position) => {
  return {
    startAdornment: <InputAdornment position={position}>{icons}</InputAdornment>,
  };
};

export const setLocalItem = (key, value) => localStorage.setItem(key, value);

export const getLocalItem = (key) => localStorage.getItem(key);

export const log = (message) => console.log(message);

export const logO = (tag, value) => console.log(`${tag} => ${JSON.stringify(value)}`);

export const logS = (tag, value) => console.log(`${tag} => ${value}`);
