import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useProductsStore } from "../../../hooks/useProductsStore";
import { Product } from "./Product";
import { useSearchStore } from "../../../hooks/useSearchStore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const Products = () => {
  const { products } = useProductsStore();
  const { searchText } = useSearchStore();
  const location = useLocation();
  let filteredProducts = products;
  if (location.pathname === "/") {
    filteredProducts = products.filter(
      (product) =>
        product.product
          .toLowerCase()
          .trim()
          .includes(searchText.toLowerCase().trim()) ||
        product.brand
          .toLowerCase()
          .trim()
          .includes(searchText.toLowerCase().trim()) ||
        product.category
          .toLowerCase()
          .trim()
          .includes(searchText.toLowerCase().trim())
    );
  }

  return (
    <Box>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #db7111",
          backgroundColor: "#DEDCE1",
          position: "fixed",
          zIndex: 10,
        }}
      >
        <ListItemText sx={{ flex: "1" }} primary={"MARCA"} />
        <ListItemText sx={{ flex: "3" }} primary={"PRODUCTO"} />
        <ListItemText sx={{ flex: "1" }} primary={"STOCK"} />
        <ListItemText sx={{ flex: "1" }} primary={"COSTO"} />
        <ListItemText sx={{ flex: "1" }} primary={"FINAL"} />
      </ListItem>
      <List sx={{ pt: { xs: 9, md: 6 } }}>
        {filteredProducts.length === 0
          ? products.map((item) => (
              <Product key={item.id} item={item}></Product>
            ))
          : filteredProducts.map((item) => (
              <Product key={item.id} item={item}></Product>
            ))}
      </List>
    </Box>
  );
};
