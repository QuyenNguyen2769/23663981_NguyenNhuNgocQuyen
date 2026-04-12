import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.jsx";
import themeReducer from "../features/theme/ThemeSlice.jsx";
import authReducer from "../features/auth/authSlice.jsx";
import todoReducer from "../features/todo/todoSlice.jsx";
import cartReducer from "../features/cart/cartSlide.jsx";
import notificationReducer from "../features/notification/notificationSlice.jsx";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    auth: authReducer,
    todo: todoReducer, 
    cart: cartReducer,
    notification: notificationReducer,
  },
});