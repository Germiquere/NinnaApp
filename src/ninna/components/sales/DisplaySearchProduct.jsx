import {
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
} from "@mui/material";
import { useProductsStore } from "../../../hooks";

export const DisplaySearchProduct = ({
  p,
  handleSetProductName,
  handleDisableSetProductName,
  textFieldRef,
}) => {
  const { handleSetActiveProduct } = useProductsStore();
  return (
    <MenuItem
      onClick={() => {
        handleSetActiveProduct(p);
        handleSetProductName();
        // t(p);
        // handleDisableSetProductName(e);
      }}
    >
      <ListItemText
        sx={{ flex: "3" }}
        primary={p.product}
        secondary={`${p.brand} / ${p.category}`}
      />
      <ListItemText
        sx={{ flex: "1" }}
        primary={p.stock}
        // secondary={item.category}
      />
      <ListItemText
        sx={{ flex: "1" }}
        primary={`$ ${p.sellingPrice}`}
        // secondary={item.category}
      />
    </MenuItem>
  );
};
