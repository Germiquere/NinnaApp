import { Add, LoginOutlined, Settings } from "@mui/icons-material";
import { AppBar, Box, Grid, IconButton, Toolbar, Tooltip } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { NavItems } from "./NavItems";
import { useAuthStore, useBrandsStore, useProductsStore } from "../../hooks";
import { useLocation } from "react-router-dom";
export const NavBar = () => {
  const { handleLogout } = useAuthStore();
  const { handleStartNewProduct, isSaving } = useProductsStore();
  const { handleSetOpen } = useBrandsStore();
  const location = useLocation();
  console.log(location);
  const onLogout = () => {
    console.log("logout");
    handleLogout();
  };
  const onClickNewProduct = () => {
    handleStartNewProduct();
  };
  return (
    <AppBar position="fixed" sx={{}}>
      <Toolbar>
        {/* LOGO */}
        {/* <IconButton>
          <MenuOutlined />
        </IconButton> */}
        <Grid
          container
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <NavItems />
          <Box display={"flex"} sx={{ textAlign: "center" }} gap={1}>
            {/* TODO:hacer que cambien el nombre segun si estoy en venta o productos */}

            <Tooltip
              title={location.pathname === "/" ? "Alta producto" : "Alta Venta"}
              arrow
            >
              <IconButton
                color="inherit"
                onClick={onClickNewProduct}
                disabled={isSaving}
              >
                <Add />
              </IconButton>
            </Tooltip>
            {location.pathname === "/" && (
              <Tooltip title="Administrar marcas y categorias" arrow>
                <IconButton color="inherit" onClick={handleSetOpen}>
                  <Settings />
                </IconButton>
              </Tooltip>
            )}

            <SearchBar />

            <Tooltip title="Cerrar sesión" arrow onClick={onLogout}>
              <IconButton color="inherit">
                <LoginOutlined />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
