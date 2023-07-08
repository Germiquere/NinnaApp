import { useDispatch, useSelector } from "react-redux";
import { setQuantity } from "../store/salingProduct/salingProductSlice";

export const useSalingProductStore = () => {
  const dispatch = useDispatch();
  const { quantity } = useSelector((state) => state.salingProduct);
  const handleSetQuantity = (product) => {
    dispatch(setQuantity(product));
  };

  return {
    //    PROPIEDADES
    quantity,
    // METODOS
    handleSetQuantity,
  };
};
