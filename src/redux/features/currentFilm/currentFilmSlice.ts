import { createSlice } from "@reduxjs/toolkit";

import { fetchFilm, fetchPosters, fetchTrailers, fetchCurrentWallpapers } from "./thunks";
import { randomInteger } from "@/app/film/helper";

import type { TState } from "@/types";

const initialState: TState = {
  id: "",
  isLoading: false,
  error: "",
  film: undefined,
  posters: [],
  trailers: [],
  wallpapers: [],
  currentWallpaper: "",
  isActive: false,
};

export const currentFilm = createSlice({
  name: "currentFilm",
  initialState,
  reducers: {
    clearState: (state) => {
      state.id = "";
      state.isLoading = false;
      state.error = "";
      state.film = undefined;
      state.posters = [];
      state.trailers = [];
      state.wallpapers = [];
      state.currentWallpaper = "";
      state.isActive = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.isActive = true;
        state.isLoading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, { meta, payload }) => {
        state.isLoading = false;
        state.id = meta.arg;
        state.error = "";
        if (!payload.logoUrl) {
          state.film = { ...payload, logoUrl: "" };
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
        state.error = "";
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
        state.error = "";
      })
      .addCase(fetchTrailers.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (typeof payload === "string") {
          state.error = payload;
        } else {
          state.error = "Unknown error";
        }
      })
      .addCase(fetchCurrentWallpapers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentWallpapers.fulfilled, (state, { payload }) => {
        state.wallpapers = payload;
        state.currentWallpaper = payload[randomInteger(0, payload.length - 1)].imageUrl;
        state.error = "";
      })
      .addCase(fetchCurrentWallpapers.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (typeof payload === "string") {
          state.error = payload;
        } else {
          state.error = "Unknown error";
        }
      });
  },
});

export const { clearState } = currentFilm.actions;
export default currentFilm.reducer;
