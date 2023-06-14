import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchData } from "../helper";

import type { TCurrentFilm, TErrorApi, TImageItem } from "@/types";

export const fetchFilm = createAsyncThunk<TCurrentFilm, string | number, { rejectValue: TErrorApi }>(
  "fetchFilm",
  async (id, { rejectWithValue }) => {
    try {
      let result;

      await fetchData(`topFilms?filmId=${id}`).then((data) => {
        result = data[0];
      });
      return result as unknown as TCurrentFilm;
    } catch (e) {
      return rejectWithValue(e as TErrorApi);
    }
  }
);

export const fetchPosters = createAsyncThunk<TImageItem[], string | number, { rejectValue: TErrorApi }>(
  "fetchPosters",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchData(`posters?filmId=${id}`);
      const result = response[0].items;
      result.length = 6;
      return result;
    } catch (e) {
      return rejectWithValue(e as TErrorApi);
    }
  }
);

export const fetchTrailers = createAsyncThunk<string[], string | number, { rejectValue: TErrorApi }>(
  "fetchTrailers",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchData(`trailers?filmId=${id}`);
      return response[0].youtubeIds;
    } catch (e) {
      return rejectWithValue(e as TErrorApi);
    }
  }
);

export const fetchCurrentWallpapers = createAsyncThunk<TImageItem[], string | number, { rejectValue: TErrorApi }>(
  "fetchCurrentWallpapers",
  async (id) => {
    const response = await fetchData(`wallpapers?filmId=${id}`);
    return response[0].items;
  }
);
