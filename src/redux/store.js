import { configureStore } from "@reduxjs/toolkit";
//import userReducer from './slice/userSlice'
//import cartReducer from "./slice/cartSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore ({
    reducer: {
        cart: cartSlice,
    }
})

export default store