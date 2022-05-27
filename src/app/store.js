import { configureStore } from "@reduxjs/toolkit";
import { allApi } from "../services/allApis";
export default configureStore({
  reducer: {
    [allApi.reducerPath]: allApi.reducer,
  },
});
