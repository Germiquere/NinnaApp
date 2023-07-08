import { DeleteOutline } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText, Tooltip } from "@mui/material";
import { useCategoryStore } from "../../../hooks";

export const CategoryItem = ({ category }) => {
  const { handleStartDeletingCategory, handleSetActiveCategory } =
    useCategoryStore();
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
      <ListItemText sx={{ flex: "1" }} primary={category.category} />
      <Tooltip title="Eliminar" arrow sx={{ zIndex: 10 }}>
        <IconButton
          size="small"
          onClick={() => {
            handleSetActiveCategory(category);
            handleStartDeletingCategory();
          }}
        >
          <DeleteOutline />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};
