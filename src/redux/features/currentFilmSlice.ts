import { createSlice } from "@reduxjs/toolkit";

import { fetchFilm } from "./mochThunks";
import { State } from "@/types";

const initialState: State = {
  id: "",
  isLoading: false,
  error: "",
  film: undefined,
};

export const currentFilm = createSlice({
  name: "currentFilm",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.id = payload.meta.arg;
        state.error = "";
        if (!payload.payload.logoUrl) {
          state.film = {...payload.payload, logoUrl: ''};
        } else {
          state.film = payload.payload;
        }
      })
      .addCase(fetchFilm.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload ? payload.message : "Unknown error";
      });
  },
});

export default currentFilm.reducer;
