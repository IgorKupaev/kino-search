import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchData } from "../../api";

import type { TCurrentFilm, TErrorApi, TImageItem } from "@/types";

export const fetchFilm = createAsyncThunk<TCurrentFilm, string | number, { rejectValue: TErrorApi }>(
  "fetchFilm",
  async (id, { rejectWithValue }) => {
    try {
     const resp =  await fetchData(`topFilms?filmId=${id}`);
     console.log(resp);
      return resp[0];
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
      response[0].items.length = 6;
      return response[0].items;
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
