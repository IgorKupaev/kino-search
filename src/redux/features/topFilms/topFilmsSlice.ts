import { createSlice } from "@reduxjs/toolkit";

import { fetchTopFilms } from "./thunks";

import type { TTopFilmsState } from "@/types";

const initialState: TTopFilmsState = {
  isLoading: false,
  error: "",
  films: [],
};

export const topFilms = createSlice({
  name: "top-films",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTopFilms.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = "";
        state.films = payload;
      })
      .addCase(fetchTopFilms.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (typeof payload === "string") {
          state.error = payload;
        } else {
          state.error = "Unknown error";
        }
      });
  },
});

export default topFilms.reducer;
