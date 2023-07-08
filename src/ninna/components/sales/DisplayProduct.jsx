import { DeleteOutline } from "@mui/icons-material";
import {
  IconButton,
  ListItem,
  ListItemText,
  TextField,
  Tooltip,
} from "@mui/material";

export const DisplayProduct = () => {
  return (
    <ListItem
      disablePadding
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #00000099",
        // borderRadius: 1,
        py: 1,
        px: 2,
        // mb: 1,
        transition: "all 0.2s",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
        height: 30,
      }}
    >
      {/* TODO: EN EL PRIMARY DE CADA LISTITEM PONER LAS PROPS DEL PRODUCTO  */}
      <ListItemText
        sx={{ flex: "1" }}
        primary={1}
        primaryTypographyProps={{ fontSize: 13 }}
      ></ListItemText>
      <ListItemText
        sx={{ flex: "2" }}
        primary={"PRODUCTO"}
        primaryTypographyProps={{ fontSize: 13 }}
      />
      <ListItemText
        sx={{ flex: "1" }}
        primary={"RECARGO"}
        primaryTypographyProps={{ fontSize: 13 }}
      />
      <ListItemText
        sx={{ flex: "1" }}
        primary={"P.UNITARIO"}
        primaryTypographyProps={{ fontSize: 13 }}
      />
      <ListItemText
        sx={{ flex: "1" }}
        primary={"SUB TOTAL"}
        primaryTypographyProps={{ fontSize: 13 }}
      />
    </ListItem>
  );
};
