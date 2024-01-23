import { configureStore } from "@reduxjs/toolkit";
import  actionSlice  from "./actionSlice";
import authSlice from "./authSlice"

const store = configureStore({
  reducer: {
    actions: actionSlice.reducer,
    auth: authSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
