import { createSlice } from "@reduxjs/toolkit";

import { fetchProfessions } from "./mochThunks";
import { ProfessionState } from "@/types";

const initialState: ProfessionState = {
  isLoading: false,
  error: "",
  professions: [],
};

export const currentProfessions = createSlice({
  name: "currentProfessions",
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
      .addCase(fetchProfessions.rejected, (state, { payload }: any) => {
        state.isLoading = false;
        state.error = payload.message ? payload.message : "Unknown error";
      });
  },
});

export default currentProfessions.reducer;
