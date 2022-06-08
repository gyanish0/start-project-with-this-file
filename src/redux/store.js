import { configureStore } from "@reduxjs/toolkit";
import { ApiCall } from "./ApiCall";

export const store = configureStore({
  reducer: {
    [ApiCall.reducerPath]: ApiCall.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiCall.middleware),
});
