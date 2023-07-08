import { DeleteOutline } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText, Tooltip } from "@mui/material";
import { useBrandsStore } from "../../../hooks";

export const BrandItem = ({ brand }) => {
  const { handleStartDeletingBrand, handleSetActiveBrand } = useBrandsStore();
  return (
    <ListItem
      disablePadding
      sx={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #00000099",
        borderRadius: 1,
        padding: 1,
        mb: 1,
        transition: "all 0.2s",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <ListItemText sx={{ flex: "1" }} primary={brand.brand} />
      <Tooltip title="Eliminar" arrow sx={{ zIndex: 10 }}>
        <IconButton
          size="small"
          onClick={() => {
            handleSetActiveBrand(brand);
            handleStartDeletingBrand();
          }}
        >
          <DeleteOutline />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};
