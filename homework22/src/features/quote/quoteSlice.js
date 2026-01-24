import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_QUOTE = "https://dummyjson.com/quotes/random";
export const fetchRandomQuote = createAsyncThunk(
  "quote/fetchRandomQuote",
  async () => {
    const response = await axios.get(URL_QUOTE);
    return response.data;
  },
);

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: null,
    author: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.quote = action.payload.quote;
        state.author = action.payload.author;
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
