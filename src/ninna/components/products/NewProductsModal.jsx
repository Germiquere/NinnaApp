import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
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
import { useEffect } from "react";
import { Close } from "@mui/icons-material";
export const NewProductsModal = () => {
  const {
    activeProduct,
    handleSetActiveProduct,
    handleStartSaveProduct,
    isSaving,
    handleStartNewProduct,
    handleSetErrorMessage,
    errorMessage,
    handleSetCancelEditProduct,
    handleStartDeletingProduct,
  } = useProductsStore();
  const {
    brand,
    description,
    category,
    id,
    price,
    product,
    sellingPrice,
    stock,
    markUp,
    onInputChange,
    formState,
    onFocus,
  } = useForm(activeProduct);
  // useEffect(() => {
  //   handleSetActiveProduct(formState);
  // }, [formState]);
  const { brands } = useBrandsStore();
  const { categories } = useCategoryStore();
  const onSaveNote = () => {
    if (!brand || !category || !product || !price || !markUp || !stock) {
      handleSetErrorMessage();
      return;
    }
    handleSetActiveProduct(formState);
    handleStartSaveProduct();
  };
  const onSaveNewNote = () => {
    if (!brand || !category || !product || !price || !markUp || !stock) {
      handleSetErrorMessage();
      return;
    }
    handleSetActiveProduct(formState);
    handleStartSaveNote();
    handleStartNewProduct();
  };
  const onCancel = () => {
    handleSetCancelEditProduct();
    handleStartDeletingProduct();
  };
  const { setTextToUpperLowerCase } = useToUpperLowerCase();
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
          <Typography fontSize={20}>Alta Producto</Typography>
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
            required
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
            required
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
          required
        />
        <TextField
          size="small"
          label="Descripcion del producto"
          variant="filled"
          // InputProps={{ disableUnderline: true }}
          multiline
          maxRows={Infinity}
          name="description"
          value={setTextToUpperLowerCase(description)}
          onChange={onInputChange}
          sx={{ width: "100%", mb: 2 }}
        ></TextField>
        <Box sx={{ display: "flex", mb: 2 }} gap={3}>
          <TextField
            size="small"
            id="standard-basic"
            label="Precio de compra"
            variant="filled"
            fullWidth
            name="price"
            value={price}
            onChange={onInputChange}
            type="number"
            onFocus={onFocus}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              step: 0.01,
            }}
            required
          />
          <TextField
            size="small"
            id="standard-basic"
            label="Gancia producto"
            variant="filled"
            // defaultValue="30"
            fullWidth
            type="number"
            name="markUp"
            value={markUp}
            onChange={onInputChange}
            required
            onFocus={onFocus}
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
              required
              // value={stock}
              // onChange={onInputChange}
            />
          </Box>
          <Box sx={{ display: "flex", mb: 2 }} gap={1}>
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
                {/* TODO: HACER QUE SE LE SUME EL PRECIO DE LA GANANCIA EN PORCENTAJE. PREGUNTAR AL CLIENTE */}
                {(+price + (+price * +markUp) / 100).toFixed(2)}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography>* Campos obligatorios</Typography>
        <Grid container mt={2}>
          <Grid item xs={12} display={errorMessage ? "" : "none"}>
            <Alert severity="error">Completa todos los campos *</Alert>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ paddingRight: 3 }}>
        <Button onClick={onSaveNewNote} variant="outlined" size="small">
          Aceptar y nuevo
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
