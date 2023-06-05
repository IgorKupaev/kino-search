import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TErrorApi, TCurrentFilm, TProfession, TFilm } from "@/types";

const baseUrl = "http://localhost:3005";

export const fetchTopFilms = createAsyncThunk<TFilm[]>("fetchFilms", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseUrl}/topFilms`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    rejectWithValue(e as TErrorApi);
  }
});

export const fetchFilm = createAsyncThunk<
  TCurrentFilm,
  string,
  {
    rejectValue: TErrorApi;
  }
>("fetchFilm", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseUrl}/topFilms?filmId=${id}`);
    return response.data;
  } catch (e) {
    return rejectWithValue(e as TErrorApi);
  }
});

export const fetchProfessions = createAsyncThunk<
  TProfession[],
  string,
  {
    rejectValue: TErrorApi;
  }
>("fetchProfessions", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseUrl}/professions?filmId=${id}`);
    return response.data;
  } catch (e) {
    return rejectWithValue(e as TErrorApi);
  }
});

export const fetchPremiers = createAsyncThunk<
  TFilm[]
>("fetchPremiers", async () => {
  try {
    const response = await axios.get(`${baseUrl}/premiers`);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

export const fetchWallpapers = createAsyncThunk<
  string[],
  number[],
  {
    rejectValue: TErrorApi;
  }
>("fetchWallpapers", async (ids) => {
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
});
