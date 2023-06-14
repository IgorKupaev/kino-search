import { createSlice } from "@reduxjs/toolkit";

import { fetchPremiers, fetchWallpapers } from "./thunks";

import type { TImagesData, TTopFilmsState } from "@/types";

const initialState: TTopFilmsState = {
  isLoading: false,
  error: "",
  films: [],
  wallpapersIds: [],
  wallpapersLinks: [],
};

export const premiers = createSlice({
  name: "premiers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPremiers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPremiers.fulfilled, (state, { payload }) => {
        const wallpapersIds: number[] = [];
        for (let i = payload.length - 8; i > payload.length - 15; i--) {
          wallpapersIds.push(payload[i].filmId);
        }
        state.isLoading = false;
        state.films = payload;
        state.wallpapersIds = wallpapersIds;
      })
      .addCase(fetchPremiers.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (typeof payload === "string") {
          state.error = payload;
        }
      })
      .addCase(fetchWallpapers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWallpapers.fulfilled, (state, { payload }) => {
        const result: string[] = [];
        JSON.parse(JSON.stringify(payload)).forEach((item: { data: TImagesData[] }) => {
          if (item.data[0].total > 0) {
            result.push(item.data[0].items[0].imageUrl);
          }
        });
        state.isLoading = false;
        state.wallpapersLinks = result;
      })
      .addCase(fetchWallpapers.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (typeof payload === "string") {
          state.error = payload;
        } else {
          state.error = "Unknown error";
        }
      });
  },
});

export default premiers.reducer;
