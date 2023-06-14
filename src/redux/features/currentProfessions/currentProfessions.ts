import { createSlice } from "@reduxjs/toolkit";

import { fetchProfessions } from "./thunks";

import type { TProfessionState } from "@/types";

const initialState: TProfessionState = {
  isLoading: false,
  error: "",
  professions: [],
};

export const currentProfessions = createSlice({
  name: "current-professions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfessions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProfessions.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.professions = payload;
      })
      .addCase(fetchProfessions.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (typeof payload === "string") {
          state.error = payload;
        } else {
          state.error = "Unknown error";
        }
      });
  },
});

export default currentProfessions.reducer;
