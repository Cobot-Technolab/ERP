import { configureStore } from "@reduxjs/toolkit";
import loginFormReducer from "@/store/features/auth/loginFormSlice";

export const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // RootState type
export type AppDispatch = typeof store.dispatch; // AppDispatch type
