import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ErrorApi, ICurrentFilm, IProfession } from "@/types";

const APIKEY = "3a026247-976f-47c6-817c-0604bf6f1d0d";
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
    console.log(response.data);
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
