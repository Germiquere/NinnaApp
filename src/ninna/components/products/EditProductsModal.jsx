import { useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  useBrandsStore,
  useCategoryStore,
  useForm,
  useProductsStore,
  useToUpperLowerCase,
} from "../../../hooks";
import { Close, DeleteOutline } from "@mui/icons-material";
export const EditProducts = () => {
  const {
    activeProduct,
    handleSetActiveProduct,
    handleStartSaveProductEdited,
    isSaving,
    handleSetCancelEditProduct,
    handleStartDeletingProduct,
  } = useProductsStore();
  const { brands } = useBrandsStore();
  const { categories } = useCategoryStore();
  const {
    brand,
    category,
    description,
    id,
    price,
    product,
    // sellingPrice,
    stock,
    markUp,
    onInputChange,
    formState,
  } = useForm(activeProduct);
  const { setTextToUpperLowerCase } = useToUpperLowerCase();

  const onSaveNote = () => {
    handleSetActiveProduct(formState);
    handleStartSaveProductEdited();
  };
  const onCancel = () => {
    handleSetCancelEditProduct();
  };
  const onDelete = () => {
    handleStartDeletingProduct();
  };
  return (
    <Dialog open={true}>
      <DialogTitle
        sx={{
          backgroundColor: "#db7111",
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
        color={"white"}
      >
        <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
          <Typography fontSize={20}>Editar Producto</Typography>
          {isSaving && <CircularProgress color="warning" size="1rem" />}
        </Box>
        <Tooltip title="Cerrar" arrow>
          <IconButton color="inherit" size="small" onClick={onCancel}>
            <Close />
          </IconButton>
        </Tooltip>
      </DialogTitle>
      <DialogContent
        sx={{
          minWidth: 600,
          "&::-webkit-scrollbar": {
            width: "5px",
            height: "5px",
            // display: "none",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "darkgray",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "lightgray",
            borderRadius: "10px",
          },
        }}
      >
        <Box sx={{ display: "flex", mb: 2 }} gap={3}>
          <TextField
            size="small"
            label="Marca"
            variant="filled"
            select
            fullWidth
            name="brand"
            value={brand}
            onChange={onInputChange}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  style: {
                    maxHeight: 200,
                  },
                },
              },
            }}
          >
            {brands.map(({ brand, id }) => (
              <MenuItem key={id} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            size="small"
            id="standard-basic"
            label="Categoría"
            variant="filled"
            select
            fullWidth
            name="category"
            value={category}
            onChange={onInputChange}
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  style: {
                    maxHeight: 200,
                  },
                },
              },
            }}
          >
            {categories.map(({ category, id }) => (
              <MenuItem key={id} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <TextField
          size="small"
          id="standard-basic"
          label="Producto"
          variant="filled"
          fullWidth
          name="product"
          value={setTextToUpperLowerCase(product)}
          onChange={onInputChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          size="small"
          label="Descripcion del producto"
          variant="filled"
          // InputProps={{ disableUnderline: true }}
          multiline
          maxRows={Infinity}
          // onClick={() => console.log("hola")}
          onChange={onInputChange}
          name="description"
          value={setTextToUpperLowerCase(description)}
          sx={{ width: "100%", mb: 2 }}
        ></TextField>
        <Box sx={{ display: "flex", mb: 2 }} gap={3}>
          <TextField
            size="small"
            label="Precio de compra"
            variant="filled"
            fullWidth
            name="price"
            value={price}
            onChange={onInputChange}
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            size="small"
            label="Gancia producto"
            variant="filled"
            // defaultValue="30"
            fullWidth
            type="number"
            name="markUp"
            value={markUp}
            onChange={onInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">%</InputAdornment>
              ),
              step: 0.01,
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <TextField
              size="small"
              label="Stock"
              variant="filled"
              fullWidth
              name="stock"
              value={stock}
              onChange={onInputChange}
              type="number"
            />
          </Box>
          <Box sx={{ display: "flex" }} gap={1}>
            <Box
              sx={{
                backgroundColor: "#db7111",
                p: 1,
                borderRadius: 1,
                width: 100,
              }}
            >
              <Typography color={"white"}>Costo</Typography>
              <Typography textAlign={"right"} color={"white"}>
                {parseFloat(price).toFixed(2)}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#db7111",
                p: 1,
                borderRadius: 1,
                width: 100,
              }}
            >
              <Typography color={"white"}>Final</Typography>
              <Typography textAlign={"right"} color={"white"}>
                {(+price + (+price * +markUp) / 100).toFixed(2)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ paddingRight: 3 }}>
        <Button
          type="submit"
          onClick={onDelete}
          variant="outlined"
          size="small"
        >
          <DeleteOutline sx={{ fontSize: 20 }} />
          Eliminar
        </Button>
        <Button
          type="submit"
          onClick={onSaveNote}
          variant="outlined"
          size="small"
        >
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
