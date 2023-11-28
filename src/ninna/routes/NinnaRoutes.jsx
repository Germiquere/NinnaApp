import { Navigate, Route, Routes } from "react-router-dom";
import { ProductsPage } from "../pages";
import { VentasPage } from "../pages/VentasPage";
import { NinnaLayout } from "../layout/NinnaLayout";

export const NinnaRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<NinnaLayout />}>
                <Route index element={<ProductsPage />} />
                <Route path="/ventas" element={<VentasPage />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
};
