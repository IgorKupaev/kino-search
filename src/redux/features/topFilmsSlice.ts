import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchTopFilms } from "./mochThunks";

import type { topFilmsState } from "@/types";

const initialState = {
  isLoading: false,
  error: "",
  films: [],
} as topFilmsState;

export const topFilms = createSlice({
  name: "currentFilm",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTopFilms.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.films = action.payload.films;
    },
    [fetchTopFilms.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchTopFilms.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default topFilms.reducer;
