import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
const navItems = [
  { name: "Productos", path: "/" },
  { name: "Ventas", path: "/ventas" },
];
export const NavItems = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "flex", flexGrow: 1 } }} gap={1}>
      {navItems.map((item) => (
        // <Button key={item} sx={{ color: "#fff" }}>
        //   {item}
        // </Button>
        <NavLink
          className={({ isActive }) => ` navLinks ${isActive ? "active" : ""}`}
          to={item.path}
          key={item.name}
        >
          {item.name}
        </NavLink>
      ))}
    </Box>
  );
};
