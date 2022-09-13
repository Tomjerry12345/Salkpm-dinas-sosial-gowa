import { useState } from "react";
import { logged } from "./Utilitas";
const InputValidator = (input) => {
  const [notValid, setNotValid] = useState(() => {
    let i = [];
    // eslint-disable-next-line no-unused-vars
    for (let _ in input) {
      i.push(true);
    }
    return i;
  });

  const checkNotValid = (value) => {
    if (checkEmpty(value)) {
      return true;
    } else {
      return false;
    }
  };

  const updateValid = (value, index) => {
    const current = [...notValid];
    current[index] = checkNotValid(value);
    setNotValid(current);
  };

  const checkNotValidAll = () => {
    let notValidAll = false;

    notValid.map((value) => {
      if (value === true) {
        notValidAll = true;
      }
    });
    return notValidAll;
  };

  const messageNotValid = (value) => {
    if (checkEmpty(value)) {
      return "Form tidak boleh kosong";
    }
    return "";
  };

  const checkEmpty = (value) => {
    return value === "" ? true : false;
  };

  logged(`notValid => ${notValid}`);

  return {
    checkNotValid,
    checkNotValidAll,
    updateValid,
    messageNotValid,
  };
};

export default InputValidator;
