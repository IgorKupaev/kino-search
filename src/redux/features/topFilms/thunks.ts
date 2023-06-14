import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchData } from "../helper";

import type { TErrorApi, TFilm } from "@/types";

export const fetchTopFilms = createAsyncThunk<TFilm[]>("fetchFilms", async (_, { rejectWithValue }) => {
  try {
    return await fetchData("topFilms");
  } catch (e) {
    rejectWithValue(e as TErrorApi);
  }
});
