import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../src/features/quote/quoteSlice";

const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});

export default store;
