import { useLocation, useNavigate } from "react-router-dom";

const DrawerLogic = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSelectedPage = (value) => {
    if (location.pathname === value) return true;
    else return false;
  };

  const onClick = (value) => {
    if (value === "dtks") {
      navigate("/");
    } else if (value === "pengunjung") {
      navigate("/user/daftar-pengunjung");
    } else if (value === "kis") {
      navigate("/user/pengusulan-kis");
    }
  };

  return {
    onClick,
    isSelectedPage,
  };
};

export default DrawerLogic;
