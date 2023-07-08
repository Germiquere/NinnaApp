import { Navigate, Route, Routes } from "react-router-dom";
import { ProductsPage } from "../pages";
import { VentasPage } from "../pages/VentasPage";

export const NinnaRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/ventas" element={<VentasPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
