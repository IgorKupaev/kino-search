import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchData } from "../helper";

import type { TErrorApi, TCurrentFilm, TProfession, TFilm, TImageItem } from "@/types";

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