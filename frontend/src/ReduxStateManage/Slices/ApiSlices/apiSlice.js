import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../Constants/Constant";

const baseQuery = fetchBaseQuery({baseUrl,credentials:"include"});

export const apiSlice = createApi({
    name:"api",
    baseQuery,
    endpoints:(builder) => ({}),
})