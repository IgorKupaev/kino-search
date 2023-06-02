import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchPremiers, fetchWallpapers } from "./actionCreators";

import type { topFilmsState } from "@/types";

const initialState = {
  isLoading: false,
  error: "",
  films: [],
  wallpapersIds: [],
  wallpapersLinks: []
} as topFilmsState;

export const premiers = createSlice({
  name: "premiers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPremiers.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.films = payload.films;

      console.log(payload)

      const wallpapersIds = [];
      for (let i = payload.pagesCount - 1; i > payload.pagesCount - 6; i--) {
        wallpapersIds.push(payload.films[i].filmId)
      }
      state.wallpapersIds = wallpapersIds;
    },
    [fetchPremiers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPremiers.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [fetchWallpapers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchWallpapers.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      const result: string[] = [];
      payload.forEach((item: { data: { total: number; items: any[]; }; }) => {
        if (item.data.total > 0) {
          result.push(item.data.items[0].imageUrl)
        }
      })
      state.wallpapersLinks = result
    },
    [fetchWallpapers.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default premiers.reducer;
