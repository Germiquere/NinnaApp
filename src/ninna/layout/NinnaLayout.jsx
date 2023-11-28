import { Box, Grid, Toolbar } from "@mui/material";
import { EditProducts, NavBar } from "../components";
import { NewProductsModal } from "../components/products/NewProductsModal";
import { useBrandsStore, useProductsStore } from "../../hooks";
import { BrandCategoryModal } from "../components/BrandCategoryModal";
import { Outlet } from "react-router-dom";
// import { SalesModal } from "../components/sales";
export const NinnaLayout = () => {
    const { adding, edit } = useProductsStore();
    const { open } = useBrandsStore();
    return (
        <Grid>
            <NavBar />
            <Box
                component={"main"}
                sx={{
                    flexGrow: 1,
                }}
                className="animate__animated animate__fadeIn "
            >
                <Toolbar />
                <Outlet />
            </Box>
            {adding && <NewProductsModal />}
            {edit && <EditProducts />}
            {open && <BrandCategoryModal />}
            {/* <SalesModal /> */}
        </Grid>
    );
};
