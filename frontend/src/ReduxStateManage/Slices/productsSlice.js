import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   loading: false, //ithu ethukaga na frontend la irunthu request pana data vara varaikum wait pannanum so, atha kaatrathukaga thaan loading use panrom true na load aaguthu , and false na load aagala
   error: null,
   products: []
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsRequest: (state, action) => {
            state.loading = true;
        },
       productsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
        },
        productsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {productsRequest,productsSuccess,productsFailure} = productsSlice.actions;
export default productsSlice.reducer;

