import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import AppBarAdminComponent from "../../component/appbar/admin/AppBarAdminComponent";
import DrawerAdminComponent from "../../component/drawer/admin/DrawerAdminComponent";

const MainAdminPage = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarAdminComponent open={open} toggleDrawer={toggleDrawer} />
      <DrawerAdminComponent open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Box sx={{ m: 2 }}>
          <Outlet />
        </Box>

        {/* <FooterComponent /> */}
      </Box>
    </Box>
  );
};

export default MainAdminPage;
