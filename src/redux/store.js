import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice'
import modalReducer from "./modalSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
});