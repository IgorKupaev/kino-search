import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { baseUrl, fetchData } from "./helper";

import type { TErrorApi, TCurrentFilm, TProfession, TFilm, TImageItem } from "@/types";

export const fetchTopFilms = createAsyncThunk<TFilm[]>("fetchFilms", async (_, { rejectWithValue }) => {
  try {
    return await fetchData("topFilms");
  } catch (e) {
    rejectWithValue(e as TErrorApi);
  }
});

export const fetchFilm = createAsyncThunk<TCurrentFilm, string, { rejectValue: TErrorApi }>(
  "fetchFilm",
  async (id, { rejectWithValue }) => {
    try {
      return await fetchData(`topFilms?filmId=${id}`);
    } catch (e) {
      return rejectWithValue(e as TErrorApi);
    }
  }
);

export const fetchProfessions = createAsyncThunk<TProfession[], string, { rejectValue: TErrorApi }>(
  "fetchProfessions",
  async (id, { rejectWithValue }) => {
    try {
      return await fetchData(`professions?filmId=${id}`);
    } catch (e) {
      return rejectWithValue(e as TErrorApi);
    }
  }
);

export const fetchPremiers = createAsyncThunk<TFilm[], undefined, { rejectValue: TErrorApi }>(
  "fetchPremiers",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchData(`premiers`);
    } catch (e) {
      return rejectWithValue(e as TErrorApi);
    }
  }
);

export const fetchWallpapers = createAsyncThunk<string[], number[], { rejectValue: TErrorApi }>(
  "fetchWallpapers",
  async (ids) => {
    const promises: Promise<string>[] = [];

    ids.forEach((id) => {
      const promise: Promise<string> = axios.get(`${baseUrl}/wallpapers?filmId=${id}`);
      promises.push(promise);
    });
    let result;

    await Promise.all(promises)
      .then((res) => {
        result = res;
      })
      .catch((e) => {
        result = e;
      });

    return JSON.parse(JSON.stringify(result));
  }
);

export const fetchPosters = createAsyncThunk<TImageItem[], string, { rejectValue: TErrorApi }>(
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

export const fetchTrailers = createAsyncThunk<string[], string, { rejectValue: TErrorApi }>(
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

export const fetchCurrentWallpapers = createAsyncThunk<TImageItem[], string, { rejectValue: TErrorApi }>(
  "fetchCurrentWallpapers",
  async (id) => {
    const response = await fetchData(`wallpapers?filmId=${id}`);
    return response[0].items;
  }
);
