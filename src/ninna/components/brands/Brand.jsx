import { AddBox } from "@mui/icons-material";
import { Box, IconButton, List, TextField, Tooltip } from "@mui/material";
import { BrandItem } from "./BrandItem";
import { useBrandsStore, useForm } from "../../../hooks";
import { useEffect, useRef } from "react";

export const Brand = () => {
  const {
    handleStartNewBrand,
    activeBrand,
    handleSetActiveBrand,
    handleStartSaveBrand,
    brands,
    handleStartDeletingBrand,
  } = useBrandsStore();
  useEffect(() => {
    // console.log(activeBrand);
    // console.log(formState);
  }, [activeBrand]);
  const formData = {
    brand: "",
  };
  const { formState, brand, onInputChange, onResetForm } = useForm(formData);
  const brandInputRef = useRef(null);
  const onNewBrand = () => {
    const newBrand = {
      ...activeBrand,
      brand: brand.toUpperCase(),
    };
    if (brand.trim().length === 0) return brandInputRef.current.focus();
    // console.log(activeBrand);
    // console.log(newBrand);
    handleSetActiveBrand(newBrand);
    handleStartSaveBrand();
  };

  return (
    <Box className="animate__animated animate__fadeIn ">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        gap={1}
      >
        <TextField
          size="small"
          inputRef={brandInputRef}
          id="standard-basic"
          label="Marca"
          variant="filled"
          fullWidth
          sx={{ width: "100%", mb: 2 }}
          name="brand"
          value={brand}
          onChange={onInputChange}
          onFocus={handleStartNewBrand}
          onBlur={() => {
            if (brand.trim().length === 0) {
              handleStartDeletingBrand();
              console.log("se borro la brand");
            }
          }}
        />
        <Tooltip title="Añadir marca" arrow sx={{ mb: 2, mr: "6px" }}>
          <IconButton
            color="primary"
            onClick={() => {
              onNewBrand();
              onResetForm();
            }}
            // disabled={isSaving}
          >
            <AddBox />
          </IconButton>
        </Tooltip>
      </Box>
      <List className="animate__animated animate__fadeIn ">
        {brands.map((brand) => (
          <BrandItem key={brand.id} brand={brand} />
        ))}
      </List>
    </Box>
  );
};
