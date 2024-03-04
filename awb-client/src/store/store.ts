import { configureStore } from "@reduxjs/toolkit";
import awbReducer from "../reducers/awbReducer";

export default configureStore({
  reducer: {
    awbReducer,
  },
});
