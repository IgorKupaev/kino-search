import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchPremiers } from "./actionCreators";

import type { topFilmsState } from "@/types";

const initialState = {
  isLoading: false,
  error: "",
  films: [],
} as topFilmsState;

export const premiers = createSlice({
  name: "premiers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPremiers.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.films = payload.films;
    },
    [fetchPremiers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPremiers.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default premiers.reducer;
