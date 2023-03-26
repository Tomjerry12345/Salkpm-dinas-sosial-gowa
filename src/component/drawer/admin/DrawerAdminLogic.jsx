import { useLocation, useNavigate } from "react-router-dom";

const DrawerAdminLogic = () => {
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
      navigate("/main/daftar-pengunjung");
    } else if (value === "kis") {
      navigate("/main/pengusulan-kis");
    }
  };

  return {
    onClick,
    isSelectedPage,
  };
};

export default DrawerAdminLogic;
