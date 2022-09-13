import { InputAdornment } from "@mui/material";

export const setIconInput = (icons, position) => {
  return {
    startAdornment: (
      <InputAdornment position={position}>{icons}</InputAdornment>
    ),
  };
};

export const setLocalItem = (key, value) => localStorage.setItem(key, value);

export const getLocalItem = (key) => localStorage.getItem(key);

export const logged = (message) => console.log(message);
