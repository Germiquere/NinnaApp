import { AddBox } from "@mui/icons-material";
import { Box, IconButton, List, TextField, Tooltip } from "@mui/material";
import { CategoryItem } from "./CategoryItem";
import { useCategoryStore, useForm, useToUpperLowerCase } from "../../../hooks";
import { useEffect, useRef } from "react";

export const Category = () => {
  const {
    handleStartNewCategory,
    activeCategory,
    handleSetActiveCategory,
    handleStartSaveCategory,
    categories,
    handleStartDeletingCategory,
    handleSortCategories,
  } = useCategoryStore();
  const { setTextToUpperLowerCase } = useToUpperLowerCase();
  useEffect(() => {
    // console.log(activeBrand);
    // console.log(formState);
  }, [activeCategory]);
  const formData = {
    category: "",
  };
  const { formState, category, onInputChange, onResetForm } = useForm(formData);
  const categoryInputRef = useRef(null);

  const onNewCategory = () => {
    const newCategory = {
      ...activeCategory,
      category: category,
    };
    if (category.trim().length === 0) return categoryInputRef.current.focus();
    // console.log(activeBrand);
    // console.log(newBrand);
    handleSetActiveCategory(newCategory);
    handleStartSaveCategory();
  };
  return (
    <>
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
            inputRef={categoryInputRef}
            id="standard-basic"
            label="Categoria"
            variant="filled"
            fullWidth
            sx={{ width: "100%", mb: 2 }}
            name="category"
            value={setTextToUpperLowerCase(category)}
            onChange={onInputChange}
            onFocus={handleStartNewCategory}
            onBlur={() => {
              if (category.trim().length === 0) {
                handleStartDeletingCategory();
              }
            }}
          />
          <Tooltip title="Añadir categoria" arrow sx={{ mb: 2, mr: "6px" }}>
            <IconButton
              color="primary"
              onClick={() => {
                onNewCategory();
                onResetForm();
              }}
              // disabled={isSaving}
            >
              <AddBox />
            </IconButton>
          </Tooltip>
        </Box>
        <List className="animate__animated animate__fadeIn ">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </List>
      </Box>
    </>
  );
};
