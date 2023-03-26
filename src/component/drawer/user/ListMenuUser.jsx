import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

export const ListMenuUser = ({ onClick, isSelectedPage }) => {
  return (
    <React.Fragment>
      <ListItemButton onClick={() => onClick("dtks")} selected={isSelectedPage("/main")}>
        <ListItemIcon>
          <SearchIcon color="cinav" />
        </ListItemIcon>
        <ListItemText primary="Cek DTKS" />
      </ListItemButton>
      <ListItemButton onClick={() => onClick("pengunjung")} selected={isSelectedPage("/user/daftar-pengunjung")}>
        <ListItemIcon>
          <ArticleIcon color="cinav" />
        </ListItemIcon>
        <ListItemText primary="Daftar Pengunjung" />
      </ListItemButton>
      <ListItemButton onClick={() => onClick("kis")} selected={isSelectedPage("/user/pengusulan-kis")}>
        <ListItemIcon>
          <NoteAddIcon color="cinav" />
        </ListItemIcon>
        <ListItemText primary="Pengusulan KIS" />
      </ListItemButton>
    </React.Fragment>
  );
};
