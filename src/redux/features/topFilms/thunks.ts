import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { baseUrl, fetchData } from "../helper";

import type { TErrorApi, TCurrentFilm, TProfession, TFilm, TImageItem } from "@/types";

export const fetchTopFilms = createAsyncThunk<TFilm[]>("fetchFilms", async (_, { rejectWithValue }) => {
  try {
    return await fetchData("topFilms");
  } catch (e) {
    rejectWithValue(e as TErrorApi);
  }
});