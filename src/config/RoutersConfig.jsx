import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainAdminPage from "../pages/admin/MainAdminPage";
import TambahUserPage from "../pages/admin/tambah-user/TambahUserPage";
import App from "../pages/App";
import LoginPage from "../pages/autentikasi/login/LoginPage";
import RegisterPage from "../pages/autentikasi/register/RegisterPage";
import DaftarPengunjungPage from "../pages/user/daftar-pengunjung/DaftarPengunjungPage";
import DtksPage from "../pages/user/dtks/DtksPage";
import MainUserPage from "../pages/user/MainUserPage";
import PengusulanKisPage from "../pages/user/pengusulan-kis/PengusulanKisPage";

const RoutersConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="admin" element={<MainAdminPage />}>
          <Route index element={<TambahUserPage />} />
        </Route>
        <Route path="user" element={<MainUserPage />}>
          <Route index element={<DtksPage />} />
          <Route path="daftar-pengunjung" element={<DaftarPengunjungPage />} />
          <Route path="pengusulan-kis" element={<PengusulanKisPage />} />
          {/* <Route path="kusioner" element={<KusionerPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersConfig;
