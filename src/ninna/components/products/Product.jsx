import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { useMemo } from "react";
import { useProductsStore } from "../../../hooks/useProductsStore";
import { Delete, DeleteOutline } from "@mui/icons-material";

export const Product = ({ item }) => {
  const { handleSetActiveProduct, handleSetEditProduct } = useProductsStore();
  const newDescription = useMemo(() => {
    return item.description.length > 30
      ? item.description.substring(0, 30) + "..."
      : item.description;
  }, [item.description]);
  const onClickProduct = () => {
    handleSetActiveProduct(item);
    handleSetEditProduct();
  };
  // const setSellingPrice = () => {
  //   return parseInt(item.price) + parseInt(item.markUp);
  // };
  return (
    <ListItem
      disablePadding
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #00000099",
        padding: 0,
      }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          //   justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        onClick={onClickProduct}
      >
        <ListItemText
          sx={{ flex: "1" }}
          primary={item.brand}
          secondary={item.category}
        />
        <ListItemText
          sx={{ flex: "3" }}
          primary={item.product}
          secondary={newDescription}
        />
        <ListItemText
          sx={{ flex: "1" }}
          primary={item.stock}
          // primaryTypographyProps={{ fontSize: "1rem" }}
        />
        <ListItemText sx={{ flex: "1" }} primary={`$ ${item.price}`} />
        <ListItemText sx={{ flex: "1" }} primary={`$ ${+item.sellingPrice}`} />
      </ListItemButton>
    </ListItem>
  );
};
