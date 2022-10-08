import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseConfig from "../../../config/FirebaseConfig";
import InputValidator from "../../../values/InputValidator";

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

  const { getData } = FirebaseConfig();

  const onChange = (event, index) => {
    const { name, value } = event.target;
    validator.updateValid(value, index);
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onLogin = async () => {
    setClick(true);
    if (!validator.checkNotValidAll()) {
      setNotif({
        open: true,
        message: "Silahkan tunggu ...",
        variant: "progress",
      });
      const snapshot = await getData("admin");
      snapshot.forEach((doc) => {
        const data = doc.data();

        if (input.username === data.username && input.password === data.password) {
          localStorage.setItem("auth", "true");
          localStorage.setItem("move-page", "null");
          localStorage.setItem("index-menu", "null");
          navigate("/main");
        } else {
          setNotif({
            open: true,
            message: "Username atau password salah",
            variant: "error",
          });
        }
      });
    }
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
