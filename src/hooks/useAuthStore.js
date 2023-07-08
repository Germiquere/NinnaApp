import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startLogInwithEmailPassword,
  startLogout,
} from "../store/auth/thunks";
export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isAuthenticated = useMemo(() => status === "checking", [status]);
  const handleCheckingAuthentication = () => {
    dispatch(checkingAuthentication());
  };
  const handleStartLogInwithEmailPassword = ({ email, password }) => {
    dispatch(startLogInwithEmailPassword({ email, password }));
  };
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return {
    //PROPIEDADES
    status,
    isAuthenticated,
    errorMessage,
    //METODOS
    handleCheckingAuthentication,
    handleStartLogInwithEmailPassword,
    handleLogout,
  };
};
