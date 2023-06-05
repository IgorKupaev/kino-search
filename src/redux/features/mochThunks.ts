import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ErrorApi, ICurrentFilm } from "@/types";

const baseUrl = "http://localhost:3005";

export const fetchTopFilms = createAsyncThunk("fetchFilms", async () => {
  try {
    const response = await axios.get(`${baseUrl}/topFilms`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

export const fetchFilm = createAsyncThunk<
  ICurrentFilm,
  string,
  {
    rejectValue: ErrorApi;
  }
>("fetchFilm", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseUrl}/topFilms?filmId=${id}`);
    return response.data;
  } catch (e: any) {
    return rejectWithValue(e);
  }
});

export const fetchProfessions = createAsyncThunk("fetchProfessions", async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/professions?filmId=${id}`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

export const fetchPremiers = createAsyncThunk("fetchPremiers", async () => {
  try {
    const response = await axios.get(`${baseUrl}/premiers`);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

export const fetchWallpapers = createAsyncThunk("fetchWallpapers", async (ids: number[]) => {
  const promises: Promise<any>[] = [];

  ids.forEach((id) => {
    const promise = axios.get(`${baseUrl}/wallpapers?filmId=${id}`);
    promises.push(promise);
    
  });
  let result;

  await Promise.all(promises).then((res) => {
    result = res;
  }).catch(e => {
    result = e;
  });
  return result;
});