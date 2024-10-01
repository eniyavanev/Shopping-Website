import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   loading: false,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productRequest: (state, action) => {
            state.loading = true;
        },
       productSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        productFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {setProducts} = productsSlice.actions;
export default productsSlice.reducer;

