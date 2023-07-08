import { Alert, Button, Grid, TextField } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useAuthStore, useForm } from "../../hooks";

export const LoginPage = () => {
  const { handleStartLogInwithEmailPassword, isAuthenticated, errorMessage } =
    useAuthStore();
  var formValues = {
    // email: "ninnaregaleria@admin.com",
    // password: "//NI332211nna",
    email: "",
    password: "",
  };
  const { email, password, onInputChange } = useForm(formValues);
  const onSubmit = (e) => {
    e.preventDefault();
    // dis(startLogInwithEmailPassword({ email, password }));
    console.log(email, password);
    handleStartLogInwithEmailPassword({ email, password });
  };
  return (
    <AuthLayout title="NINNA REGALERIA">
      <form onSubmit={onSubmit}>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              variant="filled"
              autoFocus
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              variant="filled"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid container>
            <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">Usuario o contraseña incorrectos</Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticated}
              >
                Ingresar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
