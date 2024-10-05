import { apiSlice } from "./apiSlice";
import { getAllProducts, getSingleProduct } from "../../Constants/Constant";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search, page }) => {
        let link = `${getAllProducts}?page=${page}`;
        if (search) {
           link += `&search=${search}`
        }
        return {
          url: link,
          method: "GET",
        };
      },
    }),
    //get Single Product
    getProductById: builder.query({
      query: (id) => ({
        url: `${getSingleProduct}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productSlice;
