import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cart/cartSlice";
import authReducer from "../redux/cart/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
