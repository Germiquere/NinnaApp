import { useDispatch, useSelector } from "react-redux";
import { setText } from "../store/search/searchSlice";

export const useSearchStore = () => {
  const { searchText } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const handleSearch = (text) => {
    dispatch(setText(text));
  };
  return {
    // PROPIEDADES
    searchText,
    // METODOS
    handleSearch,
  };
};
