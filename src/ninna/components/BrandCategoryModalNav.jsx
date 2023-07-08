import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useBrandsStore, useCategoryStore } from "../../hooks";

export const BrandCategoryModalNav = () => {
  const { handleSetDisplayBrand, displayBrand, handleSetCloseDisplayBrand } =
    useBrandsStore();
  const {
    handleSetDisplayCategory,
    displayCategory,
    handleSetCloseDisplayCategory,
  } = useCategoryStore();
  return (
    <Box sx={{ display: "flex", position: "absolute", bottom: 0 }} gap={0}>
      <Typography
        onClick={() => {
          handleSetDisplayBrand();
          handleSetCloseDisplayCategory();
        }}
        sx={{
          backgroundColor: displayBrand ? "white" : "",
          borderRadius: "5px 5px 0 0",
          padding: "0 5px",
          mb: 0,
          cursor: "pointer",
          transition: "all .5s",
        }}
        color={displayBrand ? "primary" : "white"}
      >
        Marcas
      </Typography>
      <Typography
        onClick={() => {
          handleSetDisplayCategory();
          console.log(displayCategory);
          handleSetCloseDisplayBrand();
        }}
        sx={{
          backgroundColor: displayCategory ? "white" : "",
          borderRadius: "5px 5px 0 0",
          padding: "0 5px",
          cursor: "pointer",
          transition: "all .5s",
        }}
        color={displayCategory ? "primary" : "white"}
      >
        Categorias
      </Typography>
    </Box>
  );
};
