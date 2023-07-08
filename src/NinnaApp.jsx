import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const NinnaApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
