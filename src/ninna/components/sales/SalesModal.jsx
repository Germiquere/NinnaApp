import {
  AddBox,
  Close,
  DeleteOutline,
  ProductionQuantityLimitsOutlined,
} from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  InputBase,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  useAuthStore,
  useForm,
  useProductsStore,
  useSalingProductStore,
  useSearchStore,
} from "../../../hooks";
import { DateField } from "@mui/x-date-pickers";
import { DisplayProduct } from "./DisplayProduct";
import { DisplaySearchProduct } from "./DisplaySearchProduct";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export const SalesModal = () => {
  const { products, activeProduct } = useProductsStore();
  const { quantity, handleSetQuantity } = useSalingProductStore();
  // const { quantity } = useSelector((state) => state.salingProduct);

  const {
    start,
    onInputChange,
    formState,
    searchProduct,
    onResetForm,
    rec,
    // quantity,
    onFocus,
  } = useForm({
    start: new Date(),
    searchProduct: "",
    quantity: 1,
    rec: 0.0,
  });
  const [productName, setProductName] = useState(false);

  const filteredProduct =
    searchProduct.trim() === ""
      ? []
      : products.filter(
          (product) =>
            product.product
              .toLowerCase()
              .trim()
              .includes(searchProduct.toLowerCase().trim()) ||
            product.brand
              .toLowerCase()
              .trim()
              .includes(searchProduct.toLowerCase().trim()) ||
            product.category
              .toLowerCase()
              .trim()
              .includes(searchProduct.toLowerCase().trim())
        );
  // const handleSetProductName = () => {
  //   setProductName(true);
  // };
  const handleSetProductName = () => {
    setProductName(true);
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 8) {
      setProductName(false);
      // onResetForm();
    }
  };
  const handleDisableSetProductName = () => {
    setProductName(false);
    onResetForm();
  };
  // const test = [{ name: "name1" }, { name: "name2" }];
  return (
    <Dialog open={true} sx={{}}>
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
          <Typography fontSize={20}>Alta venta</Typography>
          {/* {isSaving && <CircularProgress color="warning" size="1rem" />} */}
        </Box>
        <Tooltip title="Cerrar" arrow>
          <IconButton
            color="inherit"
            size="small"
            onClick={() => console.log("hola")}
          >
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
        <Box sx={{ display: "flex", mb: 2 }} gap={1}>
          <DatePicker
            label="Fecha"
            slotProps={{ textField: { variant: "filled", size: "small" } }}
            name="start"
            value={start}
            onChange={onInputChange}
            format="dd/MM"
            fullWidth
          />
          <TextField
            // id="standard-basic"
            label="Cliente"
            variant="filled"
            name="cliente"
            //   value={setTextToUpperLowerCase(product)}
            //   onChange={onInputChange}
            size="small"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Forma de pago"
            variant="filled"
            select
            // fullWidth
            name="category"
            // value={category}
            // onChange={onInputChange}
            sx={{ width: 300 }}
            size="small"
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
            {/* {categories.map(({ category, id }) => (
              <MenuItem key={id} value={category}>
                {category}
              </MenuItem>
            ))} */}
            <MenuItem value="Contado efectivo">Contado efectivo</MenuItem>
            <MenuItem value="Billetera Santa Fe">Billetera Santa Fe</MenuItem>
            <MenuItem value="Tarjeta de credito">Tarjeta de credito</MenuItem>
            <MenuItem value="Tarjeta de dredito">Tarjeta de debito</MenuItem>
          </TextField>
        </Box>
        {/* TARJETA DE CREIDO */}
        <Box sx={{ display: "flex", mb: 1 }} gap={1}>
          <TextField
            id="standard-basic"
            label="Tarjeta"
            variant="filled"
            select
            size="small"
            // fullWidth
            name="card"
            // value={category}
            // onChange={onInputChange}
            sx={{ width: 300 }}
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
            {/* {categories.map(({ category, id }) => (
              <MenuItem key={id} value={category}>
                {category}
              </MenuItem>
            ))} */}
            <MenuItem value="Visa">Visa</MenuItem>
            <MenuItem value="Master Card">Master Card</MenuItem>
          </TextField>

          <TextField
            size="small"
            id="standard-basic"
            label="Num. tarjeta"
            placeholder="0000 0000 0000 0000"
            variant="filled"
            fullWidth
            name="cardNumber"
            format="0000-0000-0000-0000"
            //   value={setTextToUpperLowerCase(product)}
            //   onChange={onInputChange}
            sx={{ width: "100%" }}
          />
          <TextField
            size="small"
            id="standard-basic"
            label="Cuotas"
            variant="filled"
            // fullWidth
            name="payments"
            //   value={setTextToUpperLowerCase(product)}
            //   onChange={onInputChange}
          />
        </Box>
        <TextField
          size="small"
          id="standard-basic"
          label="Num. factura"
          variant="filled"
          fullWidth
          name="wallet"
          //   value={setTextToUpperLowerCase(product)}
          //   onChange={onInputChange}
          sx={{ mb: 2 }}
        />
        {/* BILLETERA SANTA FE */}
        <TextField
          size="small"
          id="standard-basic"
          label="Codigo de autorizacion"
          variant="filled"
          fullWidth
          name="wallet"
          //   value={setTextToUpperLowerCase(product)}
          //   onChange={onInputChange}
          sx={{ mb: 2 }}
        />
        {/* PRODUCTO */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            // border: "1px solid #db7111",
            mb: 2,
            borderRadius: 1,
            p: 1,
            position: "relative",
            // backgroundColor: "red",

            // height: "100%",
          }}
          gap={1}
        >
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              width: "100%",
              backgroundColor: "red",
              zIndex: 100,
              top: 55,
              left: 0,
            }}
            gap={1}
          >
            {products.map((product) => (
              <DisplaySearchProduct key={product.id} product={product} />
            ))}
          </Box> */}

          <Box
            sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            gap={1}
          >
            <TextField
              id="standard-basic"
              label="Producto"
              placeholder="Buscar..."
              variant="filled"
              name="searchProduct"
              fullWidth
              size="small"
              value={productName ? activeProduct.product : searchProduct}
              onChange={onInputChange}
              onKeyDown={handleKeyDown}

              // sx={{ mb: 2 }}
            />
            {!productName && (
              <Box
                sx={{
                  position: "absolute",
                  backgroundColor: "white",
                  width: "100%",
                  top: 55,
                  left: 0,
                  zIndex: 1000,
                  maxHeight: 370,
                  overflowY: "auto",
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
                  boxShadow: "  0px 2px 5px rgba(0, 0, 0, 0.5)",
                  borderRadius: 1,
                }}
              >
                {filteredProduct.map((p) => (
                  <DisplaySearchProduct
                    key={p.id}
                    p={p}
                    handleSetProductName={handleSetProductName}
                    handleDisableSetProductName={handleDisableSetProductName}
                  />
                ))}
              </Box>
            )}

            {/* <TextField
              id="standard-basic"
              label="Producto"
              variant="filled"
              select
              fullWidth
              name="product"
              size="small"
              // value={category}
              // onChange={onInputChange}
              sx={{ mb: 1 }}
              SelectProps={{
                renderValue: (selected) => selected,
                MenuProps: {
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                },
              }}
            >
              {products.map(({ product, id, stock, sellingPrice }) => (
                <MenuItem value={product} key={id}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                    // gap={1}
                  >
                    <Typography sx={{ fontSize: 13 }}>{product}</Typography>
                    <Box sx={{ display: "flex" }} gap={2}>
                      <Typography sx={{ fontSize: 13, flex: 2 }}>
                        {stock}
                      </Typography>
                      <Typography sx={{ fontSize: 13, flex: 1 }}>
                        {`$ ${sellingPrice}`}
                      </Typography>
                    </Box>
                  </Box>
                </MenuItem>
              ))}
            </TextField> */}
            <Box
              sx={{
                display: "flex",
                // mb: 2,
                // alignItems: "center",
                // justifyContent: "space-between",
              }}
              gap={1}
            >
              <TextField
                id="standard-basic"
                label="Cantidad"
                variant="filled"
                name="quantity"
                fullWidth
                size="small"
                type="number"
                // defaultValue={1}
                value={quantity}
                onChange={onInputChange}
                // sx={{ mb: 2 }}
                onFocus={onFocus}
              />
              <TextField
                size="small"
                fullWidth
                id="standard-basic"
                label="% Recargo"
                variant="filled"
                name="rec"
                type="number"
                // defaultValue={0.0}
                value={rec}
                //   value={setTextToUpperLowerCase(product)}
                onChange={onInputChange}
                // sx={{ mb: 2 }}
                onFocus={onFocus}
              />
            </Box>
          </Box>
          <Tooltip title="Añadir" arrow>
            <IconButton
              color="primary"
              onClick={() => {
                // onNewBrand();
                handleDisableSetProductName();
                console.log(formState);
                handleSetQuantity(formState);
              }}
              // disabled={isSaving}
            >
              <AddBox />
            </IconButton>
          </Tooltip>
        </Box>
        {/* DISPLAY PRODUCTS */}
        <Box
          sx={{
            // padding: 1,
            border: "1px solid #00000099",
            mb: 2,
            borderRadius: 1,
            height: 205,
            // overflowY: "auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <ListItem
            // disablePadding
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #db7111",
              backgroundColor: "#DEDCE1",
              // position: "fixed",
              zIndex: 10,
              height: 25,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <ListItemText
              sx={{ flex: "1" }}
              primary={"CANTIDAD"}
              primaryTypographyProps={{ fontSize: 13 }}
            />
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
          {/* TODO RENDERIZAR LOS PRODUCTOS EN BASE A LA CANTIDAD DE PRODUCTOS QUE HAY EN EL productsSaled */}
          <List
            sx={{
              mt: 2,
              overflowY: "auto",
              height: 200,
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
            {/* TODO PASARLE POR PROPS A EL DISPLAYPRODUCT EL PRODUCTO PARA PODER USAR LOS DATOS */}
            {/* <DisplayProduct /> */}
            <Box
              // sx={{display: "flex"}}
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                // marginTop: "6vh",
                // margin: "auto",
                padding: 7,
              }}
            >
              <ProductionQuantityLimitsOutlined
                color="primary"
                fontSize="large"
              />
              <Typography>Productos que añadis aparecen aqui</Typography>
            </Box>
          </List>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
          gap={1}
        >
          <Box
            sx={{
              backgroundColor: "#db7111",
              p: 1,
              borderRadius: 1,
              width: 100,
            }}
          >
            <Typography color={"white"}>Total</Typography>
            <Typography textAlign={"right"} color={"white"}>
              {/* {(+price + (+price * +markUp) / 100).toFixed(2)} */}
              sarasa
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ paddingRight: 3 }}>
        <Button
          type="submit"
          onClick={() => console.log("hola")}
          variant="outlined"
          size="small"
        >
          <DeleteOutline sx={{ fontSize: 20 }} />
          Eliminar
        </Button>
        <Button
          size="small"
          type="submit"
          onClick={() => console.log("hola")}
          variant="outlined"
        >
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
