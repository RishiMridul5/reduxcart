import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authSliceReducer from "../features/auth/authSlice";
import cartSliceReducer from "../features/cart/cartSlice";
import UISliceReducer from "../features/ui/ui-slice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSliceReducer,
    cart: cartSliceReducer,
    ui: UISliceReducer,
  },
});
