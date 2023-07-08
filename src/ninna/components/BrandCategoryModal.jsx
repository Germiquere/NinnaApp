import { Add, AddBox, Close, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { BrandCategoryModalNav } from "./BrandCategoryModalNav";
import { Category } from "./categories";
import { Brand } from "./brands";
import { useBrandsStore, useCategoryStore } from "../../hooks";

export const BrandCategoryModal = () => {
  const { displayBrand, handleSetClose, isSaving } = useBrandsStore();
  const { displayCategory, handleSetCloseDisplayCategory } = useCategoryStore();
  return (
    <Dialog open={true}>
      <Box
        sx={{
          backgroundColor: "#db7111",
          pt: 2,
          pb: 4,
          px: 2,
          position: "relative",
          //   display: "flex",
          //   justifyContent: "space-between",
          minWidth: 600,
        }}
        color={"white"}
      >
        <Box
          sx={{
            backgroundColor: "#db7111",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
            <Typography fontSize={20}>
              Administrar marcas y categorias
            </Typography>
            {/* {isSaving && <CircularProgress color="warning" size="1rem" />} */}
          </Box>
          <Tooltip title="Cerrar" arrow>
            <IconButton
              color="inherit"
              size="small"
              onClick={() => {
                handleSetClose();
                handleSetCloseDisplayCategory();
              }}
            >
              <Close />
            </IconButton>
          </Tooltip>
          <BrandCategoryModalNav />
        </Box>
      </Box>
      <DialogContent
        sx={{
          minWidth: 600,
          "&::-webkit-scrollbar": {
            width: "5px",
            height: "5px",
            // display: "none",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "darkgray",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "lightgray",
            borderRadius: "10px",
          },
        }}
      >
        {displayBrand && <Brand />}
        {displayCategory && <Category />}
      </DialogContent>
    </Dialog>
  );
};
