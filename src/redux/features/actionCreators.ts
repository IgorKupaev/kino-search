import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ErrorApi, ICurrentFilm } from "@/types";

const APIKEY = ["3a026247-976f-47c6-817c-0604bf6f1d0d", "c2d9875f-04e6-4b71-99ee-63e470297702"][1];
const baseUrl = "https://kinopoiskapiunofficial.tech/api/v2.2/films";
const baseUrl2 = "https://kinopoiskapiunofficial.tech/api/v1";

export const fetchTopFilms = createAsyncThunk("fetchFilms", async () => {
  try {
    const response = await axios.get(`${baseUrl}/top?type=TOP_250_BEST_FILMS&page=1`, {
      headers: {
        accept: "application/json",
        "X-API-KEY": APIKEY,
      },
    });
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
    const response = await axios.get(`${baseUrl}/${id}`, {
      headers: {
        accept: "application/json",
        "X-API-KEY": APIKEY,
      },
    });
    return response.data;
  } catch (e: any) {
    return rejectWithValue(e);
  }
});

export const fetchProfessions = createAsyncThunk("fetchProfessions", async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl2}/staff?filmId=${id}`, {
      headers: {
        accept: "application/json",
        "X-API-KEY": APIKEY,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

export const fetchPremiers = createAsyncThunk("fetchPremiers", async () => {
  try {
    // URL is not for premiers. It's temp solution coz there is no wallpapers for premiers in db
    const response = await axios.get(`${baseUrl}/top?type=TOP_250_BEST_FILMS&page=1`, {
      headers: {
        accept: "application/json",
        "X-API-KEY": APIKEY,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

export const fetchWallpapers = createAsyncThunk("fetchWallpapers", async (ids: number[]) => {
  const promises: Promise<any>[] = [];

  ids.forEach((id) => {
    const promise = axios.get(`${baseUrl}/${id}/images?type=WALLPAPER&page=1`, {
      headers: {
        accept: "application/json",
        "X-API-KEY": APIKEY,
      },
    });
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