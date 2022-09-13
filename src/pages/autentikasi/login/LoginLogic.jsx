import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputValidator from "../../../values/InputValidator";
import { logged } from "../../../values/Utilitas";

const LoginLogic = () => {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [click, setClick] = useState(false);

  const [notif, setNotif] = useState({
    open: false,
    message: "",
    variant: "",
  });

  const validator = InputValidator(input);

  const onChange = (event, index) => {
    const { name, value } = event.target;
    validator.updateValid(value, index);
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onLogin = () => {
    setClick(true);

    if (!validator.checkNotValidAll()) {
      setNotif({
        open: true,
        message: "Berhasil login",
        variant: "success",
      });
    }

    // localStorage.setItem("auth", "true");
    // navigate("/main");
  };

  const onError = (value) => (click ? validator.checkNotValid(value) : null);

  const onHelperText = (value) => (click ? validator.messageNotValid(value) : null);

  const disableButton = () => (click ? validator.checkNotValidAll() : null);

  return {
    func: {
      onLogin,
      onChange,
      onError,
      onHelperText,
      disableButton,
    },
    value: {
      input,
      notif,
      setNotif,
    },
  };
};

export default LoginLogic;
