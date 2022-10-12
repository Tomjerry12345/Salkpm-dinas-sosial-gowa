import { useState } from "react";
import { logO } from "./Utilitas";
const InputValidator = (input, x) => {
  const [notValid, setNotValid] = useState(() => {
    let i = [];
    // eslint-disable-next-line no-unused-vars

    if (input !== null) {
      for (let _ in input) {
        i.push(true);
      }
    } else {
      for (let j = 0; j < x; j++) {
        i.push(true);
      }
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

    logO("notValid", notValid);

    notValid.map((value) => {
      if (value === true) {
        notValidAll = true;
      }
    });

    // const notValidAll = notValid.some((val) => val === false);

    logO("notValidAll", notValidAll);

    return !notValidAll;
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

  return {
    checkNotValid,
    checkNotValidAll,
    updateValid,
    messageNotValid,
  };
};

export default InputValidator;
