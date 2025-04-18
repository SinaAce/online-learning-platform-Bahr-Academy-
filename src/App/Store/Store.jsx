import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../Components/Features/Auth/AuthSlice";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
