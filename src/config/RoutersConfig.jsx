import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages/App";
import LoginPage from "../pages/autentikasi/login/LoginPage";
import RegisterPage from "../pages/autentikasi/register/RegisterPage";
import DaftarPengunjungPage from "../pages/main/daftar-pengunjung/DaftarPengunjungPage";
import DtksPage from "../pages/main/dtks/DtksPage";
import KusionerPage from "../pages/main/kusioner/KusionerPage";
import MainPage from "../pages/main/MainPage";
import PengusulanKisPage from "../pages/main/pengusulan-kis/PengusulanKisPage";

const RoutersConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="main" element={<MainPage />}>
          <Route index element={<DtksPage />} />
          <Route path="daftar-pengunjung" element={<DaftarPengunjungPage />} />
          <Route path="pengusulan-kis" element={<PengusulanKisPage />} />
          <Route path="kusioner" element={<KusionerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersConfig;
