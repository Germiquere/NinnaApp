import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { NinnaRoutes } from "../ninna/routes/NinnaRoutes";
import { useAuthStore, useCheckAuth } from "../hooks";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {
  const { status } = useAuthStore();

  useCheckAuth();
  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<NinnaRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};