import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginFormState {
  email: string;
  password: string;
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: LoginFormState = {
  email: "",
  password: "",
  isOpen: false,
  isLoading: false,
  error: null,
};

const loginFormSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    setIsOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    resetForm(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { setEmail, setPassword, setLoading, setError, resetForm } =
  loginFormSlice.actions;

export default loginFormSlice.reducer;
