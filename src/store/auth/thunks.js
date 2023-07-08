import { checkingCredentials, login, logout } from "./authSlice";
import {
  loginWithEmailPassword,
  logoutFirebase,
} from "../../firebase/providers";
import { setClearProductsonLogout } from "../products/productsSlice";
export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};
export const startLogInwithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const res = await loginWithEmailPassword({ email, password });
    console.log(email, password);

    console.log(res);
    if (!res.ok) return dispatch(logout(res));
    dispatch(login(res));
  };
};
export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
    dispatch(setClearProductsonLogout());
  };
};
