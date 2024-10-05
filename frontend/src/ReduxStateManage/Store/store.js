import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import productsReducer from "../Slices/productsSlice";
import { apiSlice } from "../Slices/ApiSlices/apiSlice";


// const reducer = combineReducers({
//   productsState: productsReducer,
// });

const store = configureStore({
  reducer:{
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  //middleware - Statemanagement la action nu onnu use pannuvom athu synchronous ah thaan run aagum atha asynchronous ah run panna thaan thunk use panrom
  //middleware: [thunk],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
