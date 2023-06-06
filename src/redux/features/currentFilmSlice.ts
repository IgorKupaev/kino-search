import { createSlice } from "@reduxjs/toolkit";

import { fetchFilm } from "./mockThunks";
import { TState } from "@/types";

const initialState: TState = {
  id: "",
  isLoading: false,
  error: "",
  film: undefined,
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
        if (typeof payload === "string") {
          state.error = payload;
        } else {
          state.error = "Unknown error";
        }
      });
  },
});

export default currentFilm.reducer;
