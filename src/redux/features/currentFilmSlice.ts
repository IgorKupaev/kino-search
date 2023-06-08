import { createSlice } from "@reduxjs/toolkit";

import { fetchFilm, fetchPosters, fetchTrailers } from "./mockThunks";
import type { TState } from "@/types";

const initialState: TState = { // error: TErrorApi TODO
  id: "",
  isLoading: false,
  error: "",
  film: undefined,
  posters: [],
  trailers: []
};

export const currentFilm = createSlice({
  name: "top-films",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, { meta, payload }) => {
        state.isLoading = false;
        state.id = meta.arg;
        state.error = "";
        if (!payload.logoUrl) {
          state.film = {...payload, logoUrl: ''};
        } else {
          state.film = payload;
        }
      })
      .addCase(fetchFilm.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (typeof payload === "string") {
          state.error = payload;
        } else {
          state.error = "Unknown error";
        }
      })
      .addCase(fetchPosters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosters.fulfilled, (state, { payload }) => {
        state.posters = payload;
        state.error = '';
      })
      .addCase(fetchPosters.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (typeof payload === "string") {
          state.error = payload;
        } else {
          state.error = "Unknown error";
        }
      })
      .addCase(fetchTrailers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTrailers.fulfilled, (state, { payload }) => {
        state.trailers = payload;
        state.error = '';
      })
      .addCase(fetchTrailers.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (typeof payload === "string") {
          state.error = payload;
        } else {
          state.error = "Unknown error";
        }
      });
  },
});

export default currentFilm.reducer;
