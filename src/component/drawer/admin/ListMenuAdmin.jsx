import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";

export const ListMenuAdmin = ({ onClick, isSelectedPage }) => {
  return (
    <React.Fragment>
      <ListItemButton onClick={() => onClick("dtks")} selected={isSelectedPage("/admin")}>
        <ListItemIcon>
          <PeopleIcon color="cinav" />
        </ListItemIcon>
        <ListItemText primary="List User" />
      </ListItemButton>
    </React.Fragment>
  );
};
