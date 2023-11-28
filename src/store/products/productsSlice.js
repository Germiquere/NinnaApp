import { createSlice } from "@reduxjs/toolkit";
export const productsSlice = createSlice({
    name: "products",
    initialState: {
        adding: false,
        edit: false,
        isSaving: false,
        isLoading: true,
        products: [],
        activeProduct: null,
        errorMessage: false,
        // activeProduct: {
        //   id: "abc",
        //   brand: "Jorge Rubio",
        //   product: "Gran Reserva",
        //   description: "Soy una descripcion de un producto",
        //   stock: "20",
        //   price: "1000",
        //   sellingPrice: "1500",
        // },
    },
    reducers: {
        savingNewProduct: (state, { payload }) => {
            state.isSaving = true;
        },
        addNewEmptyProduct: (state, { payload }) => {
            state.adding = true;
            state.isSaving = false;
            state.errorMessage = false;
        },
        setActiveProduct: (state, { payload }) => {
            const payload2 = {
                ...payload,
                sellingPrice: (
                    parseFloat(payload.price) +
                    (parseFloat(payload.markUp) * parseFloat(payload.price)) /
                        100
                ).toFixed(2),
                price: parseFloat(payload.price).toFixed(2),
                markUp: parseFloat(payload.markUp).toFixed(2),
            };

            state.activeProduct = payload2;
        },
        setEditProduct: (state) => {
            state.edit = true;
        },
        setProducts: (state, { payload }) => {
            state.products = payload;
        },
        setSaving: (state, { payload }) => {
            // TODO:MENSAJE
            state.isSaving = true;
        },
        updateProduct: (state, { payload }) => {
            state.isSaving = false;
            state.edit = false;
            state.adding = false;
            state.errorMessage = false;
            state.products.push(payload);

            state.products = state.products.map((product) => {
                if (product.id === payload.id) {
                    return payload;
                }
                return product;
            });
            // state.products = state.products.sort((a, b) =>
            //   a.product.localeCompare(b.product)
            // );
        },
        updateProductEdited: (state, { payload }) => {
            state.isSaving = false;
            state.edit = false;
            state.adding = false;
            state.errorMessage = false;
            // state.products.push(payload);

            state.products = state.products.map((product) => {
                if (product.id === payload.id) {
                    return payload;
                }
                return product;
            });
            // state.products = state.products.sort((a, b) =>
            //   a.product.localeCompare(b.product)
            // );
        },
        deleteProductById: (state, { payload }) => {
            state.isSaving = false;
            state.activeProduct = null;
            state.edit = false;
            state.errorMessage = false;
            state.products = state.products.filter(
                (product) => product.id !== payload
            );
        },
        setCancelEditProduct: (state, { payload }) => {
            state.adding = false;
            state.edit = false;
            state.errorMessage = false;
        },
        setClearProductsonLogout: (state, { payload }) => {
            state.adding = false;
            state.isLoading = false;
            state.edit = false;
            state.products = [];
            state.activeProduct = null;
        },
        setErrorMessage: (state) => {
            state.errorMessage = true;
        },
    },
});
export const {
    addNewEmptyProduct,
    setActiveProduct,
    setProducts,
    updateProduct,
    updateProductEdited,
    deleteProductById,
    savingNewProduct,
    setEditProduct,
    setSaving,
    setCancelEditProduct,
    setClearProductsonLogout,
    setErrorMessage,
} = productsSlice.actions;
