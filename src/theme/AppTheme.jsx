import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { ninnaTheme } from "./";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ninnaTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};
